import {
  Box,
  VStack,
  Text,
  Heading,
  Button,
  Flex,
  Input,
  useBoolean,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';
import imageAPI from '../../services/imageAPI';
import { getBase64 } from '../../utils/utils';
import { SegmentResponse } from '../../@types';
import AnalysisResult from './AnalysisResult';

const VerifyProgram = () => {
  const [isLoading, setIsLoading] = useBoolean(false);
  const [isFileHoverOnDrop, setFileHoverOnDrop] = useState(false);
  const [file, setFile] = useState<File>();
  const [segmentResult, setSegmentResult] = useState<SegmentResponse>();
  const toast = useToast();

  const handleVerify = async () => {
    if (!file) {
      toast({ status: 'error', description: 'Please select and image!' });
      return;
    }
    setIsLoading.on();
    const b64Image = await getBase64(file);
    const res = await imageAPI.getSegmentedImage({ image: b64Image });
    if (res !== undefined) {
      setSegmentResult(res);
    } else {
      toast({
        status: 'error',
        description: "Image is too large or can't be processed at this moment!",
      });
    }
    setIsLoading.off();
  };

  return (
    <Box bg="white" borderRadius={10} px={6} py={4}>
      <VStack gap={5}>
        <Box textAlign="center">
          <Heading size="sm">Verify Program</Heading>
        </Box>

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
            accept="image/*"
            hidden
            id="browse-file-button"
            border="none"
            focusBorderColor="brand.100"
            bg="offwhite.100"
            _placeholder={{ color: 'gray.500' }}
            type="file"
            onChange={(e: any) => {
              setFile(e.target.files[0] ?? undefined);
            }}
          />
          <label htmlFor="browse-file-button">
            <Box
              border="gray.400"
              bg="offwhite.100"
              _placeholder={{ color: 'gray.500' }}
              borderStyle={isFileHoverOnDrop ? 'dashed' : 'solid'}
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
                    Drop image here, or <span color="#fff5">Browse</span>
                  </Text>
                  <FaFileUpload />
                </Flex>
              )}
            </Box>
          </label>
        </Box>

        <Button background="green.400" onClick={handleVerify} isLoading={isLoading}>
          Verify
        </Button>
      </VStack>

      {segmentResult && <AnalysisResult segmentResult={segmentResult} />}
    </Box>
  );
};

export default VerifyProgram;
