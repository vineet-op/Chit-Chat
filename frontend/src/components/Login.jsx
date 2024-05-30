import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleShow = () => {
    setShow(!show);
  };

  const HandleSubmit = () => {};

  return (
    <>
      <VStack spacing={"5px"} color={"black"}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <InputRightAddon width={"4.5rem"}>
              <Button h="1.75rem" size={"md"} onClick={HandleShow}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightAddon>
          </InputGroup>
        </FormControl>
        <Button
          bgColor={"green"}
          color={"white"}
          width="100%"
          style={{ marginTop: 15 }}
          onClick={HandleSubmit}
        >
          Signin
        </Button>
        <Button
          variant={"solid"}
          bgColor={"red"}
          color={"white"}
          width="100%"
          onClick={(e) => {
            setEmail("guest@example.com");
            setPassword(123456);
          }}
        >
          Get Guest Credentials
        </Button>
      </VStack>
    </>
  );
};

export default Login;
