import { FC, useState, useEffect } from "react";
import { ActionIcon, TextInput, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { getCurrentEpoch } from "@/helpers";
import { IconClipboard } from "@tabler/icons-react";
import { styles } from "./styles";
import { i18n } from "@/helpers";
import { useRouter } from "next/router";
import { gaEvent } from "@/services";

interface ICurrentEpochProps {
  epoch: number;
}

export const CurrentEpoch: FC<ICurrentEpochProps> = ({ epoch }) => {
  const router = useRouter();
  const locale = router.locale || "en";
  const clipboard = useClipboard({ timeout: 500 });
  const [currentEpoch, setCurrentEpoch] = useState<number>(epoch);

  const clipboardEpoch = () => {
    gaEvent("current_epoch", "click-clipboard");
    clipboard.copy(currentEpoch);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEpoch(getCurrentEpoch());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <TextInput
        label={i18n("currentEpoch.label", locale)}
        styles={styles}
        value={Math.floor(currentEpoch / 1000)}
        readOnly
        rightSection={
          <Tooltip
            label={
              clipboard.copied
                ? i18n("currentEpoch.copied", locale)
                : i18n("currentEpoch.copy", locale)
            }
          >
            <ActionIcon
              variant="transparent"
              color={clipboard.copied ? "green.8" : "gray.7"}
              onClick={clipboardEpoch}
              aria-label={i18n("currentEpoch.clipboard", locale)}
            >
              <IconClipboard size={18} />
            </ActionIcon>
          </Tooltip>
        }
      />
    </div>
  );
};
