import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Flex, SimpleGrid } from "@mantine/core";
import ChatResponseText from "@/components/Dashboard/Chat/ChatResponseText";
import ChatResponseCard from "@/components/Dashboard/Chat/ChatResponseCard";
import DashboardWrapper from "@/components/Layout/DashboardWrapper";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardWrapper>
        <ChatResponseText />
        <SimpleGrid cols={3}>
          <ChatResponseCard date="27 Oct" type="image" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="image" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="image" title="Chat Response Card" />
        </SimpleGrid>
        <ChatResponseText />
        <ChatResponseText />
        <SimpleGrid cols={3}>
          <ChatResponseCard date="27 Oct" type="image" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="image" title="Chat Response Card" />
          <ChatResponseCard date="27 Oct" type="image" title="Chat Response Card" />
        </SimpleGrid>
        <ChatResponseText />
      </DashboardWrapper>
    </DashboardLayout>
  );
};

export default Dashboard;
