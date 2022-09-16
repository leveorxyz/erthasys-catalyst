import { Box, VStack, Text, Flex } from "@chakra-ui/react";
import React from "react";

const ProgramInformation = () => {
  return (
    <VStack gap={3} mt={6}>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">Instance Goals:</Text>
        <Text>Instance Goals</Text>
      </Flex>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">Milestones :</Text>
        <Text>Milestones </Text>
      </Flex>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">Rewards:</Text>
        <Text>Rewards</Text>
      </Flex>
      <Box w="full">
        <Text fontWeight="semibold">File:</Text>
        <object data="your_url_to_pdf" type="application/pdf" width="100%">
          <iframe
            src="https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true"
            width="100%"
            height={1000}
          ></iframe>
        </object>
      </Box>
    </VStack>
  );
};

export default ProgramInformation;
