import { AspectRatio, Button, Modal, Popover, Stack, Text, TextInput, Title, Grid, Box, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { IconCirclePlusFilled, IconStack2Filled } from "@tabler/icons-react";
import { ICONS } from "@/data/const";

export default function CreateNew({
  onAddCollection,
}: {
  onAddCollection: (name: string, icon: React.ElementType | null) => void; // Adjusted type here
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const [name, setName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<React.ElementType | null>(null);
  const [iconPickerOpen, setIconPickerOpen] = useState(false);

  const handleCreate = () => {
    if (name && selectedIcon) {
      onAddCollection(name, selectedIcon); // Pass the selectedIcon directly
      setName("");
      setSelectedIcon(null);
      close();
    }
  };

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
              A collection gathers related memo cards to organize tasks, ideas, or projects.
            </Text>
          </Stack>

          <Stack>
            <TextInput placeholder="Give your collection a name" size="sm" value={name} onChange={(e) => setName(e.currentTarget.value)} />

            {/* Icon Picker */}
            <Popover opened={iconPickerOpen} onClose={() => setIconPickerOpen(false)} width={200} position="bottom" withArrow>
              <Popover.Target>
                <Button variant="outline" onClick={() => setIconPickerOpen((o) => !o)}>
                  {selectedIcon ? (
                    <Flex align="center">
                      {/* Render selectedIcon dynamically */}
                      {React.createElement(selectedIcon, { size: 24 })}
                      <Text ml={8}>Selected Icon</Text>
                    </Flex>
                  ) : (
                    "Pick an Icon"
                  )}
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Grid gutter="xs" columns={4}>
                  {ICONS.COLLECTION_ICONS.map((Icon, index) => (
                    <Grid.Col span={1} key={index}>
                      <AspectRatio
                        ratio={1}
                        onClick={() => {
                          setSelectedIcon(Icon); // Set icon component directly
                          setIconPickerOpen(false); // Close dropdown after selection
                        }}
                        className={`cursor-pointer p-2 rounded-md ${selectedIcon === Icon ? "bg-blue-100" : "hover:bg-gray-100"}`}>
                        <Icon size={24} />
                      </AspectRatio>
                    </Grid.Col>
                  ))}
                </Grid>
              </Popover.Dropdown>
            </Popover>

            <Button onClick={handleCreate} disabled={!selectedIcon || !name}>
              Create
            </Button>
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
