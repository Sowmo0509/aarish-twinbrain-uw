import CollectionCard from "@/components/Dashboard/Collections/CollectionCard";
import CreateNew from "@/components/Dashboard/Collections/CreateNew";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { ActionIcon, Box, Button, Center, Flex, Group, Menu, rem, SimpleGrid, Text, Title } from "@mantine/core";
import { IconArrowLeft, IconDotsVertical, IconEdit, IconSettings, IconStack2Filled, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/router";

const CollectionId = () => {
  const router = useRouter();

  return (
    <DashboardLayout>
      <Flex direction={"column"} flex={1} h={"100%"} w={"75%"} my={24} mx={"auto"}>
        {/* TOP BAR */}
        <Group py={8} justify="space-between">
          <ActionIcon onClick={() => router.back()} size={"lg"} radius={9999} variant="filled" aria-label="Settings">
            <IconArrowLeft style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
          <Title order={5} fw={600}>
            My Collections
          </Title>

          {/* start */}
          <Menu position="bottom-end" width={160}>
            <Menu.Target>
              <ActionIcon size={"lg"} radius={9999} variant="filled" aria-label="Settings">
                <IconDotsVertical style={{ width: "70%", height: "70%" }} stroke={1.5} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconEdit style={{ width: rem(14), height: rem(14) }} />}>Rename</Menu.Item>
              <Menu.Item c={"red"} leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}>
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          {/* end */}
        </Group>

        {/* COLLECTIONS LISTING */}
        <Center className="flex-col gap-2 opacity-50" py={8} flex={1} h={"100%"}>
          <IconStack2Filled size={64} />
          <Text fz={"xl"} className="select-none">
            The collection is empty
          </Text>
        </Center>
      </Flex>
    </DashboardLayout>
  );
};

export default CollectionId;
