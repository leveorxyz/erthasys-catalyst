import type { NextPage } from "next";
import { Container } from "@chakra-ui/react";
import Title from "../../components/Title/Title";
import TenderProposal from "../../components/TenderProposal/TenderProposal";

const Procurements: NextPage = () => {
  return (
    <>
      <Title title="All Programs" />
      <Container maxW="container.xl" mt={10}>
        <TenderProposal />
      </Container>
    </>
  );
};

export default Procurements;
