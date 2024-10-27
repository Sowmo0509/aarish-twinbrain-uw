import CollectionCard from "@/components/Dashboard/Collections/CollectionCard";
import CreateNew from "@/components/Dashboard/Collections/CreateNew";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, SimpleGrid } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";

const Collections = () => {
  const router = useRouter();
  const [collections, setCollections] = useState<{ name: string; icon: React.ElementType | null }[]>([]);

  const handleAddCollection = (name: string, icon: React.ElementType | null) => {
    setCollections([...collections, { name, icon }]);
  };

  return (
    <DashboardLayout>
      <Box w={"75%"} mx={"auto"} py={32}>
        <SimpleGrid cols={4} spacing={32}>
          {collections.map((collection, index) => (
            <CollectionCard key={index} name={collection.name} icon={collection.icon} router={router} />
          ))}
          <CreateNew onAddCollection={handleAddCollection} />
        </SimpleGrid>
      </Box>
    </DashboardLayout>
  );
};

export default Collections;
