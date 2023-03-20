import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Button,
  Stack,
  Input,
  ButtonGroup,
  Box,
  Image,
  Flex,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import "./style.css";
import axios from "axios";
const LoginForm = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const [signupFormValue, setSignupFormValue] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUserData } = useContext(LoginContext);

  useEffect(() => {
    let userLoggedIn = JSON.parse(localStorage.getItem("loggedUser"));
    getUserData(userLoggedIn);
  }, []);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handeOnClickLoginForm = async (e) => {
    e.preventDefault();

    const data = await axios.post(
      `https://cyan-foal-robe.cyclic.app/users/login`,
      {
        email: formValue.email,
        password: formValue.password,
      }
    );
    const loginData = data.data.userData;
    if (loginData.login) {
      localStorage.setItem("loggedUser", JSON.stringify(loginData));
      navigate("/home");
    } else {
      alert("Please SignUp First");
      navigate("/");
    }
  };

  //Signup

  const handeOnClickSignupForm = (e) => {
    e.preventDefault();
    axios.post(`https://cyan-foal-robe.cyclic.app/users/register`, {
      username: signupFormValue.username,
      email: signupFormValue.email,
      password: signupFormValue.password,
      image: signupFormValue.image,
    });
    onClose();
    navigate("/home");
  };
  const handleOnChangeOnSignup = (e) => {
    const { value, name } = e.target;
    setSignupFormValue({ ...signupFormValue, [name]: value });
  };

  return (
    <Box className="form-main">
      <Box className="container-main-form">
        <Flex>
          <Box className="form-img">
            <Image
              m={"auto"}
              width={"200px"}
              src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
          </Box>
          <Box className="form-container">
            <FormControl
              borderRadius={".2rem"}
              padding={".5rem"}
              border={"1px solid "}
              isRequired
            >
              <Stack spacing={5}>
                <Heading>Login</Heading>
                <Button onClick={onOpen}>Sign Up</Button>
                <FormLabel>Email</FormLabel>
                <Input
                  onChange={handleOnChange}
                  size="lg"
                  placeholder="Email"
                  name="email"
                  value={formValue.email}
                />
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={handleOnChange}
                  size="lg"
                  placeholder="Password"
                  name="password"
                  value={formValue.password}
                />

                <ButtonGroup>
                  <Button onClick={handeOnClickLoginForm} bg={"green.500"}>
                    Login
                  </Button>
                </ButtonGroup>
              </Stack>
            </FormControl>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Register</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormLabel>Username</FormLabel>
              <Input
                onChange={handleOnChangeOnSignup}
                size="lg"
                placeholder="Username"
                name="username"
                value={signupFormValue.username}
              />
              <FormLabel>Email</FormLabel>
              <Input
                onChange={handleOnChangeOnSignup}
                size="lg"
                placeholder="Email"
                name="email"
                value={signupFormValue.email}
              />
              <FormLabel>Image Url</FormLabel>

              <Input
                onChange={handleOnChangeOnSignup}
                size="lg"
                placeholder="Image url.."
                name="image"
                value={signupFormValue.image}
              />
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleOnChangeOnSignup}
                size="lg"
                placeholder="Password"
                name="password"
                value={signupFormValue.password}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={handeOnClickSignupForm} variant="ghost">
                Register
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default LoginForm;
