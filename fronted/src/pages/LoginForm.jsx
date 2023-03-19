import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import {
  FormControl,
  FormLabel,
  Button,
  Stack,
  Input,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
const LoginForm = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
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

    const data = await axios.post(`http://localhost:8080/users/login`, {
      email: formValue.email,
      password: formValue.password,
    });
    const loginData = data.data.userData;
    console.log(loginData, "loginData");
    if (loginData.login) {
      localStorage.setItem("loggedUser", JSON.stringify(loginData));
    }
  };
  return (
    <Box w={"100%"}>
      <Box margin={"auto"} w={"40%"}>
        <FormControl
          borderRadius={".2rem"}
          padding={".5rem"}
          border={"1px solid "}
          isRequired
        >
          <Stack spacing={5}>
            {/* <Button color={"#ffffff"} bg={"blue.500"} w={"60%"}>
              New Form
            </Button> */}
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
    </Box>
  );
};

export default LoginForm;
