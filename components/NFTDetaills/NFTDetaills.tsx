import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';

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
      <a
        href="https://ipfs.io/ipfs/bafyreiesxs24w5xnia7g2ksfovec3hsb2qmlnkfvhvhg3eyjf6yfzwzw74/metadata.json"
        target="_blank"
        rel="noreferrer"
      >
        <Button _hover={{ backgroundColor: 'green.100' }} mt="2">
          View on IPFS
        </Button>
      </a>
    </Box>
  );
};

export default NFTDetaills;
