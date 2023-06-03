import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { RewardsState } from "../context/RewardsProvider";

function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement = "left";

  const { rewards } = RewardsState();

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" variant="ghost">
        My Rewards
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">My Rewards</DrawerHeader>
          <DrawerBody>
            {rewards.length === 0 ? (
              <Text>No rewards yet. Spin the wheel!</Text>
            ) : (
              rewards.map((reward, index) => (
                <Box
                  key={index}
                  bg="#89CFF0"
                  w="100%"
                  p={4}
                  color="white"
                  marginBottom="4px"
                >
                  <Text>{reward}</Text>
                </Box>
              ))
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default SideDrawer;
