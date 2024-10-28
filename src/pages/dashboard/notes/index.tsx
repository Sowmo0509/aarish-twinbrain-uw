import React from "react";
import ChatResponseCard from "@/components/Dashboard/Chat/ChatResponseCard";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardWrapper from "@/components/Layout/DashboardWrapper";
import { SimpleGrid } from "@mantine/core";

const Notes = () => {
  return (
    <DashboardLayout>
      <DashboardWrapper>
        <SimpleGrid cols={3}>
          <ChatResponseCard date="27 Oct" type="note" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="note" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="note" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="note" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="note" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="note" title="Chat Response Card" />
        </SimpleGrid>
      </DashboardWrapper>
    </DashboardLayout>
  );
};

export default Notes;
