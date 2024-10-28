import React from "react";
import ChatResponseCard from "@/components/Dashboard/Chat/ChatResponseCard";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardWrapper from "@/components/Layout/DashboardWrapper";
import { SimpleGrid } from "@mantine/core";

const Links = () => {
  return (
    <DashboardLayout>
      <DashboardWrapper>
        <SimpleGrid cols={3}>
          <ChatResponseCard link="www.google.com" type="link" title="Chat Response Card" />
          <ChatResponseCard link="www.google.com" type="link" title="Chat Response Card" />
          <ChatResponseCard link="www.google.com" type="link" title="Chat Response Card" />
          <ChatResponseCard link="www.google.com" type="link" title="Chat Response Card" />
          <ChatResponseCard link="www.google.com" type="link" title="Chat Response Card" />
          <ChatResponseCard link="www.google.com" type="link" title="Chat Response Card" />
        </SimpleGrid>
      </DashboardWrapper>
    </DashboardLayout>
  );
};

export default Links;
