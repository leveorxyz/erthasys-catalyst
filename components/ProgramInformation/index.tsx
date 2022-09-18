import { Box, VStack, Text, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillEye } from "react-icons/ai";

const ProgramInformation = ({ program }: any) => {
  const router = useRouter();

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
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">File:</Text>

        {program?.file && (
          <Flex alignItems="center" experimental_spaceX={2}>
            <Link href={program?.file}>
              <a target="_blank"> View file</a>
            </Link>

            <Link href={program?.file}>
              <a target="_blank">
                {" "}
                <AiFillEye />
              </a>
            </Link>
          </Flex>
        )}
      </Flex>
      <object
        data={program?.file}
        type="application/pdf"
        width="100%"
        height="500px"
      >
        <iframe
          src={`https://docs.google.com/viewer?url=${program?.file}&embedded=true`}
          title="file"
          height="100%"
          width="100%"
        />
      </object>

      <Flex experimental_spaceX={6} justify="end" mt={6}>
        <Button
          _hover={{
            backgroundColor: "red.100",
          }}
          background="red.400"
          onClick={() => router.push("/")}
        >
          Reject
        </Button>
        <Button
          _hover={{
            backgroundColor: "green.100",
          }}
          onClick={() => router.push("/all-programs")}
          background="green.400"
          type="submit"
        >
          Verify
        </Button>
      </Flex>
    </VStack>
  );
};

export default ProgramInformation;
