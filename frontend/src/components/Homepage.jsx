import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";

const Homepage = () => {
  return (
    <Container maxW={"100vh"} centerContent>
      <Box d={"flex"} justifyContent={"center"} p={3}>
        <Text
          mt={"10"}
          fontFamily={"sans-serif"}
          fontSize={"4xl"}
          color={"white"}
        >
          TALK TOWN
        </Text>
      </Box>
      <Box bg={"white"} w={"80%"} p={4} borderRadius={"lg"} borderWidth={"1px"}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
