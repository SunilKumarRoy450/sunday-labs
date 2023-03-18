import React from "react";
import { Box, VStack, Tag, Avatar, TagLabel } from "@chakra-ui/react";

import "./style.css";

const Sidebar = () => {
  const data = [
    { id: 1, title: "Home", image: "https://img.icons8.com/material-outlined/1x/home--v3.gif" },
    { id: 2, title: "Search", image: "https://img.icons8.com/ios-glyphs/1x/search--v2.gif" },
    { id: 3, title: "Explore", image: "https://img.icons8.com/ios/1x/compass--v2.gif" },
    { id: 4, title: "Reels", image: "https://img.icons8.com/ios/256/instagram-reel.png" },
    { id: 5, title: "Message", image: "https://img.icons8.com/ios/1x/speech-bubble-with-dots--v3.gif" },
    { id: 6, title: "Notification", image: "https://img.icons8.com/ios/1x/loading-heart.gif" },
    { id: 7, title: "Create", image: "https://img.icons8.com/ios/1x/plus-2-math.png" },
  ];
  return (
    <Box className="sidebar-main">
      <VStack style={{display:'inline-block'}}  w={'70%'} spacing="34px">
        {data?.map((item) => (
          <Tag  key={item.id} size="lg"   borderRadius="full">
            <Avatar
              src={item.image}
              size="xs"
              name="Segun Adebayo"
              ml={3}
              mr={12}
              
            />
            <TagLabel>{item.title}</TagLabel>
          </Tag>
        ))}
        <Tag size="lg"  borderRadius="full">
          <Avatar
            src=""
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
