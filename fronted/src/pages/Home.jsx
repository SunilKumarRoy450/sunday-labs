import React from "react";
import { Box, Heading, HStack, Tag, Avatar } from "@chakra-ui/react";
import "./style.css";
import Sidebar from "./Sidebar";
import Post from "./Post";
import UserFollow from "./UserFollow";
const Home = () => {
  return (
    <Box className="main">
      <HStack className="nav-container">
        <Box className="logo-box">
          <Heading size={"lg"}>Instagram</Heading>
        </Box>
        <Box className="feeds-box">
          <HStack>
            <Tag size="xs" colorScheme="red" borderRadius="full">
              <Avatar
                src="https://bit.ly/sage-adebayo"
                size="lg"
                name="Segun Adebayo"
                ml={1}
                mr={1}
              />
            </Tag>
          </HStack>
        </Box>
        <Box className="detail-box"></Box>
      </HStack>
      <HStack className="container">
        <Sidebar />
        <Post />
        <UserFollow />
      </HStack>
    </Box>
  );
};

export default Home;
