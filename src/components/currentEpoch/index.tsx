import { FC, useState, useEffect } from "react";
import { ActionIcon, TextInput, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { getCurrentEpoch } from "@/helpers";
import { IconClipboard } from "@tabler/icons-react";
import { styles } from "./styles";

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
      <TextInput
        label="Current Unix epoch time:"
        styles={styles}
        value={Math.floor(currentEpoch / 1000)}
        readOnly
        rightSection={
          <Tooltip label={clipboard.copied ? "Copied" : "Copy"}>
            <ActionIcon
              variant="transparent"
              color={clipboard.copied ? "green.8" : "gray.7"}
              onClick={() => clipboard.copy(currentEpoch)}
              aria-label="Copy current epoch to clipboard"
            >
              <IconClipboard size={18} />
            </ActionIcon>
          </Tooltip>
        }
      />
    </div>
  );
};
