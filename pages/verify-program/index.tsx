import type { NextPage } from 'next';
import { Box, Container, Flex } from '@chakra-ui/react';
import HashTags from '../../components/HashTags/HashTags';
import Footer from '../../components/Layout/Footer';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import Title from '../../components/Title/Title';
import VerifyProgram from '../../components/VerifyProgram/VerifyProgram';

const VerifyProgramPage: NextPage = () => {
  return (
    <>
      <Title title="Verify Program" />
      <Container maxW="container.xl" mt={10}>
        <Flex gap="5" flexWrap={['wrap-reverse']}>
          <Box flex="1">
            <NavigationMenu />
            <HashTags />
            <Footer />
          </Box>
          <Box flex="3">
            <VerifyProgram />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default VerifyProgramPage;
