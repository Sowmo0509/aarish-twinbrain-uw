import { CONSTANTS } from "@/data/const";
import { Accordion, AppShell, Box, Burger, Button, Group, Image, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconUsersGroup } from "@tabler/icons-react";
import { ReactNode, useState, useEffect } from "react";
import UpgradeToPro from "../Shared/UpgradeToPro";
import UserMenu from "../Shared/UserMenu";
import { SidebarItems } from "@/data/nav";
import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  const router = useRouter();

  // LEFT NAVBAR
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  // RIGHT ASIDE
  const [mobileAsideOpened, { toggle: toggleMobileAside }] = useDisclosure();
  const [desktopAsideOpened, { toggle: toggleDesktopAside }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      aside={{ width: 260, breakpoint: "sm", collapsed: { mobile: !mobileAsideOpened, desktop: !desktopAsideOpened } }}
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
              <Link key={i} href={item.link} passHref>
                <Button
                  styles={() => ({
                    label: { marginLeft: 8 },
                  })}
                  color={"/" + router.pathname.split("/")[1] === item.link ? "black" : "gray.6"}
                  size="md"
                  fz={"sm"}
                  fw={500}
                  justify="start"
                  fullWidth
                  leftSection={<item.icon />}
                  variant={"/" + router.pathname.split("/")[1] === item.link ? "light" : "transparent"} // Update variant based on selectedItem
                >
                  {item.title}
                </Button>
              </Link>
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
      <AppShell.Aside p="md">Team Member \\ Not Practical for Mobile \\ Updates Here</AppShell.Aside>
    </AppShell>
  );
}

function TeamsMenu() {
  return (
    <Accordion variant="separated" defaultValue="">
      <Accordion.Item value={"team-1"}>
        <Accordion.Control color={"gray.6"} icon={<IconUsersGroup />}>
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
              Team 02
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
      <Accordion.Item value={"tags-1"}>
        <Accordion.Control color={"gray.6"} icon={<IconUsersGroup />}>
          <Text fw={500} fz={"sm"}>
            See all tags
          </Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack align="start">
            <Button fz={"sm"} variant="transparent" leftSection={<IconUsersGroup />}>
              Tag 01
            </Button>
            <Button fz={"sm"} variant="transparent" leftSection={<IconUsersGroup />}>
              Tag 02
            </Button>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
