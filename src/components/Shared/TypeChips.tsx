import { Chip, Group, rem } from "@mantine/core";
import { CHIPS } from "@/data/const";
import { IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function TypeChips({ origin }: { origin: string }) {
  const router = useRouter();

  const handleChipClick = (chipKey: string) => {
    const path = chipKey === "/" ? origin : `${origin}${chipKey}`;
    router.push(path);
  };

  return (
    <Chip.Group>
      <Group justify="center" gap={8}>
        {CHIPS.SEARCH_CHIPS.map((chip, i) => {
          const currentPath = router.pathname === origin ? "/" : router.pathname.replace(origin, "");
          const isActive = chip.key === currentPath;

          return (
            <Chip classNames={{ label: isActive ? "bg-red-500" : "bg-red-200" }} icon={<IconCheck style={{ width: rem(16), height: rem(16) }} />} className="capitalize" key={i} size="sm" value={chip.key} checked={isActive} onClick={() => handleChipClick(chip.key)}>
              {chip.title}
            </Chip>
          );
        })}
      </Group>
    </Chip.Group>
  );
}
