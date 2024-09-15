import LoginForm from "@/components/Form/LoginForm";
import { CONSTANTS, LINKS } from "@/data/const";
import { Box, Flex, Image, Stack, Title } from "@mantine/core";
import Link from "next/link";

const Login = () => {
  return (
    <Flex bg={"white"} direction={"row"} mih={"100vh"}>
      <Flex flex={1} justify={"center"} align={"center"} className="left" bg={CONSTANTS.COLOR.DARK_GREY}>
        <Image mah={"60%"} src={CONSTANTS.IMAGE.AUTH_SIGNUP} alt="" />
      </Flex>

      <Flex flex={1} justify={"center"} align={"center"}>
        <Flex w={"56%"} mx={"auto"} direction={"column"} className="right">
          <Stack mb={32}>
            <Title fw={500}>Log in</Title>
            <Box>
              Do not have an account?{" "}
              <Link href={LINKS.AUTH.SIGNUP} className="underline">
                Create an account
              </Link>
            </Box>
          </Stack>

          <LoginForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
