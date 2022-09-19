import {
  Container,
  VStack,
  Select,
  Flex,
  Button,
  Box,
  Heading,
  toast,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import FormInput from '../../components/FormInputs/FormInput';
import Title from '../../components/Title/Title';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useStorage from '../../hooks/useStorage';

interface FormData {
  email: string;
  password: string;
  role: string;
}

const Login = () => {
  const router = useRouter();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const { setItem } = useStorage();

  const handleFormSubmit = async (data: FormData) => {
    if (
      data.email === 'demo-authority@gmail.com' &&
      data.password === 'auth123' &&
      data.role === 'environmentalRegulatoryAuthority'
    ) {
      console.log('environmentalRegulatoryAuthority');
      setItem('user', JSON.stringify(data));
      router.push('/submit-program');
    } else if (
      data.email === 'demo-community@gmail.com' &&
      data.password === 'comm123' &&
      data.role === 'localCommunity'
    ) {
      console.log('localCommunity');
      setItem('user', JSON.stringify(data));
      router.push('/all-programs');
    } else if (
      data.email === 'demo-offsetter@gmail.com' &&
      data.password === 'Offs123' &&
      data.role === 'offsetter'
    ) {
      console.log('offsetter');
      setItem('user', JSON.stringify(data));
      router.push('/all-programs');
    } else if (
      data.email === 'demo-verifier@gmail.com' &&
      data.password === 'Veri123' &&
      data.role === 'verifier'
    ) {
      console.log('Verifier');
      setItem('user', JSON.stringify(data));
      router.push('/all-programs');
    } else {
      toast({ status: 'error', description: 'Wrong Credentials' });
    }
  };

  return (
    <>
      <Title title="Announcement" />
      <Container maxW="2xl" mt={10} bg="white" borderRadius={10} px={6} py={4}>
        <Box textAlign="center">
          <Heading size="sm">Login</Heading>
        </Box>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <VStack align="stretch" gap={5} mt={5}>
            <FormInput
              placeholder="Email"
              icon={AiOutlineMail}
              register={register('email', { required: true })}
              isInvalid={!!errors?.email}
            />
            <FormInput
              placeholder="Password"
              icon={AiOutlineLock}
              register={register('password', { required: true })}
              isInvalid={!!errors?.password}
            />
            <Select
              placeholder="Select role"
              {...register('role', { required: true })}
              _placeholder={{ color: 'gray.500' }}
              isInvalid={!!errors?.role}
            >
              <option value="environmentalRegulatoryAuthority">
                Environmental Regulatory Authority
              </option>
              <option value="localCommunity">Local Community</option>
              <option value="offsetter">Offsetter</option>
              <option value="verifier">Verifier</option>
              <option value="emitter">Emitter</option>
            </Select>
          </VStack>
          <Flex experimental_spaceX={6} justify="end" mt={6}>
            <Button background="green.400" type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
};

export default Login;
