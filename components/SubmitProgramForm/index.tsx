import {
  Box,
  VStack,
  Text,
  Heading,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiSearchFill, RiAwardFill, RiStarFill } from "react-icons/ri";
import FormInput from "../FormInputs/FormInput";
import { FaFileUpload } from "react-icons/fa";

const SubmitProgramForm = () => {
  const [isFileHoverOnDrop, setFileHoverOnDrop] = useState(false);
  const [file, setFile] = useState<File>();

  return (
    <Box bg="white" borderRadius={10} px={6} py={4}>
      <VStack gap={5}>
        <Box textAlign="center">
          <Heading size="sm">Submit Proposal</Heading>
        </Box>
        <FormInput placeholder="Instance Goals" icon={RiSearchFill} />
        <FormInput placeholder="Milestones" icon={RiStarFill} />
        <FormInput placeholder="Rewards" icon={RiAwardFill} />

        <Box
          w="full"
          onDragEnter={() => {
            setFileHoverOnDrop(true);
          }}
          onDragLeave={() => {
            setFileHoverOnDrop(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setFileHoverOnDrop(true);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setFileHoverOnDrop(false);
            if (e.dataTransfer.files) {
              setFile(e.dataTransfer.files[0]);
            }
          }}
        >
          <Input
            placeholder="File"
            accept="application/pdf"
            hidden
            id="browse-file-button"
            border="none"
            focusBorderColor="brand.100"
            bg="offwhite.100"
            _placeholder={{ color: "gray.500" }}
            type="file"
            onChange={(e: any) => {
              setFile(e.target.files[0] ?? undefined);
            }}
          />
          <label htmlFor="browse-file-button">
            <Box
              border="gray.400"
              bg="offwhite.100"
              _placeholder={{ color: "gray.500" }}
              borderStyle={isFileHoverOnDrop ? "dashed" : "solid"}
              pr={2}
              pl={3}
              py={2}
              borderRadius={6}
              color="gray.500"
              borderWidth="1px"
              borderColor="gray.400"
            >
              {file ? (
                <Flex w="full" justify="space-between" alignItems="center">
                  <Text>{file.name}</Text>
                  <FaFileUpload />
                </Flex>
              ) : (
                <Flex w="full" justify="space-between" alignItems="center">
                  <Text>
                    Drop your document here, or{" "}
                    <span color="#fff5">Browse</span>
                  </Text>
                  <FaFileUpload />
                </Flex>
              )}
            </Box>
          </label>
        </Box>

        <Flex experimental_spaceX={6} justify="end">
          <Button background="red.400">Cancel</Button>
          <Button background="green.400">Submit</Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default SubmitProgramForm;
