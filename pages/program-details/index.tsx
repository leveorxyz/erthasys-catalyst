import type { NextPage } from "next";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Title from "../../components/Title/Title";
import Profile from "../../components/Profile/Profile";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import Footer from "../../components/Layout/Footer";
import HashTags from "../../components/HashTags/HashTags";
import ProgramInformation from "../../components/ProgramInformation";

const data = [
  {
    label: "Proposal Id",
    content: "689703",
  },
  {
    label: "Type",
    content: "NCT, OTM",
  },
  {
    label: "Procurement Nature",
    content: "Works",
  },
  {
    label: "Event Type ",
    content: "TENDER",
  },
  {
    label: "App ID",
    content: "177066",
  },
  {
    label: "Invitation for",
    content: "Tender - Single Lot",
    borderRight: false,
  },
];

const ProposalDetails: NextPage = () => {
  return (
    <>
      <Title title="Announcement" />
      <Container maxW="container.xl" mt={10}>
        <Flex gap="5" direction={["column-reverse", "row"]}>
          <Box flex="1">
            <NavigationMenu />
            <HashTags />
            <Footer />
          </Box>
          <Box flex="3" bg="white" borderRadius="10" px={[0, 5]} py={10} mt={5}>
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
