import { Flex, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type PropsType = {
  color?: string;
  bgColor?: string;
  label: string;
  value: string;
  icon: IconType;
};

const InfoItem = ({ label, value, icon, color, bgColor }: PropsType) => {
  return (
    <Flex justifyContent="space-between" w="full" bg={bgColor} p="1" borderRadius={5}>
      <Text display="flex" fontSize="sm" fontWeight="bold" alignItems="center" mr="2" color={color}>
        <Icon as={icon} fontSize="sm" mr="1" />
        {label}
      </Text>
      <Text fontSize="sm" fontWeight="bold" color={color}>
        {value}
      </Text>
    </Flex>
  );
};

InfoItem.defaultProps = {
  color: 'black',
  bgColor: 'gray.100',
};

export default InfoItem;
