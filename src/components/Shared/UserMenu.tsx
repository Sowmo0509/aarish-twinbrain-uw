import { forwardRef } from "react";
import { IconArrowsLeftRight, IconChevronRight, IconExternalLink, IconMessageCircle, IconPhoto, IconSearch, IconSettings, IconTrash } from "@tabler/icons-react";
import { Group, Avatar, Text, Menu, UnstyledButton, rem } from "@mantine/core";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
  <UnstyledButton
    ref={ref}
    style={{
      padding: "var(--mantine-spacing-md)",
      color: "var(--mantine-color-text)",
      borderRadius: "var(--mantine-radius-sm)",
    }}
    {...others}>
    <Group>
      <Avatar src={image} radius="xl" />

      <div style={{ flex: 1 }}>
        <Text size="sm" fw={500}>
          {name}
        </Text>
        {/* 
        <Text c="dimmed" size="xs">
          {email}
        </Text> */}
      </div>

      {icon || <IconChevronRight size="1rem" />}
    </Group>
  </UnstyledButton>
));

// Add a display name to fix the ESLint warning
UserButton.displayName = "UserButton";

export default function UserMenu() {
  return (
    <Menu>
      <Menu.Target>
        <UserButton image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" name="Harry Spoon" email="hspoonlicker@outlook.com" />
      </Menu.Target>
      {/* ... menu items */}
      <Menu.Dropdown className="!w-56">
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>Messages</Menu.Item>
        <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>Gallery</Menu.Item>
        <Menu.Item
          leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }>
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
