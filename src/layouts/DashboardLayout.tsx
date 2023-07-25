import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/Components/General/Sidebar";

export default function DashboardLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <main>
        <Flex>
          {/* Sidebar component */}
          <Sidebar />
          <Flex justifyContent="center" flexDir="column" ml="auto" w="80%">
            <Box
              as="section"
              w="full"
              mt="10"
              minWidth="1000px"
              overflow="auto"
              maxWidth="1400px"
            >
              {children}
            </Box>
          </Flex>
        </Flex>
      </main>
    </>
  );
}
