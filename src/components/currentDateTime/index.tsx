import { FC, useState, useEffect } from "react";
import { TextInput } from "@mantine/core";
import { styles } from "./styles";
import { i18n } from "@/helpers";
import { useRouter } from "next/router";

interface ICurrentDateTimeProps {
  datetime: Date;
}

export const CurrentDateTime: FC<ICurrentDateTimeProps> = ({ datetime }) => {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(datetime);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <TextInput
        label={i18n("currentDateTime.label", router.locale || "en")}
        styles={styles}
        size="md"
        value={currentDateTime.toLocaleString()}
        readOnly
      />
    </div>
  );
};
