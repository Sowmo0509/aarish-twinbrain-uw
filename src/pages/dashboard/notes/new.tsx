import DashboardLayout from "@/components/Layout/DashboardLayout";
import { ActionIcon, Box, Button, ButtonGroup, Flex, Group, rem, Textarea, Title } from "@mantine/core";
import { IconArrowLeft, IconPlus, IconSparkles, IconWand } from "@tabler/icons-react";
import { useRouter } from "next/router";

const Notes = () => {
  const router = useRouter();

  const handleGoBack = () => {
    // checkIfAnyUnsavedText();
    router.back();
  };

  return (
    <DashboardLayout>
      <Flex mih={"80vh"} w={"70%"} mx={"auto"} direction={"column"} align={"center"} py={24}>
        <Group pos={"relative"} justify="center" mb={16} w={"100%"}>
          <ActionIcon onClick={handleGoBack} size={"lg"} pos={"absolute"} left={0} variant="outline">
            <IconArrowLeft />
          </ActionIcon>
          <Title order={2} fw={500}>
            Notes
          </Title>
        </Group>

        <Flex w={"100%"} direction={"column"} my={16} flex={1} p={rem(32)} bg={"white"} className="rounded-xl">
          <Textarea minRows={20} size="md" flex={1} autosize styles={() => ({ input: { border: "none" } })} placeholder="Untitled" />
          <Box pt={24} className="rounded-b-xl border-none" ta={"right"} bg={"white"}>
            <Button>Save</Button>
          </Box>
        </Flex>

        <Group w={"100%"} mt={rem(24)} align="center" justify="space-between">
          <ActionIcon variant="light" size="lg">
            <IconPlus />
          </ActionIcon>

          <Group gap={rem(8)}>
            <Button leftSection={<IconSparkles />}>Revise this note</Button>
            <Button leftSection={<IconSparkles />}>Extend more ideas</Button>
          </Group>
        </Group>
      </Flex>
    </DashboardLayout>
  );
};

export default Notes;
