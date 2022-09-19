import { Box, Flex, Text, Image } from '@chakra-ui/react';

const NFTDetaills = () => {
  return (
    <Box w="full">
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">NFT Name:</Text>
        <Text>Earth</Text>
      </Flex>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">NFT Description:</Text>
        <Text>For the sake of all of us earthlings out there</Text>
      </Flex>
      <Image
        src="https://www.billboard.com/wp-content/uploads/media/05-lil-dicky-earth-MV-2019-billboard-1548.jpg"
        alt="nft"
        width="300px"
        borderRadius={5}
      />
    </Box>
  );
};

export default NFTDetaills;
