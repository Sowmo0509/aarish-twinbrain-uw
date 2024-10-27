import { Group, Title, AspectRatio, Stack, Text, Center } from "@mantine/core";
import { IconStack2Filled } from "@tabler/icons-react";
import { NextRouter } from "next/router";

export default function CollectionCard({ router }: { router: NextRouter }) {
  return (
    <AspectRatio bg={"white"} ratio={1.5 / 1} p={32} onClick={() => router.push("/collections/1")} className="rounded-2xl hover:opacity-70 active:opacity-40 cursor-pointer transition-all">
      <Stack gap={16}>
        <Group justify="space-between" w={"100%"}>
          <Stack gap={8}>
            <Title lh={1} fw={600} order={5}>
              My Collections
            </Title>
            <Text lh={1}>0 Collection</Text>
          </Stack>
          <Text>icon</Text>
        </Group>
        <Center h={"100%"} bg={"gray.1"} className="rounded-lg flex-col gap-2">
          <IconStack2Filled size={32} />
          <Text fz={"sm"} lh={1}>
            The collection is empty
          </Text>
        </Center>
      </Stack>
    </AspectRatio>
  );
}
