import { Box, VStack, Text, Flex } from "@chakra-ui/react";
import React from "react";

const ProgramInformation = ({ program }: any) => {
  console.log(program);
  return (
    <VStack gap={3} mt={6}>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">Instance Goals:</Text>
        <Text>{program?.instanceGoals}</Text>
      </Flex>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">Milestones :</Text>
        <Text>{program?.milestones} </Text>
      </Flex>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">Rewards:</Text>
        <Text>{program?.rewards}</Text>
      </Flex>
      <Box w="full">
        <Text fontWeight="semibold">File:</Text>
        <object data="file" type="application/pdf" width="100%">
          <iframe src={program?.file} width="100%" height={1000}></iframe>
        </object>
        {/* <Box
          mt="12"
          ml="8"
          as="iframe"
          width="40%"
          height="100ve"
          frameBorder="0"
          scrolling="no"
          src={program?.file}
        >
          <a href="https://www.gps.ie/car-satnav-gps/">car gps</a>
        </Box> */}
      </Box>
    </VStack>
  );
};

export default ProgramInformation;
