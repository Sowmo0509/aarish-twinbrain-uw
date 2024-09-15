import { Menu, Button, Text, rem } from "@mantine/core";
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight, IconPlus, IconNote, IconNotes, IconImageInPicture, IconPhotoScan, IconLink, IconFiles, IconBrandYoutube, IconDots } from "@tabler/icons-react";
const AddNew = () => {
  return (
    <Menu offset={{ mainAxis: 16 }} shadow="md" width={200}>
      <Menu.Target>
        <Button radius={"lg"} variant="light" size="sm" fz={"md"} fw={500} rightSection={<IconPlus width={20} height={20} />}>
          Add New
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>Application</Menu.Label> */}
        <Menu.Item leftSection={<IconNotes style={{ width: rem(14), height: rem(14) }} />}>Notes</Menu.Item>
        <Menu.Item leftSection={<IconPhotoScan style={{ width: rem(14), height: rem(14) }} />}>Image (GPT-4o)</Menu.Item>
        <Menu.Item leftSection={<IconLink style={{ width: rem(14), height: rem(14) }} />}>Links</Menu.Item>
        <Menu.Item leftSection={<IconFiles style={{ width: rem(14), height: rem(14) }} />}>Files</Menu.Item>
        <Menu.Item leftSection={<IconBrandYoutube style={{ width: rem(14), height: rem(14) }} />}>YouTube Videos</Menu.Item>
        <Menu.Item leftSection={<IconDots style={{ width: rem(14), height: rem(14) }} />}>Other Sources</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AddNew;
