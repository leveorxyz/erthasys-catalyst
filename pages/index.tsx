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
];
