import { Box, Button } from "@mantine/core";
import { IconGradienter } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { useState } from "react";
const DynamicRecordView = dynamic(() => import("@/components/Shared/DynamicRecordView"), { ssr: false });

const RecordANote = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <Box>
      {/* <Button onClick={() => setIsRecording(true)} radius={"lg"} variant="filled" size="sm" fz={"md"} fw={500} rightSection={<IconGradienter width={20} height={20} color="red" />}>
        Record a note
      </Button> */}
      <DynamicRecordView />
    </Box>
  );
};

export default RecordANote;
