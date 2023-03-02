import { FC, useState } from "react";
import { Button, Input, Checkbox } from "@mantine/core";

interface IEpochToHuman {
  epoch: number;
}

export const EpochToHuman: FC<IEpochToHuman> = ({ epoch }) => {
  const [value, setValue] = useState<number>(epoch);
  const [inMmilliseconds, setMilliseconds] = useState<boolean>(false);

  const convertEpoch = () => {
    const epoch = inMmilliseconds ? value : value * 1000;
    return new Date(epoch);
  };

  return (
    <div>
      <Input value={value} onChange={(i) => setValue(+i.target.value)} />
      <Checkbox
        label="milliseconds"
        checked={inMmilliseconds}
        onChange={(e) => setMilliseconds(e.target.checked)}
      />
      <Button onClick={convertEpoch}>Convert</Button>
      <p>
        <strong>GMT: </strong>
        {convertEpoch().toUTCString()}
      </p>
      <p>
        <strong>Local: </strong>
        {convertEpoch().toString()}
      </p>
    </div>
  );
};
