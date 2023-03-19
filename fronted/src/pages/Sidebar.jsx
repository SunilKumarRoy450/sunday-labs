import React, { useContext } from "react";
import {
  Box,
  VStack,
  Tag,
  Avatar,
  TagLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Input,
  Image,
  Flex,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import "./style.css";

const Sidebar = ({
  createFile,
  setCreateFile,
  createCaption,
  setCreateCaption,
  handleOnClickPostCreation,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loggedUserData = JSON.parse(localStorage.getItem("loggedUser"));
  const data = [
    {
      id: 1,
      title: "Home",
      image: "https://img.icons8.com/material-outlined/1x/home--v3.gif",
    },
    {
      id: 2,
      title: "Search",
      image: "https://img.icons8.com/ios-glyphs/1x/search--v2.gif",
    },
    {
      id: 3,
      title: "Explore",
      image: "https://img.icons8.com/ios/1x/compass--v2.gif",
    },
    {
      id: 4,
      title: "Reels",
      image: "https://img.icons8.com/ios/256/instagram-reel.png",
    },
    {
      id: 5,
      title: "Message",
      image: "https://img.icons8.com/ios/1x/speech-bubble-with-dots--v3.gif",
    },
    {
      id: 6,
      title: "Notification",
      image: "https://img.icons8.com/ios/1x/loading-heart.gif",
    },
  ];

  const handleOnChangeInput = (e) => {
    console.log(e.target.files[0]);
    setCreateFile(e.target.files[0]);
  };

  return (
    <Box className="sidebar-main">
      <VStack
        style={{ display: "inline-block" }}
        className="sidebar"
        spacing="34px"
      >
        {data?.map((item) => (
          <Tag key={item.id} size="lg" borderRadius="full">
            <Avatar
              src={item.image}
              size="xs"
              name="Segun Adebayo"
              ml={3}
              mr={10}
            />
            <TagLabel>{item.title}</TagLabel>
          </Tag>
        ))}
        <Tag onClick={onOpen} size="lg" borderRadius="full">
          <Avatar
            src="https://img.icons8.com/ios/1x/plus-2-math.png"
            size="xs"
            name="createIcon"
            ml={3}
            mr={10}
          />
          <TagLabel>Create</TagLabel>
        </Tag>
        <Tag size="lg" borderRadius="full">
          <Avatar
            src={loggedUserData.userData.image}
            size="sm"
            name={loggedUserData.userData.username}
            ml={1}
            mr={12}
          />
          <TagLabel>Profile</TagLabel>
        </Tag>
      </VStack>
      <Modal
        size={"xl"}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody h={"5rem"}>
            <Text fontWeight="bold" mb="1rem">
              be the first one to create today's post
            </Text>
            {createFile && (
              <Box w={"40%"} h={"8rem"}>
                <Flex>
                  <Image
                    width={"100px"}
                    alt="not found"
                    src={URL.createObjectURL(createFile)}
                  />
                  <ButtonGroup margin={"auto"}>
                    <Button onClick={() => setCreateFile(null)}>Remove</Button>
                  </ButtonGroup>
                </Flex>
              </Box>
            )}
            <Divider />
            <Input
              onChange={handleOnChangeInput}
              name="createFile"
              style={{ border: "none" }}
              h={"3rem"}
              type="file"
              placeholder="upload your files..."
            />
            <Input
              onChange={(e) => setCreateCaption(e.target.value)}
              name="caption"
              value={createCaption}
              h={"3rem"}
              placeholder="caption....."
            />
          </ModalBody>

          <ModalFooter>
            <Button
              variant={"outline"}
              colorScheme="teal"
              mr={3}
              onClick={handleOnClickPostCreation}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Sidebar;
