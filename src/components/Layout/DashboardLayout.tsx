import { CONSTANTS } from "@/data/const";
import { AppShell, Box, Burger, Button, Group, Image, Skeleton, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCategory2, IconRecordMail, IconShare, IconStarFilled } from "@tabler/icons-react";
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
      <AppShell.Header bg={"transparent"} bd={"none"}>
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
          </Stack>

          <Box>
            <UpgradeToPro />
            <UserMenu />
          </Box>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main py={60} m={0} bg={CONSTANTS.COLOR.LIGHT_BLUE_GREY}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
