import { useState } from "react";
import type { AppProps as AppDefaultProps } from "next/app";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { getCookie, setCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { NextSeo } from "next-seo";

interface IAppProps extends AppDefaultProps {
  colorScheme: ColorScheme;
}

interface IAppInitialProps {
  ctx: GetServerSidePropsContext;
}

export default function App(props: IAppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("edcilo-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        title="epoch converter"
        description="epoch converter web application"
        canonical="https://epoch.edcilo.com"
        twitter={{
          cardType: "summary",
          handle: "@edcilo",
        }}
        additionalMetaTags={[
          {
            name: "theme-color",
            content: colorScheme === "dark" ? "#c92a2a" : "#d6336c",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://storage.edcilo.com/favicon.ico",
          },
        ]}
      />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withCSSVariables
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: IAppInitialProps) => ({
  colorScheme: getCookie("edcilo-color-scheme", ctx) || "light",
});
