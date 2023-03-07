import { FC, useEffect, useState } from "react";
import { Button, Flex, Checkbox, NumberInput, Tooltip } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { checkboxStyles, inputStyles, useStyles } from "./styles";
import { I18n } from "@/components/i18n";
import { i18n } from "@/helpers";
import { useRouter } from "next/router";
import { gaEvent } from "@/services";

interface IEpochToHuman {
  epoch: number;
}

export const EpochToHuman: FC<IEpochToHuman> = ({ epoch }) => {
  const router = useRouter();
  const locale = router.locale || "en";
  const { classes } = useStyles();
  const [value, setValue] = useState<number>(Math.floor(epoch / 1000));
  const [gmt, setGmt] = useState<string>("");
  const [local, setLocal] = useState<string>("");
  const [inMmilliseconds, setMilliseconds] = useState<boolean>(false);

  const convertToDate = () => {
    const epoch = inMmilliseconds ? value : value * 1000;
    return new Date(epoch);
  };

  useEffect(() => {
    setGmt(
      convertToDate().toLocaleString(locale, {
        timeZone: "GMT",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
    );
    setLocal(
      convertToDate().toLocaleString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
    );
  }, [locale, convertToDate]);

  return (
    <div>
      <Flex justify="space-between" gap="md" mb="xs">
        <NumberInput
          styles={inputStyles}
          placeholder={i18n("epochToHuman.placeholder", locale)}
          hideControls
          radius="xs"
          value={value}
          w="100%"
          onChange={(value) => setValue(value || 0)}
        />
        <Tooltip label={i18n("epochToHuman.convert", locale)}>
          <Button
            className={classes.button}
            onClick={convertToDate}
            aria-label={i18n("epochToHuman.buttonLabel", locale)}
          >
            <IconRefresh size={18} />
          </Button>
        </Tooltip>
      </Flex>

      <Checkbox
        styles={checkboxStyles}
        label={i18n("epochToHuman.milliseconds", locale)}
        checked={inMmilliseconds}
        onChange={(e) => setMilliseconds(e.target.checked)}
      />

      <p>
        <strong>
          <I18n t="epochToHuman.gmt" />:{" "}
        </strong>
        {gmt}
      </p>

      <p>
        <strong>
          <I18n t="epochToHuman.local" />:{" "}
        </strong>
        {local}
      </p>
    </div>
  );
};
