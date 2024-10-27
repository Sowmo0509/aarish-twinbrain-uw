import CollectionCard from "@/components/Dashboard/Collections/CollectionCard";
import CreateNew from "@/components/Dashboard/Collections/CreateNew";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, SimpleGrid } from "@mantine/core";
import { useRouter } from "next/router";

const Collections = () => {
  const router = useRouter();

  return (
    <DashboardLayout>
      <Box w={"75%"} mx={"auto"} py={32}>
        <SimpleGrid cols={4} spacing={32}>
          {/* EXISTING */}
          <CollectionCard router={router} />

          {/* NEW */}
          <CreateNew />
        </SimpleGrid>
      </Box>
    </DashboardLayout>
  );
};

export default Collections;
