import { ActionIcon, Button, Group, Text } from "@mantine/core";
import { IconCheck, IconCircleX, IconPlayerPauseFilled, IconPoint } from "@tabler/icons-react";
import { ReactMediaRecorder } from "react-media-recorder";

const RecordView = ({ setIsRecording }: { setIsRecording: (data: boolean) => void }) => (
  <div>
    <ReactMediaRecorder
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        // <div>
        //   <p>{status}</p>
        //   <button onClick={startRecording}>Start Recording</button>
        //   <button onClick={stopRecording}>Stop Recording</button>
        //   {/* <video src={mediaBlobUrl} controls autoPlay loop /> */}
        // </div>
        <Group gap={32} bg={"white"} px={14} py={8} className="rounded-2xl shadow-lg">
          <Button color="red" radius={"lg"} variant="light" size="sm" fz={"md"} fw={500} rightSection={<IconCircleX />}>
            Cancel
          </Button>

          <Group gap={0}>
            <IconPoint color="red" />
            <Text>0:11</Text>
            <Text>/1:00</Text>
          </Group>
          <ActionIcon variant="light" aria-label="Settings">
            <IconPlayerPauseFilled />
          </ActionIcon>
          <Button onClick={() => setIsRecording(false)} color="green" radius={"lg"} variant="light" size="sm" fz={"md"} fw={500} rightSection={<IconCheck />}>
            Done
          </Button>
        </Group>
      )}
    />
  </div>
);

export default RecordView;
