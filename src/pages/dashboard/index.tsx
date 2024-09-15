import DashboardLayout from "@/components/Layout/DashboardLayout";
import { styled } from "styled-components";
import { Autocomplete as MantineAutocomplete, Flex, rem, Chip, Group, Stack, Button, Box } from "@mantine/core";
import { IconGradienter, IconPlus, IconSearch } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { CHIPS } from "@/data/const";
import AskMyAi from "@/components/AskMyAi/AskMyAi";
const DynamicRecordView = dynamic(() => import("@/components/Shared/DynamicRecordView"), { ssr: false });

const Autocomplete = styled(MantineAutocomplete)`
  input {
    border: none;
    &:focus-within {
      outline: 3px solid var(--mantine-primary-color-filled);
    }
  }
`;

const Dashboard = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <DashboardLayout>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <Stack className="search-contents" align="start" w={"50%"}>
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

        <Box pos={"absolute"} bottom={80}>
          <Box hidden={isRecording}>
            <Group gap={8} bg={"white"} px={14} py={8} className="rounded-2xl shadow-lg">
              <Button onClick={() => setIsRecording(true)} radius={"lg"} variant="filled" size="sm" fz={"md"} fw={500} rightSection={<IconGradienter width={20} height={20} color="red" />}>
                Record a note
              </Button>

              <AskMyAi />

              <Button radius={"lg"} variant="light" size="sm" fz={"md"} fw={500} rightSection={<IconPlus width={20} height={20} />}>
                Add New
              </Button>
            </Group>
          </Box>
          {isRecording && <DynamicRecordView setIsRecording={setIsRecording} />}
        </Box>
      </Flex>
    </DashboardLayout>
  );
};

export default Dashboard;
