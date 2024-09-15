import { Flex, rem, Box, Title, Text } from "@mantine/core";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { CONSTANTS } from "@/data/const";

const ChatResponseText = () => {
  return (
    <Flex gap={rem(24)}>
      <Box>
        <Box className="p-1 border-dashed border-black border-2 rounded-full">
          <IconPlayerPlayFilled className="w-5 h-5" />
        </Box>
      </Box>
      <Flex direction={"column"}>
        <Title c={CONSTANTS.COLOR.TEXT_DARK_GREY} lh={1} mb={8} order={3}>
          Record, Summarize, Transcript: AI Mind
        </Title>
        <Text c={CONSTANTS.COLOR.TEXT_DARK_GREY_2} fz={"lg"}>
          Like whatever I&apos;m talking right now to you, it is worth the record, summarized, transcript, become an AI mind, everything you want. it is worth the record, summarized, transcript, become an AI mind, everything you want.
        </Text>
      </Flex>
    </Flex>
  );
};

export default ChatResponseText;
