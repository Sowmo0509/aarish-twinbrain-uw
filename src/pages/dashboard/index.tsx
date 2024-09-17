import DashboardLayout from "@/components/Layout/DashboardLayout";
import { styled } from "styled-components";
import { Autocomplete as MantineAutocomplete, Flex, rem, Chip, Group, Stack, Box, SimpleGrid } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { CHIPS } from "@/data/const";
import AskMyAi from "@/components/Dashboard/AskMyAi/AskMyAi";
import RecordANote from "@/components/Dashboard/RecordANote/RecordANote";
import { useRecoilState } from "recoil";
import { recordANoteState } from "@/libs/atoms";
import AddNew from "@/components/Dashboard/AddNew";
import ChatResponseText from "@/components/Dashboard/Chat/ChatResponseText";
import ChatResponseCard from "@/components/Dashboard/Chat/ChatResponseCard";

const Autocomplete = styled(MantineAutocomplete)`
  input {
    border: none;
    &:focus-within {
      outline: 3px solid var(--mantine-primary-color-filled);
    }
  }
`;

const Dashboard = () => {
  const [isRecording] = useRecoilState(recordANoteState);

  return (
    <DashboardLayout>
      <Flex pos={"relative"} direction={"column"} justify={"center"} align={"center"}>
        {/* Search and Chips */}
        <Stack className="search-contents" align="start" w={"75%"}>
          <Autocomplete w={"100%"} size="lg" data={["React", "Angular", "Vue"]} leftSectionPointerEvents="none" leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} />} placeholder="Search" />
          <Chip.Group multiple>
            <Group justify="center" gap={8}>
              {CHIPS.SEARCH_CHIPS.map((chip, i) => (
                <Chip className="capitalize" key={i} size="md" variant="outline" value={chip.key}>
                  {chip.title}
                </Chip>
              ))}
            </Group>
          </Chip.Group>
        </Stack>

        {/* Chat Response */}
        <Flex w={"75%"} direction={"column"} gap={32} my={32}>
          <ChatResponseText />
          <SimpleGrid cols={3}>
            <ChatResponseCard />
            <ChatResponseCard />
            <ChatResponseCard />
          </SimpleGrid>
          <ChatResponseText />
          <ChatResponseText />
          <SimpleGrid cols={3}>
            <ChatResponseCard />
            <ChatResponseCard />
            <ChatResponseCard />
          </SimpleGrid>
          <ChatResponseText />
        </Flex>

        {/* Bottom Action Buttons */}
        <Box pos={"sticky"} bottom={32}>
          <Box>
            <Group gap={8} bg={"white"} px={14} py={8} className="rounded-2xl shadow-lg">
              <RecordANote />
              {!isRecording && <AskMyAi />}
              {!isRecording && <AddNew />}
            </Group>
          </Box>
        </Box>
      </Flex>
    </DashboardLayout>
  );
};

export default Dashboard;
