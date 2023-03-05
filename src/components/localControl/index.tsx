import { FC } from "react";
import { Menu, ActionIcon } from "@mantine/core";
import { useRouter } from "next/router";
import { useStyles } from "./styles";
import { IconLanguage } from "@tabler/icons-react";
import { i18n } from "@/helpers";

export const LocalControl: FC = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const locale = router.locale || "en";

  const menuItems = [
    { label: "English", value: "en" },
    { label: "Español", value: "es" },
  ];

  const goTo = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Menu>
      <Menu.Target>
        <ActionIcon
          className={classes.trigger}
          variant="filled"
          title={i18n("localeControl.title", locale)}
          aria-label={i18n("localControl.title", locale)}
        >
          <IconLanguage />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {menuItems.map((item) => (
          <Menu.Item
            key={`menu-item-${item.value}`}
            onClick={() => goTo(item.value)}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
