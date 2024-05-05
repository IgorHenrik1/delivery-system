'use client';

import { Card, Group, Image, Text } from '@mantine/core';
import DetailedProduct from './DetailedProduct';

export default function CardProducts() {
    return (
        <Card
            className="w-72 bg-current: branco"
            shadow="lg"
            padding="lg"
            radius="md"
            withBorder
        >
            <Card.Section>
                <Image
                    src="https://img.freepik.com/fotos-gratis/foto-de-delicioso-hamburguer-isolado-no-fundo-branco_125540-3378.jpg"
                    alt="Norway"
                    className="w-48 mx-auto"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
            </Group>

            <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord
            </Text>

            <DetailedProduct />
        </Card>
    );
}
