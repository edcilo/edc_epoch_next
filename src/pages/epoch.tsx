import { Container, Space, Text, Title, Code } from "@mantine/core";
import { DefaultLayout } from "@/layouts";
import { I18n } from "@/components";
import Link from "next/link";
import { IconExternalLink, IconArrowLeft } from "@tabler/icons-react";
import { Prism } from "@mantine/prism";

export default function Epoch() {
  return (
    <DefaultLayout>
      <Container mt="lg" mb="lg" size={600}>
        <Title>Epoch</Title>
        <Text size="sm">
          <Link href="/">
            <I18n t="epoch.back" />
          </Link>
        </Text>

        <Space h="xl" />

        <Text mb="md">
          <I18n t="epoch.p1" />
        </Text>
        <Text mb="md">
          <I18n t="epoch.p2" />
        </Text>
        <Text mb="md">
          <I18n t="epoch.p3" />
        </Text>
        <Text mb="md">
          <I18n t="epoch.p4" />
        </Text>
        <Text mb="md">
          <I18n t="epoch.p5" />
        </Text>
        <Link href="https://en.wikipedia.org/wiki/Unix_time">
          Wikipedia
          <IconExternalLink size={16} />
        </Link>

        <Space h={64} />

        <Title order={2} mb="sm">
          <I18n t="epoch.python" />
        </Title>
        <Prism language="python">{`import time
epochTime = int(time.time())`}</Prism>

        <Space h="xl" />

        <Title order={2} mb="sm">
          <I18n t="epoch.go" />
        </Title>
        <Prism language="go">{`const epochTime = time.Now().Unix()`}</Prism>

        <Space h="xl" />

        <Title order={2} mb="sm">
          <I18n t="epoch.javascript" />
        </Title>
        <Prism language="javascript">{`const epochTime = Date.now()`}</Prism>

        <Space h="xl" />

        <Title order={2} mb="sm">
          <I18n t="epoch.bash" />
        </Title>
        <Prism language="bash">{`epochTime=$(date +%s)`}</Prism>

        <Space h="xl" />

        <Title order={2} mb="sm">
          <I18n t="epoch.mysql" />
        </Title>
        <Prism language="ocaml">{`SELECT unix_timestamp(now())`}</Prism>

        <Space h="xl" />

        <Title order={2} mb="sm">
          <I18n t="epoch.postgres" />
        </Title>
        <Prism language="ocaml">{`SELECT extract(epoch FROM now());`}</Prism>
      </Container>
    </DefaultLayout>
  );
}
