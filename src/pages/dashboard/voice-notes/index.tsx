import React from "react";
import ChatResponseCard from "@/components/Dashboard/Chat/ChatResponseCard";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardWrapper from "@/components/Layout/DashboardWrapper";
import { SimpleGrid } from "@mantine/core";

const VoiceNotes = () => {
  return (
    <DashboardLayout>
      <DashboardWrapper>
        <SimpleGrid cols={3}>
          <ChatResponseCard date="27 Oct" type="voice_note" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="voice_note" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="voice_note" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="voice_note" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="voice_note" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="voice_note" title="Chat Response Card" />
        </SimpleGrid>
      </DashboardWrapper>
    </DashboardLayout>
  );
};

export default VoiceNotes;
