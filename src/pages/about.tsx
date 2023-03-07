import { FC } from "react";
import {
  Card,
  Center,
  Container,
  Grid,
  Image,
  List,
  Space,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { I18n } from "@/components";
import { DefaultLayout } from "@/layouts";
import {
  IconLink,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconWorld,
} from "@tabler/icons-react";

const poweredBy = [
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    logo: "/assets/typescript.svg",
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    logo: "/assets/react.svg",
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    logo: "/assets/next-js.svg",
  },
  {
    name: "Vercel",
    url: "https://vercel.com/",
    logo: "/assets/vercel.svg",
  },
  {
    name: "Mantine",
    url: "https://mantine.dev/",
    logo: "/assets/mantine.svg",
  },
  {
    name: "Google Analytics",
    url: "https://analytics.google.com/",
    logo: "/assets/google-analytics.svg",
  },
];

const tools = [
  {
    name: "Tabler Icons",
    url: "https://tablericons.com/",
  },
  {
    name: "getwaves.io",
    url: "https://getwaves.io/",
  },
  {
    name: "Pexels",
    url: "https://www.pexels.com/photo/snowy-mountain-1287145/",
  },
  {
    name: "Convertio",
    url: "https://convertio.co/es/",
  },
  {
    name: "Adobe Color Wheel",
    url: "https://color.adobe.com/es/create/color-wheel",
  },
];

const AboutPage: FC = () => {
  return (
    <DefaultLayout>
      <Container mt="lg" mb="lg" size={600}>
        <Title>
          <I18n t="about.title" />
        </Title>
        <Text size="sm">
          <Link href="/">
            <I18n t="about.back" />
          </Link>
        </Text>

        <Space h="xl" />

        <Title order={3} mb="sm">
          <I18n t="about.poweredBy" />
        </Title>
        <List>
          <List.Item icon={<IconWorld />}>
            <Link href="https://edcilo.com" target="_blank">
              edcilo.com
            </Link>
          </List.Item>
          <List.Item icon={<IconBrandGithub />}>
            <Link
              href="https://github.com/edcilo/edc_epoch_next"
              target="_blank"
            >
              Repository
            </Link>
          </List.Item>
          <List.Item icon={<IconBrandTwitter />}>
            <Link href="https://twitter.com/edcilo" target="_blank">
              edcilo
            </Link>
          </List.Item>
          <List.Item icon={<IconBrandInstagram />}>
            <Link href="https://instagram.com/edcilo.dev" target="_blank">
              edcilo.dev
            </Link>
          </List.Item>
        </List>

        <Space h="xl" />

        <Title order={3} mb="sm">
          <I18n t="about.technologies" />
        </Title>
        <Grid grow>
          {poweredBy.map((item) => (
            <Grid.Col span={4} key={item.name}>
              <Card
                shadow="sm"
                component="a"
                href={item.url}
                target="_blank"
                withBorder
              >
                <Center>
                  <Image
                    src={item.logo}
                    width={120}
                    height={120}
                    alt={item.name}
                  />
                </Center>
                <Text weight={500} mt="md" align="center">
                  {item.name}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        <Space h="xl" />

        <Title order={3} mb="sm">
          <I18n t="about.tools" />
        </Title>
        <List>
          {tools.map((item) => (
            <List.Item key={item.name} icon={<IconLink />}>
              <Link href={item.url} target="_blank">
                {item.name}
              </Link>
            </List.Item>
          ))}
        </List>
      </Container>
    </DefaultLayout>
  );
};

export default AboutPage;
