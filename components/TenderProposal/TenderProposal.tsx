import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Icon,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiSearchFill } from 'react-icons/ri';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import BackButton from '../BackButton/BackButton';
import Pagination from './Pagination';
import ProposalCard from './ProposalCard';
import ProposalFilter from './ProposalFilter';
import { db } from '../../firebase';
import { Program, ProgramData } from '../../@types';

const TenderProposal = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'programs'), orderBy('created', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setPrograms(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() as ProgramData,
        }))
      );
    });
  }, []);

  return (
    <Box bg="white" borderRadius="5" px={5} py={10} mt={10}>
      <Flex justifyContent="space-between">
        <Heading size="md">
          <BackButton />
          Home
        </Heading>
        <InputGroup w="300px">
          <InputRightElement pointerEvents="none">
            <Icon as={RiSearchFill} color="dark.100" fontWeight="bold" />
          </InputRightElement>
          <Input
            type="search"
            placeholder="Search"
            background="offwhite.100"
            borderRadius="10"
            border="none"
          />
        </InputGroup>
      </Flex>
      <Flex justifyContent="space-between" flexDir={['column', 'row']} mt={5}>
        <Box
          bg="white"
          w={['100%', '22%']}
          boxShadow="0px 0px 25px rgba(0, 0, 0, 0.05)"
          borderRadius={5}
          p="2"
        >
          <ProposalFilter />
        </Box>
        <Box
          bg="white"
          boxShadow="0px 0px 25px rgba(0, 0, 0, 0.05)"
          borderRadius={5}
          w={['100%', '76%']}
          mt={[5, 0]}
          p="3"
        >
          <Box textAlign="center">
            <Heading size="sm">All Program</Heading>
          </Box>
          <SimpleGrid columns={[1, 3]} gap={6} mt={6}>
            {programs.map((program) => (
              <Link href={`program-details/${program.id}`} key={program.id}>
                <a>
                  <ProposalCard />
                </a>
              </Link>
            ))}
          </SimpleGrid>
          <Box py="10">
            <Flex justifyContent={['center', 'flex-end']}>
              <Pagination />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default TenderProposal;
