import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function Home() {
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" align="center">
          Rewards
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
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
}

export default Home;
