import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const Home = () => {
  return (
    <Container maxWidth="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        width="100%"
        margin="30px 0 15px"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work Sans">
          Chatify
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
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

export default Home;
