import { ReactElement } from "react";
import { Box, Text } from "@chakra-ui/react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { NextPageWithLayout } from "@/pages/_app";

const Home: NextPageWithLayout = () => {
  return (
    <Box m="14">
      <Text>Home</Text>
      {/* Dashboard components */}
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout title="Dashboard">{page}</DashboardLayout>;
};

export default Home;
