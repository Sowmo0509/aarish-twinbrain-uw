import CONSTANTS from "@/data/const";
import { Flex, Image, Title } from "@mantine/core";

const Login = () => {
  return (
    <Flex bg={"red"} direction={"row"} mih={"100vh"}>
      <Flex flex={1} justify={"center"} align={"center"} className="left" bg={CONSTANTS.COLOR.DARK_GREY}>
        <Image mah={"60%"} src={CONSTANTS.IMAGE.AUTH_LOGIN} alt="" />
      </Flex>

      <Flex flex={1} c={"white"} className="right">
        <Title>Log in</Title>
      </Flex>
    </Flex>
  );
};

export default Login;
