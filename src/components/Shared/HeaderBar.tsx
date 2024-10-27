import { ActionIcon, Group, Menu, rem, Title } from "@mantine/core";
import { IconArrowLeft, IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function HeaderBar({ heading }: { heading?: string }) {
  const router = useRouter();

  return (
    <Group py={8} justify="space-between">
      <ActionIcon onClick={() => router.back()} size={"lg"} radius={9999} variant="filled" aria-label="Settings">
        <IconArrowLeft
          style={{
            width: "70%",
            height: "70%",
          }}
          stroke={1.5}
        />
      </ActionIcon>

      {heading && heading.length > 0 && (
        <Title order={5} fw={600}>
          {heading}
        </Title>
      )}

      <Menu position="bottom-end" width={160}>
        <Menu.Target>
          <ActionIcon size={"lg"} radius={9999} variant="filled" aria-label="Settings">
            <IconDotsVertical
              style={{
                width: "70%",
                height: "70%",
              }}
              stroke={1.5}
            />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <IconEdit
                style={{
                  width: rem(14),
                  height: rem(14),
                }}
              />
            }>
            Rename
          </Menu.Item>
          <Menu.Item
            c={"red"}
            leftSection={
              <IconTrash
                style={{
                  width: rem(14),
                  height: rem(14),
                }}
              />
            }>
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
