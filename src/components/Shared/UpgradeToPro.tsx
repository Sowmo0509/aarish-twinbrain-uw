import { Alert, Box } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function UpgradeToPro() {
  const icon = <IconArrowUpRight />;
  return (
    <Box pos={"relative"}>
      <Box pos={"absolute"} right={16} top={16} c={"red"}>
        <IconArrowUpRight />
      </Box>
      <Alert variant="light" color="red" radius="lg" title="Upgrade plan">
        Upgrade to experience the pro benefits.
      </Alert>
    </Box>
  );
}
