import { FC, useState } from "react";
import { Button, Flex, Checkbox, NumberInput, Tooltip } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { checkboxStyles, inputStyles, useStyles } from "./styles";

interface IEpochToHuman {
  epoch: number;
}

export const EpochToHuman: FC<IEpochToHuman> = ({ epoch }) => {
  const { classes } = useStyles();
  const [value, setValue] = useState<number>(Math.floor(epoch / 1000));
  const [inMmilliseconds, setMilliseconds] = useState<boolean>(false);

  const convertToDate = () => {
    const epoch = inMmilliseconds ? value : value * 1000;
    return new Date(epoch);
  };

  return (
    <div>
      <Flex justify="space-between" gap="md" mb="xs">
        <NumberInput
          styles={inputStyles}
          placeholder="epoch time"
          hideControls
          radius="xs"
          value={value}
          w="100%"
          onChange={(value) => setValue(value || 0)}
        />
        <Tooltip label="Convert">
          <Button className={classes.button} onClick={convertToDate}>
            <IconRefresh size={18} />
          </Button>
        </Tooltip>
      </Flex>

      <Checkbox
        styles={checkboxStyles}
        label="Milliseconds"
        checked={inMmilliseconds}
        onChange={(e) => setMilliseconds(e.target.checked)}
      />

      <p>
        <strong>GMT: </strong>
        {convertToDate().toUTCString()}
      </p>

      <p>
        <strong>Local: </strong>
        {convertToDate().toString()}
      </p>
    </div>
  );
};
