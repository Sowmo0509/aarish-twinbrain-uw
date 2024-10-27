import DashboardLayout from "@/components/Layout/DashboardLayout";
import HeaderBar from "@/components/Shared/HeaderBar";
import { ActionIcon, Box, Button, Flex, Grid, Group, Image, rem, Stack, Text, Title } from "@mantine/core";
import { IconPhotoScan, IconPlus } from "@tabler/icons-react";

const DocumentId = () => {
  return (
    <DashboardLayout>
      <Flex direction={"column"} flex={1} h={"100%"} w={"75%"} my={24} mx={"auto"}>
        <HeaderBar />

        <Flex gap={24} direction={"column"}>
          <Stack gap={0}>
            <Image my={16} mah={rem(480)} radius={"xl"} src={"https://images.unsplash.com/photo-1518805672493-adcd9abdc9e0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="cover" />
            <Text fw={500} className="max-w-5xl" fz={rem(30)} lh={1.4}>
              sodapdf-converted.pdf
            </Text>
            <Text opacity={0.5} mt={8}>
              2024-09-05 16:30:43
            </Text>
          </Stack>

          <Group justify="space-between" className="border-2 border-orange-500 p-4 rounded-xl my-6">
            <Group>
              <IconPhotoScan />
              <Text fz={"sm"}>sodapdf-converted.pdf</Text>
            </Group>
            <Button fw={400} fz={"sm"} size="xs" variant="transparent">
              View Document
            </Button>
          </Group>

          <Box>
            <Title order={3} fw={500}>
              AI SUMMARY
            </Title>
            <Grid my={16} gutter="lg">
              <Grid.Col span={12}>
                <Box className="border-2 border-orange-500 bg-orange-50 p-4 rounded-xl">
                  <Text>NVIDIA reported strong financial results for Q2 FY24 with a significant growth in revenue, primarily driven by its Data Center segment.</Text>
                </Box>
              </Grid.Col>

              <Grid.Col span={6}>
                <Box className="border-2 bg-orange-50 p-4 rounded-xl h-full">
                  <Title order={4} fw={500} mb={12}>
                    Revenue Breakdown
                  </Title>
                  <Text>Total Revenue: $13.5B (+88% Q/Q) Data Center: $10.3B (+141% Q/Q) Gaming: $2.5B (+11% Q/Q) Professional Visualization: $0.4B (+28% Q/Q) Automotive: $0.3B (+15% Q/Q) OEM & Other: $0.1B (+14% Q/Q)</Text>
                </Box>
              </Grid.Col>
              <Grid.Col span={6}>
                <Box className="border-2 bg-orange-50 p-4 rounded-xl h-full">
                  <Title order={4} fw={500} mb={12}>
                    Profitability
                  </Title>
                  <Text>Gross Profit: $9.5B (70% margin, +5pp Q/Q) Operating Profit: $6.8B (50% margin, +21pp Q/Q) Net Profit: $6.2B (46% margin, +17pp Q/Q)</Text>
                </Box>
              </Grid.Col>

              <Grid.Col span={6}>
                <Box className="border-2 bg-orange-50 p-4 rounded-xl h-full">
                  <Title order={4} fw={500} mb={12}>
                    Costs and Expenses
                  </Title>
                  <Text>Cost of Revenue: $4.0B Operating Expenses: $2.7B Research & Development: $2.0B Sales, General & Admin: $0.6B Tax: $0.8B</Text>
                </Box>
              </Grid.Col>
              <Grid.Col span={6}>
                <Box className="border-2 bg-orange-50 p-4 rounded-xl h-full">
                  <Title order={4} fw={500} mb={12}>
                    Profitability
                  </Title>
                  <Text>Other Income: $0.2B</Text>
                </Box>
              </Grid.Col>
            </Grid>

            <Group my={24} gap={8}>
              <Button fw={500} color="orange.1" c={"black"}>
                NVIDIA
              </Button>
              <Button fw={500} color="orange.1" c={"black"}>
                Q2 FY24
              </Button>
              <Button fw={500} color="orange.1" c={"black"}>
                Financial Report
              </Button>
              <ActionIcon color="orange.1" c={"black"} aria-label="add" size={"lg"}>
                <IconPlus style={{ width: "70%", height: "70%" }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Box>
        </Flex>
      </Flex>
    </DashboardLayout>
  );
};

export default DocumentId;
