import Link from 'next/link';
import { useRouter } from 'next/router';
import { VStack, Text, Flex, Button } from '@chakra-ui/react';
import { AiFillEye } from 'react-icons/ai';
import { ProgramData } from '../../@types';

const ProgramInformation = ({ program }: { program?: ProgramData }) => {
  const router = useRouter();

  const handleVerify = () => {
    console.log('Verifying');
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
        >
          Verify
        </Button>
      </Flex>
    </VStack>
  );
};

export default ProgramInformation;
