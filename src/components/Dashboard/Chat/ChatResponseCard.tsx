import { Card, Image, rem, Text } from "@mantine/core";

interface ChatResponseCard {
  type?: "voice_note" | "image" | "note" | "document" | "link" | "video";
  title?: string;
  date?: string;
  filename?: string;
  link?: string;
}

interface CardSubtitle {
  type?: ChatResponseCard["type"];
  date?: string;
  filename?: string;
  link?: string;
}

function CardSubtitleMaker({ type, date, filename, link }: CardSubtitle) {
  switch (type) {
    case "voice_note":
      return `Voice Note: ${date}`;
    case "note":
      return `Note: ${date}`;
    case "image":
      return `Image: ${date}`;
    case "document":
      return `${filename}`;
    case "link":
      return `${link}`;
    case "video":
      return `${link}`;
    default:
      return `null`;
  }
}

const ChatResponseCard = ({ type, date, title, filename, link }: ChatResponseCard) => {
  return (
    <Card shadow="sm" padding="md" component="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
      <Card.Section>
        <Image src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" h={160} alt="No way!" />
      </Card.Section>

      <Text fw={500} size="md" mt="md">
        {title}
      </Text>

      <Text c="dimmed" size="sm">
        {CardSubtitleMaker({ type, date, filename, link })}
      </Text>
    </Card>
  );
};

export default ChatResponseCard;
