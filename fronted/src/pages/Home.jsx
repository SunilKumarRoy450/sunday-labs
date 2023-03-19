import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Box,
  HStack,
  Tag,
  Avatar,
  TagLabel,
  VStack,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import "./style.css";
import Sidebar from "./Sidebar";
import Post from "./Post";
import UserFollow from "./UserFollow";
import { LoginContext } from "../contexts/LoginContext";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [createFile, setCreateFile] = useState(null);
  const [createCaption, setCreateCaption] = useState("");
  const { userData: user } = useContext(LoginContext);
  const { onClose } = useDisclosure();
  const data = JSON.parse(localStorage.getItem("loggedUser"));

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

  
const fileUrl = createFile && URL.createObjectURL(createFile);
  const handleOnClickPostCreation = () => {

    axios
      .post(`http://localhost:8080/posts/create`, {
        url: fileUrl,
        caption: createCaption,
        userId: data?.userData._id,
      })
      .then((res) => {
        getPosts();
        getComments();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box className="main">
      <Flex className="nav-container">
        <Box textAlign={"center"} className="logo-box">
          <Text fontWeight={"600"} fontSize="xl" as="cite" size="md">
            Instagram
          </Text>
        </Box>
        <Box className="feeds-box">
          <HStack>
            {posts?.map((item) => (
              <Tag
                key={item._id}
                size="xs"
                colorScheme="red"
                borderRadius="full"
              >
                <Avatar
                  src={item.userId.image}
                  size="lg"
                  name={item.userId.username}
                  ml={1}
                  mr={1}
                />
              </Tag>
            ))}
          </HStack>
        </Box>
        <Box className="detail-box">
          <Tag size="lg" colorScheme="red" borderRadius="full">
            <Avatar
              src={data?.userData.image}
              size="lg"
              name={data?.userData.username}
              ml={-1}
              mr={2}
            />
            <VStack>
              <TagLabel>
                {data?.userData.username.toLowerCase().split(" ").join(".")}
              </TagLabel>
              <TagLabel>{data?.userData.username}</TagLabel>
            </VStack>
          </Tag>
        </Box>
      </Flex>
      <Flex className="container">
        <Sidebar
          createFile={createFile}
          setCreateFile={setCreateFile}
          createCaption={createCaption}
          setCreateCaption={setCreateCaption}
          handleOnClickPostCreation={handleOnClickPostCreation}
        />
        <Post posts={posts} />
        <UserFollow />
      </Flex>
    </Box>
  );
};

export default Home;
