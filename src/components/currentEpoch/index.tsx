import { FC, useState, useEffect } from "react";
import { ActionIcon, Input, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { getCurrentEpoch } from "@/helpers";
import { IconClipboard } from "@tabler/icons-react";

interface ICurrentEpochProps {
  epoch: number;
}

export const CurrentEpoch: FC<ICurrentEpochProps> = ({ epoch }) => {
  const [currentEpoch, setCurrentEpoch] = useState<number>(epoch);
  const clipboard = useClipboard({ timeout: 500 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEpoch(getCurrentEpoch());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Current Unix epoch time is:
      <Input
        value={currentEpoch}
        radius="xs"
        readOnly
        rightSection={
          <Tooltip label={clipboard.copied ? "Copied" : "Copy"}>
            <ActionIcon
              variant="transparent"
              color={clipboard.copied ? "blue" : "gray"}
              onClick={() => clipboard.copy(currentEpoch)}
            >
              <IconClipboard size={18} />
            </ActionIcon>
          </Tooltip>
        }
      />
    </div>
  );
};
