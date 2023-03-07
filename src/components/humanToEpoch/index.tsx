import { FC, useState } from "react";
import {
  Button,
  Flex,
  NumberInput,
  Space,
  TextInput,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { inputStyles, useStyles } from "./styles";
import { IDate, IHumanToEpochProps } from "./types";
import { I18n } from "@/components/i18n";
import { i18n } from "@/helpers";
import { useRouter } from "next/router";
import { useClipboard } from "@mantine/hooks";
import { IconClipboard } from "@tabler/icons-react";
import { gaEvent } from "@/services";

export const HumanToEpoch: FC<IHumanToEpochProps> = ({ epoch }) => {
  const clipboard = useClipboard({ timeout: 500 });
  const router = useRouter();
  const locale = router.locale || "en";
  const { classes } = useStyles();
  const value = new Date(epoch);
  const currentDate = {
    year: value.getFullYear(),
    month: value.getMonth() + 1,
    day: value.getDate(),
    hour: value.getHours(),
    minute: value.getMinutes(),
    second: value.getSeconds(),
  };
  const [date, setDate] = useState<IDate>(currentDate);
  const [newEpoch, setNewEpoch] = useState<number>(Math.floor(epoch / 1000));

  const convertToEpoch = (date: IDate) => {
    gaEvent("human_to_epoch", "click-btn");
    const { year, month, day, hour, minute, second } = date;
    const epoch = new Date(
      year,
      month - 1,
      day,
      hour,
      minute,
      second
    ).getTime();
    setNewEpoch(Math.floor(epoch / 1000));
  };

  const clipboardEpoch = () => {
    gaEvent("human_to_epoch", "click-clipboard");
    clipboard.copy(newEpoch);
  };

  return (
    <div>
      <Flex justify="space-between" gap="md" mb="xs">
        <NumberInput
          label={i18n("humanToEpoch.year.label", locale)}
          placeholder={i18n("humanToEpoch.year.placeholder", locale)}
          styles={inputStyles}
          min={1970}
          max={9999}
          value={date.year}
          onChange={(value) => setDate({ ...date, year: value || date.year })}
        />
        <NumberInput
          label={i18n("humanToEpoch.month.label", locale)}
          placeholder={i18n("humanToEpoch.month.placeholder", locale)}
          styles={inputStyles}
          min={1}
          max={12}
          value={date.month}
          onChange={(value) => setDate({ ...date, month: value || date.month })}
        />
        <NumberInput
          label={i18n("humanToEpoch.day.label", locale)}
          placeholder={i18n("humanToEpoch.day.placeholder", locale)}
          styles={inputStyles}
          min={1}
          max={31}
          value={date.day}
          onChange={(value) => setDate({ ...date, day: value || date.day })}
        />
      </Flex>
      <Flex justify="space-between" gap="md" mb="xs">
        <NumberInput
          label={i18n("humanToEpoch.hour.label", locale)}
          placeholder={i18n("humanToEpoch.hour.placeholder", locale)}
          styles={inputStyles}
          min={0}
          max={23}
          value={date.hour}
          onChange={(value) => setDate({ ...date, hour: value || date.hour })}
        />
        <NumberInput
          label={i18n("humanToEpoch.minute.label", locale)}
          placeholder={i18n("humanToEpoch.minute.placeholder", locale)}
          styles={inputStyles}
          min={0}
          max={59}
          value={date.minute}
          onChange={(value) =>
            setDate({ ...date, minute: value || date.minute })
          }
        />
        <NumberInput
          label={i18n("humanToEpoch.second.label", locale)}
          placeholder={i18n("humanToEpoch.second.placeholder", locale)}
          styles={inputStyles}
          min={0}
          max={59}
          value={date.second}
          onChange={(value) =>
            setDate({ ...date, second: value || date.second })
          }
        />
      </Flex>

      <Button
        className={classes.button}
        onClick={() => convertToEpoch(date)}
        fullWidth
        aria-label={i18n("humanToEpoch.button.label", locale)}
      >
        <IconRefresh size={18} /> <I18n t="humanToEpoch.button.text" />
      </Button>

      <Space h="md" />

      <TextInput
        label={<strong>Epoch:</strong>}
        value={newEpoch}
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
