import { Box, Button, VStack, Icon, Badge, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  RiHome3Fill,
  RiFileList3Fill,
  RiCalendarFill,
  RiBookmark3Fill,
  RiSettings4Fill,
  RiUser3Fill,
} from "react-icons/ri";

const navItems = [
  { id: 1, title: "Home", icon: RiHome3Fill, link: "/" },
  {
    id: 2,
    title: "Program",
    icon: RiFileList3Fill,
    link: "/all-programs",
  },
  {
    id: 3,
    title: "Submit Program",
    icon: RiCalendarFill,
    link: "/submit-program",
  },
  { id: 4, title: "Publications", icon: RiBookmark3Fill, link: "#!" },
  { id: 5, title: "Profile", icon: RiUser3Fill, link: "#!" },
  { id: 6, title: "Settings", icon: RiSettings4Fill, link: "#!" },
];

const NavigationMenu = () => {
  const router = useRouter();

  return (
    <Box bg="white" borderRadius={10} p="5">
      <VStack align="stretch" alignItems="flex-start" gap={5}>
        {navItems.map((item) => (
          <Flex key={item.id} alignItems="center">
            <Link href={item.link} passHref>
              <Button
                key={item.id}
                variant="link"
                leftIcon={<Icon fontSize="2xl" as={item.icon} />}
                iconSpacing="5"
                isActive={item.link === router.pathname}
              >
                {item.title}
              </Button>
            </Link>
            {item?.isNew && (
              <Badge
                bg="brand.100"
                color="white"
                ml="10"
                borderRadius={10}
                px="2"
              >
                New
              </Badge>
            )}
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default NavigationMenu;
