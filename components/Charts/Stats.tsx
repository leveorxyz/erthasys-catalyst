import {
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
  Checkbox,
  Box,
} from "@chakra-ui/react";

const Stats = () => {
  return (
    <Box ml={2}>
      <Stat>
        <StatNumber fontSize={30}>15,000</StatNumber>
        <StatHelpText>
          Total
          <StatArrow type="increase" ml="3" />
          2.36%
        </StatHelpText>
      </Stat>
      <Checkbox colorScheme="green" defaultChecked>
        On Track
      </Checkbox>
    </Box>
  );
};

export default Stats;
