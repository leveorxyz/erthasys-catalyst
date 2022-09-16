import type { NextPage } from "next";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Title from "../../components/Title/Title";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import Footer from "../../components/Layout/Footer";
import HashTags from "../../components/HashTags/HashTags";
import ProgramInformation from "../../components/ProgramInformation";

const ProposalDetails: NextPage = () => {
  return (
    <>
      <Title title="Program Details" />
      <Container maxW="container.xl" mt={10}>
        <Flex gap="5" direction={["column-reverse", "row"]}>
          <Box flex="1">
            <NavigationMenu />
            <HashTags />
            <Footer />
          </Box>
          <Box flex="3" bg="white" borderRadius="10" px={[0, 5]} py={10}>
            <Box>
              <Heading size="sm" textAlign="center">
                Program Details
              </Heading>
            </Box>
            <ProgramInformation />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default ProposalDetails;
