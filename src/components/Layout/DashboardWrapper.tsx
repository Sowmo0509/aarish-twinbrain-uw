import { styled } from "styled-components";
import { Autocomplete as MantineAutocomplete, Flex, rem, Group, Stack, Box } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import AskMyAi from "@/components/Dashboard/AskMyAi/AskMyAi";
import RecordANote from "@/components/Dashboard/RecordANote/RecordANote";
import { useRecoilState } from "recoil";
import { recordANoteState } from "@/libs/atoms";
import AddNew from "@/components/Dashboard/AddNew";
import TypeChips from "@/components/Shared/TypeChips";

const Autocomplete = styled(MantineAutocomplete)`
  input {
    border: none;
    &:focus-within {
      outline: 3px solid var(--mantine-primary-color-filled);
    }
  }
`;

export default function DashboardWrapper({ children }: { children: any }) {
  const [isRecording] = useRecoilState(recordANoteState);

  return (
    <Flex py={16} pos={"relative"} direction={"column"} justify={"center"} align={"center"}>
      <Flex w={"60%"} direction={"column"} gap={32} my={8}>
        {/* Search and Chips */}
        <Stack className="search-contents" align="start">
          <Autocomplete
            w={"100%"}
            size="lg"
            data={["React", "Angular", "Vue"]}
            leftSectionPointerEvents="none"
            leftSection={
              <IconSearch
                style={{
                  width: rem(16),
                  height: rem(16),
                }}
              />
            }
            placeholder="Search"
          />
          <TypeChips origin="/dashboard" />
        </Stack>

        {children}

        {/* Bottom Action Buttons */}
        <Box pos={"sticky"} bottom={32}>
          <Box>
            <Group gap={8} bg={"white"} px={14} py={8} className="rounded-2xl w-fit mx-auto shadow-lg">
              <RecordANote />
              {!isRecording && <AskMyAi />}
              {!isRecording && <AddNew />}
            </Group>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
