import React from "react";
import axios from "axios";
import {
  Box,
  VStack,
  Card,
  CardBody,
  Flex,
  Avatar,
  Heading,
  Button,
  Text,
  Image,
  IconButton,
  CardHeader,
  CardFooter,
  ButtonGroup,
  Tag,
} from "@chakra-ui/react";

import "./style.css";
import { BiNavigation, BiDotsHorizontalRounded } from "react-icons/bi";
import { SlHeart } from "react-icons/sl";
import { BsChat } from "react-icons/bs";
const Post = ({ posts, filterLikesByPostId, loggedInUserData, getLikes }) => {
  const handleLike = (id) => {
    const isLoggedInUserLiked = filterLikesByPostId(id)[1];
    if (isLoggedInUserLiked) {
      axios.delete(
        `http://localhost:8080/likes/delete/${loggedInUserData?.userData?._id}`
      );
    } else {
      const payload = {
        like: true,
        userId: loggedInUserData?.userData?._id,
        postId: id,
      };
      axios.post(`http://localhost:8080/likes/create`, payload);
    }
    setTimeout(() => {
      getLikes();
    }, 500);
  };
  return (
    <Box className="post-main">
      <VStack w={"100%"}>
        {posts?.map((item) => (
          <Card key={item._id} maxW="lg">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={item.userId.username} src={item.userId.image} />

                  <Box>
                    <Heading size="sm">{item.userId.username}</Heading>
                    <Text>{item?.place}, India</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                  icon={<BiDotsHorizontalRounded />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Image objectFit="cover" src={item.url} alt="Chakra UI" />
            </CardBody>

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <ButtonGroup>
                <Button
                  flex="1"
                  variant="ghost"
                  onClick={() => handleLike(item._id)}
                  leftIcon={
                    <SlHeart
                      style={{
                        color: filterLikesByPostId(item._id)[1] ? "red" : null,
                      }}
                    />
                  }
                >
                  <span>{filterLikesByPostId(item._id)[0]}</span>
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BsChat />}></Button>
                <Button
                  flex="1"
                  variant="ghost"
                  leftIcon={<BiNavigation />}
                ></Button>
              </ButtonGroup>
              <Box>
                <Text noOfLines={1}>
                  <Tag>{item.userId.username.toLowerCase().split(" ")}</Tag>
                  {item.caption}
                </Text>
              </Box>
            </CardFooter>
          </Card>
        ))}
      </VStack>
    </Box>
  );
};

export default Post;
