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

      <Box position="relative">
        <Image
          src={segmentResult.prediction}
          mt={3}
          alt="Segment Result"
          borderRadius="10"
          w="full"
          maxH="500"
        />

        <VStack
          w="full"
          gap={2}
          position="absolute"
          bottom={5}
          right={5}
          width="300"
          bg="white"
          borderRadius={10}
          p="3"
        >
          {Object.entries(segmentResult.class_distribution).map((item, idx) => (
            <InfoItem key={idx} item={item} />
          ))}
        </VStack>
      </Box>

      <SimpleGrid columns={[1, 2]} mt={5} gap={3}>
        <PieChart distribution={segmentResult.class_distribution} />
        <ColumnChart distribution={segmentResult.class_distribution} />
      </SimpleGrid>
    </Box>
  );
};

export default AnalysisResult;
