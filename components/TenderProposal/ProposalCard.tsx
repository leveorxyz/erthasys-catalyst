import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import moment from 'moment';
import { ProgramData } from '../../@types';
import HeadingSection from './HeadingSection';

type PropsType = {
  program: ProgramData;
};

const ProposalCard = ({ program }: PropsType) => {
  return (
    <Box
      boxShadow=" 0px 0px 25px rgba(0, 0, 0, 0.05)"
      borderRadius="5"
      p="2"
      cursor="pointer"
      _hover={{ color: 'black', transform: 'scale(1.01)' }}
    >
      <Box bg="blackAlpha.100" borderRadius={10}>
        <HStack fontSize="10px">
          <HeadingSection
            label="Created at"
            content={moment(program?.created?.seconds * 1000).format('DD MMM YYYY hh:mm a')}
          />
        </HStack>
      </Box>
      <Box padding="1" border="1px solid" borderColor="blackAlpha.300" borderRadius={10} mt="2">
        <Box w="full">
          <Text fontWeight="semibold" whiteSpace="nowrap">
            Instance Goals:
          </Text>
          <Text color="gray.600" fontSize="small">
            {program?.instanceGoals}
          </Text>
        </Box>
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
      </Box>
    </Box>
  );
};

export default ProposalCard;
