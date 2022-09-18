import { Flex, Icon, Text } from '@chakra-ui/react';
import { FaTree, FaWater, FaCircle, FaRoad } from 'react-icons/fa';
import { GiIsland } from 'react-icons/gi';

type Category = 'Building' | 'Land' | 'Road' | 'Unlabeled' | 'Vegetation' | 'Water';

type PropsType = {
  item: [string, string];
};

const InfoItem = ({ item }: PropsType) => {
  const getIcons = (name: Category) => {
    switch (name) {
      case 'Building':
        return FaTree;
      case 'Land':
        return GiIsland;
      case 'Water':
        return FaWater;
      case 'Unlabeled':
        return FaCircle;
      case 'Road':
        return FaRoad;
      case 'Vegetation':
        return FaTree;
      default:
        return FaCircle;
    }
  };

  return (
    <Flex justifyContent="space-between" w="full" bg="gray.100" p="3" borderRadius={5}>
      <Text display="flex">
        <Icon as={getIcons(item[0] as Category)} mr="1" fontSize="lg" />
        <b>{item[0]}</b>
      </Text>
      <b>{item[1]}</b>
    </Flex>
  );
};

export default InfoItem;
