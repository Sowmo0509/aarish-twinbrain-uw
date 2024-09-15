import { useState } from "react";
import { Popover, Button, Group, Text, CloseButton } from "@mantine/core";
import { IconBubble } from "@tabler/icons-react";
import AskMyAiPopover from "./AskMyAiPopover"; // Import your component

const AskMyAi = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Popover opened={opened} onClose={() => setOpened(false)} offset={{ mainAxis: 16, crossAxis: 0 }} closeOnClickOutside={false} width={200} position="bottom" shadow="md">
      <Popover.Target>
        <Button radius={"lg"} variant="light" size="sm" fz={"md"} fw={500} rightSection={<IconBubble width={20} height={20} />} onClick={() => setOpened((o) => !o)}>
          Ask my AI
        </Button>
      </Popover.Target>
      <Popover.Dropdown w={420}>
        <AskMyAiPopover setOpened={setOpened} />
      </Popover.Dropdown>
    </Popover>
  );
};

export default AskMyAi;
