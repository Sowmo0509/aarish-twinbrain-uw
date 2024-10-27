import { AspectRatio, Button, Modal, Select, Stack, Text, TextInput, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCirclePlusFilled, IconStack2Filled } from "@tabler/icons-react";

export default function CreateNew() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal size={"sm"} centered opened={opened} onClose={close} withCloseButton={false}>
        <Stack p={8}>
          <Stack gap={16} justify="center" align="center">
            <IconStack2Filled size={40} />
            <Title lh={1} order={3} fw={500}>
              Create New Collection
            </Title>
            <Text opacity={0.7} fz={"sm"} ta={"center"}>
              A collection gathers related memo cards to organize tasks, ideas, or projects. Right-click on a card to easily add it to a collection.
            </Text>
          </Stack>

          <Stack>
            <TextInput placeholder="Give your collection a name" size="sm" />
            <Select size="sm" placeholder="Pick value" data={["🙂", "🤓", "🧐", "🤨", "😟", "🧑🏼‍🎨", "🐔"]} />
            <Button>Create</Button>
          </Stack>
        </Stack>
      </Modal>

      <AspectRatio onClick={open} bg={"white"} ratio={1.5 / 1} p={32} className="rounded-2xl hover:opacity-70 active:opacity-40 cursor-pointer transition-all">
        <Stack h={"100%"} gap={16} justify="center" align="center">
          <IconCirclePlusFilled size={40} />
          <Text fw={500}>Create New Collection</Text>
        </Stack>
      </AspectRatio>
    </>
  );
}
