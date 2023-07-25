import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import AuthLayout from "@/layouts/AuthLayout";
import { Text } from "@chakra-ui/react";

const Login: NextPageWithLayout = () => {

  return (
    <>
      <Text fontSize="xl">Left Side</Text>
      {/* Login Info */}
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout title="Login">{page}</AuthLayout>;
};

export default Login;
