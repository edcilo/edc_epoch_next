import { FC, useState } from "react";
import { Button, Flex, NumberInput, Space } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { inputStyles, useStyles } from "./styles";
import { IDate, IHumanToEpochProps } from "./types";

export const HumanToEpoch: FC<IHumanToEpochProps> = ({ epoch }) => {
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

  return (
    <div>
      <Flex justify="space-between" gap="md" mb="xs">
        <NumberInput
          label="Year"
          placeholder="year"
          styles={inputStyles}
          min={1970}
          max={9999}
          value={date.year}
          onChange={(value) => setDate({ ...date, year: value || date.year })}
        />
        <NumberInput
          label="Mon"
          placeholder="month"
          styles={inputStyles}
          min={1}
          max={12}
          value={date.month}
          onChange={(value) => setDate({ ...date, month: value || date.month })}
        />
        <NumberInput
          label="Day"
          placeholder="day"
          styles={inputStyles}
          min={1}
          max={31}
          value={date.day}
          onChange={(value) => setDate({ ...date, day: value || date.day })}
        />
      </Flex>
      <Flex justify="space-between" gap="md" mb="xs">
        <NumberInput
          label="Hr"
          placeholder="hour"
          styles={inputStyles}
          min={0}
          max={23}
          value={date.hour}
          onChange={(value) => setDate({ ...date, hour: value || date.hour })}
        />
        <NumberInput
          label="Min"
          placeholder="minute"
          styles={inputStyles}
          min={0}
          max={59}
          value={date.minute}
          onChange={(value) =>
            setDate({ ...date, minute: value || date.minute })
          }
        />
        <NumberInput
          label="Sec"
          placeholder="second"
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
        aria-label="Convert human date to epoch"
      >
        <IconRefresh size={18} /> Convert
      </Button>

      <Space h="md" />

      <p>
        <strong>Epoch: </strong>
        {newEpoch}
      </p>
    </div>
  );
};
