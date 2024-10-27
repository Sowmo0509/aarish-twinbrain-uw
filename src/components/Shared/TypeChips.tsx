import { Chip, Group } from "@mantine/core";
import { CHIPS } from "@/data/const";

export default function TypeChips() {
  return (
    <Chip.Group multiple>
      <Group justify="center" gap={8}>
        {CHIPS.SEARCH_CHIPS.map((chip, i) => (
          <Chip className="capitalize" key={i} size="sm" variant="outline" value={chip.key}>
            {chip.title}
          </Chip>
        ))}
      </Group>
    </Chip.Group>
  );
}
