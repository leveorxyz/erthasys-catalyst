import {
  Box,
  VStack,
  Icon,
  Heading,
  Button,
  Container,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import {
  RiArrowLeftSFill,
  RiSearchFill,
  RiArrowDownSFill,
  RiCalendar2Fill,
} from "react-icons/ri";
import TreeMapBarCharts from "../../components/Charts/TreeMapBarCharts";
import FormInput from "../../components/FormInputs/FormInput";
import HashTags from "../../components/HashTags/HashTags";
import Footer from "../../components/Layout/Footer";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import Post from "../../components/Post/Post";
import Profile from "../../components/Profile/Profile";
import SubmitProgramForm from "../../components/SubmitProgramForm";
import Title from "../../components/Title/Title";

const SubmitProgram = () => {
  return (
    <>
      <Title title="Submit Program" />
      <Container maxW="container.xl" mt={10}>
        <Flex gap="5" flexWrap={["wrap-reverse"]}>
          <Box flex="1">
            <Profile />
            <NavigationMenu />
            <HashTags />
            <Footer />
          </Box>
          <Box flex="3">
            <SubmitProgramForm />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default SubmitProgram;
