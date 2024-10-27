import { CONSTANTS } from "@/data/const";
import { Accordion, AppShell, Box, Burger, Button, Flex, Group, Image, Skeleton, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCategory2, IconRecordMail, IconShare, IconStack2Filled, IconStarFilled, IconUsersGroup } from "@tabler/icons-react";
import { ReactNode, useState } from "react";
import UpgradeToPro from "../Shared/UpgradeToPro";
import UserMenu from "../Shared/UserMenu";

interface LayoutProps {
  children: ReactNode;
}

export const SidebarItems = [
  { title: "Voice Notes", link: "voice-notes", icon: <IconRecordMail /> },
  { title: "All", link: "all", icon: <IconCategory2 /> },
  { title: "Shared", link: "shared", icon: <IconShare /> },
  { title: "Collections", link: "collections", icon: <IconStack2Filled /> },
  { title: "Starred", link: "starred", icon: <IconStarFilled /> },
];

export default function DashboardLayout({ children }: LayoutProps) {
  const [selectedItem, setSelectedItem] = useState("");
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md">
      <AppShell.Header bg={"white"} bd={"none"}>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <Image h={"50%"} src={"/images/logo.png"} alt="logo" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Stack justify="space-between" h={"100%"}>
          <Stack gap={8}>
            {SidebarItems.map((item, i) => (
              <Button
                styles={() => ({
                  label: { marginLeft: 8 },
                })}
                onClick={() => setSelectedItem(item.link)}
                c={selectedItem == item.link ? "black" : "gray.6"}
                size="md"
                fz={"sm"}
                key={i}
                fw={500}
                justify="start"
                fullWidth
                leftSection={item.icon}
                variant={selectedItem == item.link ? "light" : "transparent"}>
                {item.title}
              </Button>
            ))}
            {TeamsMenu()}
            {TagsMenu()}
          </Stack>

          <Box>
            <UpgradeToPro />
            <UserMenu />
          </Box>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main className="flex flex-1 flex-col" py={60} m={0} bg={CONSTANTS.COLOR.LIGHT_BLUE_GREY}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

function TeamsMenu() {
  return (
    <Accordion variant="separated" defaultValue="">
      <Accordion.Item value={"team-1"}>
        <Accordion.Control c={"gray.6"} icon={<IconUsersGroup />}>
          <Text fw={500} fz={"sm"}>
            Teams
          </Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack align="start">
            <Button fz={"sm"} variant="transparent" leftSection={<IconUsersGroup />}>
              Team 01
            </Button>
            <Button fz={"sm"} variant="transparent" leftSection={<IconUsersGroup />}>
              Team 01
            </Button>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

function TagsMenu() {
  return (
    <Accordion variant="separated" defaultValue="">
      <Accordion.Item value={"team-1"}>
        <Accordion.Control c={"gray.6"} icon={<IconUsersGroup />}>
          <Text fw={500} fz={"sm"}>
            See all tags
          </Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack align="start">
            <Button fz={"sm"} variant="transparent" leftSection={<IconUsersGroup />}>
              Team 01
            </Button>
            <Button fz={"sm"} variant="transparent" leftSection={<IconUsersGroup />}>
              Team 01
            </Button>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
