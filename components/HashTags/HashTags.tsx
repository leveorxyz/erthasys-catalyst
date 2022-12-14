import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import Tag from './Tag';

const tags = [
  { id: 1, name: 'carbon' },
  { id: 2, name: 'emission' },
  { id: 3, name: 'blockchain' },
  { id: 4, name: 'traceability' },
  { id: 5, name: 'footprint' },
  { id: 6, name: 'carbon credit' },
  { id: 7, name: 'crypto' },
];

const HashTags = () => {
  return (
    <Box bg="white" mt={5} p={5}>
      <Heading size="md" pb="2">
        Tags
      </Heading>
      <Divider />
      <Flex gap={2} wrap="wrap" mt="3">
        {tags.map((tag) => (
          <Tag key={tag.id} name={tag.name} />
        ))}
      </Flex>
    </Box>
  );
};

export default HashTags;
