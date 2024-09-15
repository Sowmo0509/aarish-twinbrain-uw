import { ActionIcon, Box, Button, ButtonGroup, Group, Popover, rem, Stack, Text, TextInput, Title } from "@mantine/core";
import { IconArrowRight, IconBubble, IconMicrophone, IconSearch, IconSend, IconX } from "@tabler/icons-react";
import { useState } from "react";

const AskMyAiPopover = ({ setOpened }: { setOpened: (data: boolean) => void }) => {
  const [askPrompt, setAskPrompt] = useState("");

  return (
    <Box pos={"relative"} p={4} h={480}>
      <Group justify="space-between" align="top">
        <Stack gap={4}>
          <IconBubble width={40} height={40} stroke={1.5} />
          <Title order={3} fw={500}>
            Ask about your notes
          </Title>
        </Stack>
        <ActionIcon onClick={() => setOpened(false)} variant="subtle">
          <IconX />
        </ActionIcon>
      </Group>

      <Text mt={8}>Suggestions</Text>
      <Stack gap={8} mt={8}>
        <Button maw={"fit-content"} size="xs" variant="outline" fw={500} justify="start">
          Suggest improvements to my daily routine
        </Button>
        <Button maw={"fit-content"} size="xs" variant="outline" fw={500} justify="start">
          Who should I spend more time with?
        </Button>
      </Stack>

      <Box pos={"absolute"} bottom={8} left={0} right={0}>
        <TextInput
          onChange={(e) => setAskPrompt(e.target.value)}
          radius="xl"
          size="sm"
          placeholder="Search questions"
          leftSection={
            askPrompt.length < 1 ? (
              <ActionIcon radius="xl" variant="filled" color={"blue"}>
                <IconMicrophone style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
            ) : null
          }
          rightSection={
            askPrompt.length > 0 ? (
              <ActionIcon radius="xl" variant="filled">
                <IconSend style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
            ) : null
          }
        />
      </Box>
    </Box>
  );
};

export default AskMyAiPopover;
