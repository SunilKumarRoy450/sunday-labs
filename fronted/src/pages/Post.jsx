import React, { useState, useEffect } from "react";
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
const Post = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const getPosts = () => {
    axios
      .get(`http://localhost:8080/posts`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  };

  const getComments = () => {
    axios
      .get(`http://localhost:8080/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPosts();
    getComments();
  }, []);

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
                  leftIcon={<SlHeart />}
                ></Button>
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
