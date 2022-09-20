import type { NextPage } from "next";
import {
  Box,
  Container,
  Flex,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Title from "../components/Title/Title";
import TreeMapBarCharts from "../components/Charts/TreeMapBarCharts";
import Profile from "../components/Profile/Profile";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import Footer from "../components/Layout/Footer";
import HashTags from "../components/HashTags/HashTags";
import Post from "../components/Post/Post";
import ProposalCard from "../components/TenderProposal/ProposalCard";
import { ProgramData } from "../@types";

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
            <SimpleGrid columns={[1, 3]} gap={6} mt={6}>
              {programs?.map((program, index) => (
                <ProposalCard key={index} program={program} />
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Dashboard;

const programs: ProgramData[] = [
  {
    file: "https://firebasestorage.googleapis.com/v0/b/erthasys.appspot.com/o/files%2Ferthasys-2.pdf?alt=media&token=a89edb90-faa4-47d7-9ff0-142c963c3729",
    initialAmount: "1000",
    instanceGoals:
      "AJ garments factory not recycling any product & burning more products for the exclusive clients. The proposal is to reduce burning by 15% and increase recycled fabric by 20% by the end of 2023.",
    pollutant: "Carbon",
    targetAmount: "3423",
    created: {
      nanoseconds: 616000000,
      seconds: 1663593270,
    },
  },
  {
    file: "https://firebasestorage.googleapis.com/v0/b/erthasys.appspot.com/o/files%2Ferthasys-2.pdf?alt=media&token=a89edb90-faa4-47d7-9ff0-142c963c3729",
    initialAmount: "600",
    instanceGoals:
      "Commercial passenger flights departing produced 179 million metric tons of carbon dioxide emissions, International Council on Clean Transportation (ICCT), global CO2 from commercial aviation was 707 million tons in 2013. ",
    pollutant: "Carbon",
    targetAmount: "3423",
    created: {
      nanoseconds: 215000000,
      seconds: 166351010,
    },
  },
  {
    file: "https://firebasestorage.googleapis.com/v0/b/erthasys.appspot.com/o/files%2Ferthasys-2.pdf?alt=media&token=a89edb90-faa4-47d7-9ff0-142c963c3729",
    initialAmount: "500",
    instanceGoals:
      "Every year Shipping industry emmits a large amount of carbon, those container ships plying the world's waterways spew about 1 billion metric tons of carbon dioxide into the air, which is about three 3% of all greenhouse gas emissions.",
    pollutant: "Carbon",
    targetAmount: "3423",
    created: {
      nanoseconds: 216000000,
      seconds: 1663593270,
    },
  },
  {
    file: "https://firebasestorage.googleapis.com/v0/b/erthasys.appspot.com/o/files%2Ferthasys-2.pdf?alt=media&token=a89edb90-faa4-47d7-9ff0-142c963c3729",
    initialAmount: "1100",
    instanceGoals:
      "City Energy set climate goals striving toward at least a 50% reduction in CO2 emissions from electricity generation in 2030 on the way to net-zero CO2 by 2050. We're also targeting net-zero methane emissions for our natural gas distribution business by 2030.",
    pollutant: "Carbon",
    targetAmount: "3423",
    created: {
      nanoseconds: 416000000,
      seconds: 1663593000,
    },
  },
  {
    file: "https://firebasestorage.googleapis.com/v0/b/erthasys.appspot.com/o/files%2Ferthasys-2.pdf?alt=media&token=a89edb90-faa4-47d7-9ff0-142c963c3729",
    initialAmount: "1200",
    instanceGoals:
      "Lululemon has made commitments to cut the intensity of its carbon emissions, but only three companies assessed – REI, Asics and Mammut – committed to curbing absolute emissions across their supply chains by 55% or more by 2030.",
    pollutant: "Carbon",
    targetAmount: "3423",
    created: {
      nanoseconds: 516000000,
      seconds: 1663000270,
    },
  },
  {
    file: "https://firebasestorage.googleapis.com/v0/b/erthasys.appspot.com/o/files%2Ferthasys-2.pdf?alt=media&token=a89edb90-faa4-47d7-9ff0-142c963c3729",
    initialAmount: "1600",
    instanceGoals:
      "The Jacob's, in particular, accounts for 2% to 8% of global carbon emissions, according to the United Nations",
    pollutant: "Carbon",
    targetAmount: "3423",
    created: {
      nanoseconds: 116000000,
      seconds: 1663111270,
    },
  },
];
