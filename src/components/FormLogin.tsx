'use client';

import { Box, Button, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

export default function FormLogin() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : 'Invalid email',
        },
    });

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const router = useRouter();

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            console.log(result);
            return;
        }

        router.replace('/menu');
    }

    return (
        <Box mx="auto">
            <form onSubmit={handleSubmit}>
                <TextInput
                    className="w-96"
                    withAsterisk
                    type="text"
                    label="Email"
                    placeholder="your@email.com"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <PasswordInput
                    className="pt-6"
                    withAsterisk
                    label="Senha"
                    type="password"
                    placeholder="******"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Group justify="flex-end" mt="md">
                    <Button
                        className="bg-roxo"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Enviar
                    </Button>
                </Group>
            </form>
        </Box>
    );
}
