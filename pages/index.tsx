import type { NextPage } from "next";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Title from "../components/Title/Title";
import TreeMapBarCharts from "../components/Charts/TreeMapBarCharts";
import Profile from "../components/Profile/Profile";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import Footer from "../components/Layout/Footer";
import HashTags from "../components/HashTags/HashTags";
import Post from "../components/Post/Post";

const Dashboard: NextPage = () => {
  return (
    <>
      <Title title="Home" />
      <Container maxW="container.xl" mt={10}>
        <Flex gap="5" flexWrap={["wrap-reverse"]}>
          <Box flex="1">
            <NavigationMenu />
            <HashTags />
            <Footer />
          </Box>
          <Box flex="3">
            <TreeMapBarCharts />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Dashboard;
