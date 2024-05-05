import { Box, Button, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { api } from '../services/api';

export default function RegisterLogin() {
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const router = useRouter();

    function handleRegister() {
        if (!name || !email || !password || !address || !phone) {
            return alert('preencha todos os campos!');
        }

        api.post('/users', { name, email, password, address, phone })
            .then(() => {
                alert('Cadastro realizado com sucesso!');
                router.replace('/');
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possivel cadastrar');
                }
            });
    }

    return (
        <Box mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    className="w-96 pt-6"
                    withAsterisk
                    label="Nome"
                    placeholder="José da Silva"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextInput
                    className="w-96 pt-6"
                    withAsterisk
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
                    placeholder="******"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextInput
                    className="w-96 pt-6"
                    withAsterisk
                    label="Endereço"
                    placeholder="Rua das Flores, 123 - Bairro Jardim Primavera, Cidade Alegria"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <TextInput
                    className="w-96 pt-6"
                    withAsterisk
                    label="Celular"
                    placeholder="11 9 9999-9999"
                    onChange={(e) => setPhone(e.target.value)}
                />

                <Group justify="flex-end" mt="md">
                    <Button className="bg-roxo" onClick={handleRegister}>
                        Cadastrar
                    </Button>
                </Group>
            </form>
        </Box>
    );
}
