import React from "react";
import ChatResponseCard from "@/components/Dashboard/Chat/ChatResponseCard";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardWrapper from "@/components/Layout/DashboardWrapper";
import { SimpleGrid } from "@mantine/core";

const Documents = () => {
  return (
    <DashboardLayout>
      <DashboardWrapper>
        <SimpleGrid cols={3}>
          <ChatResponseCard filename="27 Oct.pdf" type="document" title="Chat Response Card" />
          <ChatResponseCard filename="27 Oct.pdf" type="document" title="Chat Response Card" />
          <ChatResponseCard filename="27 Oct.pdf" type="document" title="Chat Response Card" />
          <ChatResponseCard filename="27 Oct.pdf" type="document" title="Chat Response Card" />
          <ChatResponseCard filename="27 Oct.pdf" type="document" title="Chat Response Card" />
          <ChatResponseCard filename="27 Oct.pdf" type="document" title="Chat Response Card" />
        </SimpleGrid>
      </DashboardWrapper>
    </DashboardLayout>
  );
};

export default Documents;
