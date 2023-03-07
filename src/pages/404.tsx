import { FC } from "react";
import { DefaultLayout } from "@/layouts";
import { Stack, Container, Flex, Text, Title } from "@mantine/core";

const NotFoundPage: FC = () => {
  return (
    <DefaultLayout>
      <Container size={400} h="100%">
        <Flex h="100%" justify="center" align="center">
          <Stack>
            <Title align="center" size={128}>
              404
            </Title>
            <Text align="center" size={32}>
              Page Not Found
            </Text>
          </Stack>
        </Flex>
      </Container>
    </DefaultLayout>
  );
};

export default NotFoundPage;
