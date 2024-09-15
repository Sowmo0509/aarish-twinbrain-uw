import SignupForm from "@/components/Form/SignupForm";
import { CONSTANTS, LINKS } from "@/data/const";
import { Box, Flex, Image, Stack, Title } from "@mantine/core";
import Link from "next/link";

const Signup = () => {
  return (
    <Flex bg={"white"} direction={"row"} mih={"100vh"}>
      <Flex flex={1} justify={"center"} align={"center"} className="left" bg={CONSTANTS.COLOR.DARK_GREY}>
        <Image mah={"60%"} src={CONSTANTS.IMAGE.AUTH_SIGNUP} alt="" />
      </Flex>

      <Flex flex={1} justify={"center"} align={"center"}>
        <Flex w={"56%"} mx={"auto"} direction={"column"} className="right">
          <Stack mb={32}>
            <Title fw={500}>Create an account</Title>
            <Box>
              Already have an account?{" "}
              <Link href={LINKS.AUTH.LOGIN} className="underline">
                Log in
              </Link>
            </Box>
          </Stack>

          <SignupForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
