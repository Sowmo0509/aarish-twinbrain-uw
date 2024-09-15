import { recordANoteState } from "@/libs/atoms";
import { ActionIcon, Button, Group, Text } from "@mantine/core";
import { IconCheck, IconCircleX, IconGradienter, IconPlayerPauseFilled, IconPoint } from "@tabler/icons-react";
import { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import { useRecoilState } from "recoil";

const RecordView = () => {
  const [isRecording, setIsRecording] = useRecoilState(recordANoteState);

  return (
    <div>
      <ReactMediaRecorder
        onStart={() => setIsRecording(true)}
        onStop={() => setIsRecording(false)}
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) =>
          !isRecording ? (
            <Button onClick={startRecording} radius={"lg"} variant="filled" size="sm" fz={"md"} fw={500} rightSection={<IconGradienter width={20} height={20} color="red" />}>
              Record a note
            </Button>
          ) : (
            // <div>
            //   <p>{status}</p>
            //   <button onClick={startRecording}>Start Recording</button>
            //   <button onClick={stopRecording}>Stop Recording</button>
            //   {/* <video src={mediaBlobUrl} controls autoPlay loop /> */}
            // </div>

            <Group gap={32}>
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
              <Button onClick={stopRecording} color="green" radius={"lg"} variant="light" size="sm" fz={"md"} fw={500} rightSection={<IconCheck />}>
                Done
              </Button>
            </Group>
          )
        }
      />
    </div>
  );
};

export default RecordView;
