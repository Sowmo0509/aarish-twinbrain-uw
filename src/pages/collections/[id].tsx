import DashboardLayout from "@/components/Layout/DashboardLayout";
import HeaderBar from "@/components/Shared/HeaderBar";
import { Center, Flex, Text } from "@mantine/core";
import { IconStack2Filled } from "@tabler/icons-react";
import { useRouter } from "next/router";

const CollectionId = () => {
  return (
    <DashboardLayout>
      <Flex direction={"column"} flex={1} h={"100%"} w={"75%"} my={24} mx={"auto"}>
        <HeaderBar heading="My collection" />

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
