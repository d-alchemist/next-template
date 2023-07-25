import { ReactNode } from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

export default function AuthLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <main>
        <SimpleGrid columns={2} overflowX="hidden" minH="100vh">
          <Box position="relative">
            <Box>{children}</Box>
          </Box>
          <Box bg="blue.100">
            <Text fontSize="xl">Right Side</Text>
          </Box>
        </SimpleGrid>
      </main>
    </>
  );
}
