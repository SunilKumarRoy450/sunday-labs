import React from "react";
import { Box, VStack, Tag, Avatar, TagLabel } from "@chakra-ui/react";

import "./style.css";

const Sidebar = () => {
  const data = [
    { id: 1, title: "Home", image: "" },
    { id: 2, title: "Search", image: "" },
    { id: 3, title: "Explore", image: "" },
    { id: 4, title: "Reels", image: "" },
    { id: 5, title: "Message", image: "" },
    { id: 6, title: "Notification", image: "" },
    { id: 7, title: "Create", image: "" },
  ];
  return (
    <Box className="sidebar-main">
      <VStack  w={'80%'} spacing="34px">
        {data?.map((item) => (
          <Tag key={item.id} size="lg" colorScheme="red" borderRadius="full">
            <Avatar
              src="https://bit.ly/sage-adebayo"
              size="sm"
              name="Segun Adebayo"
              ml={1}
              mr={12}
            />
            <TagLabel>{item.title}</TagLabel>
          </Tag>
        ))}
        <Tag size="lg" colorScheme="red" borderRadius="full">
          <Avatar
            src="https://bit.ly/sage-adebayo"
            size="sm"
            name="Segun Adebayo"
            ml={1}
            mr={12}
          />
          <TagLabel>Home</TagLabel>
        </Tag>
      </VStack>
    </Box>
  );
};

export default Sidebar;
