import Link from 'next/link';
import { useRouter } from 'next/router';
import { VStack, Text, Flex, Button, useToast, useBoolean } from '@chakra-ui/react';
import { AiFillEye } from 'react-icons/ai';
import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi';
import { ProgramData } from '../../@types';
import demoABI from '../../config/abis/demoABI.json';
import useStorage from '../../hooks/useStorage';
import { useMemo } from 'react';
import SubmitNFT from '../SubmitNFT/SubmitNFT';
import NFTDetaills from '../NFTDetaills/NFTDetaills';

const ProgramInformation = ({ program }: { program?: ProgramData }) => {
  const [loading, setLoading] = useBoolean();
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const toast = useToast();
  const { getItem } = useStorage();

  const user = getItem('user');

  const parsedUser = useMemo(() => (user ? JSON.parse(user) : undefined), [user]);

  const { config } = usePrepareContractWrite({
    addressOrName: '0x9F12165d3b069Fb807b6b649c5795bEc4426C594',
    contractInterface: demoABI,
    functionName: 'test',
  });
  const { writeAsync } = useContractWrite(config);

  const handleVerifierSubmit = async () => {
    if (!(isConnected && address)) {
      toast({
        status: 'error',
        description: 'Please connect your wallet.',
        duration: 15000,
      });
      return;
    }
    try {
      setLoading.on();
      const res = await writeAsync?.();

      if (res?.hash) {
        setLoading.off();
        toast({
          status: 'success',
          description: (
            <p>
              Successfully ES-C minted for Offsetter <br />
              Successfully ES NFT Minted for Emitter&apos;s marketplace
            </p>
          ),
          duration: 15000,
        });
      }
    } catch (error) {
    } finally {
      setLoading.off();
    }
  };

  const handleMint = async () => {
    if (!(isConnected && address)) {
      toast({
        status: 'error',
        description: 'Please connect your wallet.',
        duration: 15000,
      });
      return;
    }
    try {
      setLoading.on();
      const res = await writeAsync?.();

      if (res?.hash) {
        setLoading.off();
        toast({
          status: 'success',
          description: 'Successfully minted',
        });
      }
    } catch (error) {
    } finally {
      setLoading.off();
    }
  };

  const handleVerify = async () => {
    switch (parsedUser?.role) {
      case 'verifier':
        handleVerifierSubmit();
        break;
      default:
        handleMint();
    }
  };

  return (
    <VStack gap={3} mt={6}>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">Instance Goals:</Text>
        <Text>{program?.instanceGoals}</Text>
      </Flex>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">Pollutant :</Text>
        <Text>{program?.pollutant} </Text>
      </Flex>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">Initial pollutant amount:</Text>
        <Text>{program?.initialAmount} </Text>
      </Flex>
      <Flex experimental_spaceX={2} w="full">
        <Text fontWeight="semibold">Target pollutant amount:</Text>
        <Text>{program?.targetAmount} </Text>
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
                {' '}
                <AiFillEye />
              </a>
            </Link>
          </Flex>
        )}
      </Flex>
      <object data={program?.file} type="application/pdf" width="100%" height="500px">
        <iframe
          src={`https://docs.google.com/viewer?url=${program?.file}&embedded=true`}
          title="file"
          height="100%"
          width="100%"
        />
      </object>

      {parsedUser?.role === 'verifier' && <NFTDetaills />}

      {parsedUser?.role === 'offsetter' ? (
        <SubmitNFT />
      ) : (
        <Flex experimental_spaceX={6} justify="end" mt={6}>
          <Button
            _hover={{
              backgroundColor: 'red.100',
            }}
            background="red.400"
            onClick={() => router.push('/')}
          >
            Reject
          </Button>
          <Button
            _hover={{
              backgroundColor: 'green.100',
            }}
            background="green.400"
            onClick={handleVerify}
            isLoading={loading}
          >
            Verify
          </Button>
        </Flex>
      )}
    </VStack>
  );
};

export default ProgramInformation;
