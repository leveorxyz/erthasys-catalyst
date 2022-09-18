import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Title from "../../components/Title/Title";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import Footer from "../../components/Layout/Footer";
import HashTags from "../../components/HashTags/HashTags";
import ProgramInformation from "../../components/ProgramInformation";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { ProgramData } from "../../@types";

const ProposalDetails: NextPage = () => {
  const [program, setProgram] = useState<ProgramData>();
  const router = useRouter();
  const { id } = router.query;

  const getDocument = async (docId: string) => {
    try {
      const docRef = doc(db, "programs", docId);
      const docSnap = await getDoc(docRef);
      setProgram(docSnap.data() as ProgramData);
    } catch (error) {
      return undefined;
    }
  };

  useEffect(() => {
    if (id) {
      getDocument(id as string);
    }
  }, [id]);

  console.log(program);
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
            <ProgramInformation program={program} />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default ProposalDetails;
