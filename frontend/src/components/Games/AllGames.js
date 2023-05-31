import React from "react";
import Game2 from "./Game2";
import Game3 from "./Game3";
import WheelSpinGame from "./WheelSpinGame";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
function AllGames() {
  return (
    <div>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        width="60vw"
        alignItems="center"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Wheel Spin</Tab>
            <Tab>Game 2</Tab>
            <Tab>Game 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <WheelSpinGame />
            </TabPanel>
            <TabPanel>
              <Game2 />
            </TabPanel>
            <TabPanel>
              <Game3 />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}

export default AllGames;
