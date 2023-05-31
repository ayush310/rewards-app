// import React, { useState } from "react";
// import { Box, Button, Text } from "@chakra-ui/react";
// import { RewardsState } from "../../context/RewardsProvider";

// const prizes = [
//   "Mobikwik : Rs 150 off on your first recharge",
//   "Myntra : 10% off on Perfumes & Deodrants",
//   "Flipkart : 15% off on Mobile Phones",
//   "Blinkit : Flat Rs 100 off on your first order ",
//   "Myntra : 15% off on Ethnic Wear",
//   "Amazon : 20% off on Electronics",
//   "Mobikwik : Rs 80 off on Airtel recharge",
//   "Mytra : 20% off on Shoes",
//   "Flipkart : 15% off on Furniture",
//   "Zomato : Free delivery ",
//   "Myntra : 15% off on Chinos",
//   "Amazon : 15% off on Bluetooth Headphones & Speakers",
// ];

// function WheelSpinGame() {
// const [spinning, setSpinning] = useState(false);
// const [result, setResult] = useState(null);

// const { rewards, setRewards } = RewardsState();

//   const spinWheel = () => {
//     setSpinning(true);

//     setTimeout(() => {
//       const randomIndex = Math.floor(Math.random() * prizes.length);
//       setResult(prizes[randomIndex]);
//       setSpinning(false);
//     }, 2000);
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" mt={1}>
//       <Box
//         position="relative"
//         width="250px"
//         height="250px"
//         borderRadius="50%"
//         border="2px solid #000"
//         overflow="hidden"
//         mt="4px"
//       >
//         <Box
//           position="absolute"
//           top="50%"
//           left="50%"
//           transform={`translate(-50%, -50%) rotate(${
//             spinning ? "720deg" : "0deg"
//           })`}
//           transition="transform 2s"
//         >
//           <Box
//             width="200px"
//             height="200px"
//             borderRadius="50%"
//             backgroundColor="#f6c244"
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Text fontSize="xl" fontWeight="bold" color="#000">
//               Spin the Wheel!
//             </Text>
//           </Box>
//         </Box>
//       </Box>

//       <Button mt={4} colorScheme="teal" onClick={spinWheel} disabled={spinning}>
//         Spin
//       </Button>

//       {result && (
//         <Text fontSize="xl" mt={4}>
//           Congratulations! You won a coupon from {result}
//         </Text>
//       )}
//     </Box>
//   );
// }

// export default WheelSpinGame;

import React, { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { RewardsState } from "../../context/RewardsProvider";

const prizes = [
  "Mobikwik : Rs 150 off on your first recharge",
  "Myntra : 10% off on Perfumes & Deodrants",
  "Flipkart : 15% off on Mobile Phones",
  "Blinkit : Flat Rs 100 off on your first order ",
  "Myntra : 15% off on Ethnic Wear",
  "Amazon : 20% off on Electronics",
  "Mobikwik : Rs 80 off on Airtel recharge",
  "Mytra : 20% off on Shoes",
  "Flipkart : 15% off on Furniture",
  "Zomato : Free delivery ",
  "Myntra : 15% off on Chinos",
  "Amazon : 15% off on Bluetooth Headphones & Speakers",
];

function WheelSpinGame() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const toast = useToast();

  const { rewards, setRewards, limit, setLimit } = RewardsState();

  const handleSpinComplete = (result) => {
    setResult(result);

    setRewards((prevRewards) => [...prevRewards, result]);
    setSpinning(false);
    console.log(rewards);

    if (limit === 4) {
      toast({
        title: "Limit Reached",
        description: "You have reached the spin limit.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const spinWheel = () => {
    if (limit >= 5) {
      toast({
        title: "Limit Reached",
        description: "You have reached the spin limit.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setSpinning(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * prizes.length);
      const result = prizes[randomIndex];
      handleSpinComplete(result);
      console.log(rewards);
      setLimit((prevLimit) => prevLimit + 1);
    }, 2000);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={1}>
      <Box
        position="relative"
        width="250px"
        height="250px"
        borderRadius="50%"
        border="2px solid #000"
        overflow="hidden"
        mt="4px"
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform={`translate(-50%, -50%) rotate(${
            spinning ? "720deg" : "0deg"
          })`}
          transition="transform 2s"
        >
          <Box
            width="200px"
            height="200px"
            borderRadius="50%"
            backgroundColor="#96DED1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="xl" fontWeight="bold" color="#000">
              Spin the Wheel!
            </Text>
          </Box>
        </Box>
      </Box>

      <Button mt={4} colorScheme="cyan" onClick={spinWheel} disabled={spinning}>
        Spin
      </Button>

      {result && (
        <Text fontSize="xl" mt={4}>
          Congratulations! You won a coupon from {result}
        </Text>
      )}
    </Box>
  );
}

export default WheelSpinGame;
