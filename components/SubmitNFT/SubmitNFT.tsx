import {
  Container,
  VStack,
  Flex,
  Button,
  Box,
  Heading,
  useToast,
  useBoolean,
} from '@chakra-ui/react';
import React from 'react';
import FormInput from '../../components/FormInputs/FormInput';
import Title from '../../components/Title/Title';
import { FaPencilAlt, FaFileImage } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/router';
// import { NFTStorage, File } from 'nft.storage';
// import useStorage from '../../hooks/useStorage';

interface FormData {
  nftName: string;
  nftDescription: string;
  nftImage: string;
}

// const client = new NFTStorage({ token: `${NFT_KEY}` });

const SubmitNFT = () => {
  const [loading, setLoading] = useBoolean(false);
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const handleFormSubmit = async (data: FormData) => {
    setLoading.on();

    setTimeout(() => {
      setLoading.off();
      reset();
      toast({ status: 'success', description: 'Success!' });
    }, 5000);
  };

  return (
    <>
      <Title title="Announcement" />
      <Container maxW="2xl" mt={10} bg="white" borderRadius={10} px={6} py={4}>
        <Box textAlign="center">
          <Heading size="sm">SubmitNFT</Heading>
        </Box>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <VStack align="stretch" gap={5} mt={5}>
            <FormInput
              placeholder="NFT Name"
              icon={FaPencilAlt}
              register={register('nftName', { required: true })}
              isInvalid={!!errors?.nftName}
            />
            <FormInput
              placeholder="NFT Description"
              icon={FaPencilAlt}
              register={register('nftDescription', { required: true })}
              isInvalid={!!errors?.nftDescription}
            />

            <FormInput
              inputType="file"
              placeholder="NFT Image"
              icon={FaFileImage}
              register={register('nftImage', { required: true })}
              isInvalid={!!errors?.nftImage}
            />
          </VStack>
          <Flex experimental_spaceX={6} justify="end" mt={6}>
            <Button background="green.400" type="submit" isLoading={loading}>
              Verify
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
};

export default SubmitNFT;
