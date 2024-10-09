import { Flex, Box, Title, Text, Modal, rem, Button, Group } from "@mantine/core";
import { IconDots, IconDownload, IconEdit, IconFilePlus, IconPlayerPlayFilled, IconPlus, IconShare, IconTag } from "@tabler/icons-react";
import { CONSTANTS } from "@/data/const";

const ResponseModal = ({ opened, close }: { opened: boolean; close: () => void }) => {
  return (
    <Modal size={"lg"} opened={opened} onClose={close} withCloseButton={false} centered>
      <Flex p={rem(8)} gap={rem(16)}>
        <Box>
          <Box className="p-1 w-8 h-8 border-dashed border-black border-2 rounded-full">
            <IconPlayerPlayFilled className="w-5 h-5" />
          </Box>
        </Box>

        <Flex direction={"column"}>
          <Title c={CONSTANTS.COLOR.TEXT_DARK_GREY} fz={"lg"} lh={1} mb={8} order={3}>
            Record, Summarize, Transcript: AI Mind
          </Title>
          <Text mt={rem(8)} c={CONSTANTS.COLOR.LIGHT_GREY} fz={"sm"}>
            So when we do like complete marketing right so one is social media which is very effective because in this kind of business when you post reels and they go viral a lot of people inquire and comment so to get the comments into a lead we need to use many chat as an automation so whoever comments can get an automated message that&apos;s for the social media part apart from that advertising just to manage the advertising for all the properties. I&apos;m quoting you $500 in which we can split the budgets and set up different advertisements for different properties. Daily budget I&apos;m recommending we kickstart with $50 clubbing it between properties and after that we can see how the traction is and then increase or decrease. On landing page cost i&apos;ll just explain you so that we can create landing pages in bulk also each property.
          </Text>
          <Group mt={rem(16)} gap={rem(6)}>
            <Button fw={500} classNames={{ section: "mr-2" }} variant="light" size="xs" leftSection={<IconPlus size={16} />}>
              Add
            </Button>
            <Button fw={500} classNames={{ section: "mr-2" }} variant="light" size="xs" leftSection={<IconEdit size={16} />}>
              Edit
            </Button>
            <Button fw={500} classNames={{ section: "mr-2" }} variant="light" size="xs" leftSection={<IconTag size={16} />}>
              Tag
            </Button>
            <Button fw={500} classNames={{ section: "mr-2" }} variant="light" size="xs" leftSection={<IconFilePlus size={16} />}>
              Create
            </Button>
            <Button fw={500} classNames={{ section: "mr-2" }} variant="light" size="xs" leftSection={<IconShare size={16} />}>
              Share
            </Button>
            <Button fw={500} classNames={{ section: "mr-2" }} variant="light" size="xs" leftSection={<IconDots size={16} />}>
              More
            </Button>
          </Group>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ResponseModal;
