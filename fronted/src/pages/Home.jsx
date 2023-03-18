import React from "react";
import {
  Box,
  Heading,
  HStack,
  Tag,
  Avatar,
  TagLabel,
  VStack,Text
} from "@chakra-ui/react";
import "./style.css";
import Sidebar from "./Sidebar";
import Post from "./Post";
import UserFollow from "./UserFollow";
const Home = () => {
  return (
    <Box className="main">
      <HStack className="nav-container">
        <Box className="logo-box">
          <Text fontWeight={'700'} fontSize='xl' as='cite' size='md'>Instagram</Text>
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
        <Box className="detail-box">
          <Tag size="lg" colorScheme="red" borderRadius="full">
            <Avatar
              src="https://bit.ly/sage-adebayo"
              size="lg"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <VStack>
              <TagLabel>sunil.roy</TagLabel>
              <TagLabel>Sunil Roy</TagLabel>
            </VStack>
          </Tag>
        </Box>
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
