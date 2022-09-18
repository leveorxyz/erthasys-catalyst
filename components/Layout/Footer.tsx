import Image from "next/image";
import { Box, Text, VStack, HStack, Heading, Icon } from "@chakra-ui/react";
import { IoLogoYoutube, IoLogoDiscord, IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <Box as="footer" mt={5} bg="white" borderRadius={10} p="5">
      <Box className="container">
        <VStack align="stretch" alignItems="flex-start" gap={5}>
          <Box mt="5">
            <Image
              src="/images/logo.png"
              alt="Shushashon"
              width="134px"
              height="30px"
            />
            <Text mt={3} fontWeight="medium" color="dark.100">
              Banani, Dhaka, Bangladesh
            </Text>
          </Box>
          <Box>
            <Heading size="sm">Find us </Heading>
            <Text mt="5" color="dark.100">
              2nd Floor, Taneem Square, 158/E Kemal Ataturk Ave, Dhaka 1213
            </Text>
          </Box>
          <Box>
            <Heading size="sm">Contact us </Heading>
            <Text mt="5" color="dark.100">
              Phone: +8801-78354045 <br /> Email: info@cptu.gov.bd,
              cptudg@cptu.gov.bd
            </Text>
          </Box>
          <Box>
            <VStack align="flex-start" gap="20px">
              <Heading size="sm">Follow us </Heading>
              <HStack fontSize={23} gap={10} color="dark.100">
                <a href="#!">
                  <Icon as={IoLogoYoutube} />
                </a>
                <a href="#!">
                  <Icon as={IoLogoDiscord} />
                </a>{" "}
                <a href="#!">
                  <Icon as={IoLogoInstagram} />
                </a>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Footer;
