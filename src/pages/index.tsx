import Head from "next/head";
import {
  Container,
  Card,
  Title,
  Flex,
  Text,
  Space,
  createStyles,
} from "@mantine/core";
import { DefaultLayout } from "@/layouts";
import {
  CurrentEpoch,
  CurrentDateTime,
  EpochToHuman,
  Background,
  HumanToEpoch,
  I18n,
} from "@/components";
import { getCurrentEpoch } from "@/helpers";
import { IconClock } from "@tabler/icons-react";

interface HomeProps {
  currentEpoch: number;
}

export const useStyles = createStyles((theme) => ({
  header: {
    marginBottom: theme.spacing.xl,
    color: theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.white,
  },
  subtitle: {
    fontSize: theme.fontSizes.lg,
    textAlign: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[1]
        : theme.colors.dark[9],
  },
}));

export default function Home({ currentEpoch }: HomeProps) {
  const { classes } = useStyles();

  return (
    <>
      <DefaultLayout>
        <Background />
        <Container
          size={400}
          h="100%"
          style={{ position: "relative", zIndex: 100 }}
        >
          <Flex h="100%" direction="column" gap="md" justify="center">
            <Flex
              className={classes.header}
              justify="center"
              align="center"
              gap="sm"
              mt="lg"
            >
              <IconClock size={48} />
              <Title order={1}>
                <I18n t="home.title" />
              </Title>
            </Flex>

            <Card shadow="sm" withBorder>
              <CurrentEpoch epoch={currentEpoch} />
              <Space h="md" />
              <CurrentDateTime datetime={new Date(currentEpoch)} />
            </Card>

            <Card shadow="sm" withBorder>
              <Card.Section p="md">
                <Title order={1} className={classes.subtitle}>
                  <I18n t="home.epochToHuman" />
                </Title>
              </Card.Section>
              <Card.Section p="md" pt={0}>
                <EpochToHuman epoch={currentEpoch} />
              </Card.Section>
            </Card>

            <Card shadow="sm" withBorder>
              <Card.Section p="md">
                <Title order={1} className={classes.subtitle}>
                  <I18n t="home.humanToEpoch" />
                </Title>
              </Card.Section>
              <Card.Section p="md" pt={0}>
                <HumanToEpoch epoch={currentEpoch} />
              </Card.Section>
            </Card>

            <Space h="lg" />

            <Text mb="xl">
              <I18n t="home.description" />
            </Text>
          </Flex>
        </Container>
      </DefaultLayout>
    </>
  );
}

export async function getServerSideProps() {
  const currentEpoch = getCurrentEpoch();
  return {
    props: {
      currentEpoch,
    },
  };
}
