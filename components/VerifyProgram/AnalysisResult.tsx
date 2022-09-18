import { Box, Heading, HStack, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import { SegmentResponse } from '../../@types';
import ColumnChart from './ColumnChart';
import InfoItem from './InfoItem';
import PieChart from './PieChart';

type PropsType = {
  segmentResult: SegmentResponse;
};

const AnalysisResult = ({ segmentResult }: PropsType) => {
  return (
    <Box mt={5}>
      <Heading size="md" textAlign="center" bg="gray.100" p={3} borderRadius={5}>
        Analysis Result
      </Heading>

      <SimpleGrid columns={[1, 2]} mt={3} spacing={3} alignItems="center">
        <Image
          src={segmentResult.prediction}
          mt={3}
          alt="Segment Result"
          borderRadius="10"
          maxW="100%"
        />
        <VStack w="full" gap={2}>
          {Object.entries(segmentResult.class_distribution).map((item, idx) => (
            <InfoItem key={idx} item={item} />
          ))}
        </VStack>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]} mt={5}>
        <PieChart distribution={segmentResult.class_distribution} />
        <ColumnChart distribution={segmentResult.class_distribution} />
      </SimpleGrid>
    </Box>
  );
};

export default AnalysisResult;
