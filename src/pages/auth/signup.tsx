import SignupForm from "@/components/Form/SignupForm";
import CONSTANTS from "@/data/const";
import { Flex, Image, Title } from "@mantine/core";

const Signup = () => {
  return (
    <Flex bg={"white"} direction={"row"} mih={"100vh"}>
      <Flex flex={1} justify={"center"} align={"center"} className="left" bg={CONSTANTS.COLOR.DARK_GREY}>
        <Image mah={"60%"} src={CONSTANTS.IMAGE.AUTH_SIGNUP} alt="" />
      </Flex>

      <Flex flex={1} justify={"center"} align={"center"}>
        <Flex w={"56%"} mx={"auto"} direction={"column"} className="right">
          <Title fw={500} mb={32}>
            Create an account
          </Title>

          <SignupForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
