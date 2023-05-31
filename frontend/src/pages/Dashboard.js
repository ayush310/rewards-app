import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import AllGames from "../components/Games/AllGames";
import { RewardsState } from "../context/RewardsProvider";
import SideDrawer from "../components/SideDrawer";
function Dashboard() {
  const history = useHistory();
  const { user } = RewardsState();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  return (
    <div>
      {user && (
        <>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-start"
            height="20vh"
            width="100vw"
            mb={0}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bg="white"
              width="100%"
              padding="5px 10px"
              borderWidth="5px"
            >
              <Button colorScheme="teal" variant="ghost">
                <SideDrawer />
              </Button>
              <Text
                fontSize="2xl"
                fontFamily="Work Sans"
                textAlign="center"
                width="100%"
              >
                Rewards
              </Text>
              <Button
                onClick={logoutHandler}
                colorScheme="teal"
                variant="ghost"
              >
                Logout
              </Button>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg="white"
            width="100vw"
            height="80%"
            padding="5px 10px"
            borderWidth="5px"
          >
            <Text
              fontSize="2xl"
              fontFamily="Work Sans"
              textAlign="center"
              width="100%"
              alignSelf="center"
            >
              Games
            </Text>
            <AllGames />
          </Box>
        </>
      )}
    </div>
  );
}

export default Dashboard;
