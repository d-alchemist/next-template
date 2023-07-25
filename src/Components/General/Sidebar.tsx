import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { HiOutlineHome } from "react-icons/hi";
import { RiArrowLeftRightLine } from "react-icons/ri";

export const sidebarLinks = [
  {
    id: 1,
    title: "Home",
    destination: "/dashboard/home",
    icon: <HiOutlineHome />,
    alias: "/dashboard/home",
  },
  {
    id: 2,
    title: "CRM Tools",
    destination: "/dashboard/crm-tools",
    icon: <RiArrowLeftRightLine />,
    alias: "/dashboard/crm-tools",
  },
];

const SidebarLink = ({
  title,
  destination,
  icon,
  alias,
}: {
  title: string;
  destination: string;
  icon: ReactNode;
  alias: string;
}) => {
  const { pathname } = useRouter();

  return (
    <Box role="group" transition="all">
      <ListItem
        borderRadius="lg"
        bg={pathname.includes(alias) ? "blue.100" : ""}
        fontWeight={pathname.includes(alias) ? 500 : ""}
        _groupHover={{ bg: "blue.100", fontWeight: 500 }}
      >
        <Link
          as={NextLink}
          p="3"
          href={destination}
          textDecoration="none"
          display="flex"
          alignItems="center"
          _hover={{ textDecoration: "none" }}
        >
          <Box
            as="span"
            mr="3"
            bg={pathname.includes(alias) ? "primary.100" : "blue.100"}
            _groupHover={{ backgroundColor: "primary.100", color: "#fff" }}
            color={pathname.includes(alias) ? "white" : "primary.100"}
            p="1.5"
            borderRadius="md"
          >
            {icon}
          </Box>
          {title}
        </Link>
      </ListItem>
    </Box>
  );
};

export default function Sidebar() {
  return (
    <Box w="20%" minW="20%" position="fixed" top="0">
      <Box
        boxShadow="none"
        bg="#FAFAFC"
        maxW="300px"
        minW="250px"
        height="100vh"
        p="9"
      >
        <Box mb="10">
          <Image src="/next.svg" width={75} height={75} alt="logo" priority />
        </Box>
        <Box>
          <UnorderedList spacing="3" listStyleType="none" ml="0">
            {sidebarLinks.map((link) => 
                <SidebarLink
                  key={link.id}
                  destination={link.destination}
                  title={link.title}
                  icon={link.icon}
                  alias={link.alias}
                />
            )}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}
