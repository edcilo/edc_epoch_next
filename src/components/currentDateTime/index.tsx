import { FC, useState, useEffect } from "react";
import { TextInput } from "@mantine/core";
import { styles } from "./styles";

interface ICurrentDateTimeProps {
  datetime: Date;
}

export const CurrentDateTime: FC<ICurrentDateTimeProps> = ({ datetime }) => {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(datetime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <TextInput
        label="Current date and time:"
        styles={styles}
        value={currentDateTime.toLocaleString()}
        readOnly
      />
    </div>
  );
};
