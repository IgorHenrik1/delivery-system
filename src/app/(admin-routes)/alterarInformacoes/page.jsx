'use client';

import { api } from '@/services/api';
import { Box, Button, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { AvadarDefault } from '../../../../public/png-transparent-default-avatar-thumbnail.png';

export default function changeInformation() {
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
    const [passwordOld, setPasswordOld] = useState('');
    const [passwordNew, setPasswordNew] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState(AvadarDefault);
    const [avatarFile, setAvatarFile] = useState(null);

    const router = useRouter();

    async function updateProfile({ user, avatarFile }) {
        if (avatarFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append('avatar', avatarFile);

            const respose = await api.patch('/users/avatar', fileUploadForm);
            user.avatar = response.data.avatar;
        }

        try {
            await api.put('/users', user);
            localStorage.$etItem('@clientdelivery: user', JSON.stringify(user));
            setData({ user, token: data.token });
            alert('Perfil atualizado!');
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possivel atualizar informações');
            }
        }
    }

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
            address,
            phone,
        };

        await updateProfile({ user, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files?.[0];
        setAvatarFile(file);
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }
    return (
        <div className="bg-primaria h-svh flex items-center justify-center py-10">
            <Box mx="auto" className="bg-secundaria px-16 py-12 rounded-xl">
                <form>
                    <div className="flex gap-4 items-center justify-center">
                        <div className="w-24 h-24 rounded-full">
                            <img
                                alt=""
                                src={avatar}
                                className="w-24 h-24 rounded-full overflow-hidden"
                            />
                            <label
                                htmlFor="avatar"
                                className=" relative cursor-pointer -top-8 left-14"
                            >
                                <FaCamera
                                    size={30}
                                    className="absolute text-roxo"
                                />
                                <input
                                    id="avatar "
                                    type="file"
                                    onChange={handleChangeAvatar}
                                    className="opacity-0 cursor-pointer absolute"
                                />
                            </label>
                        </div>
                    </div>

                    <TextInput
                        className="w-96 pt-6"
                        label="Nome"
                        placeholder="José da Silva"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextInput
                        className="w-96 pt-6"
                        label="Email"
                        placeholder="your@email.com"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <PasswordInput
                        className="pt-6"
                        label="Nova Senha"
                        placeholder="******"
                        onChange={(e) => setPasswordNew(e.target.value)}
                    />
                    <PasswordInput
                        className="pt-6"
                        label="Senha antiga"
                        placeholder="******"
                        onChange={(e) => setPasswordOld(e.target.value)}
                    />

                    <TextInput
                        className="w-96 pt-6"
                        label="Endereço"
                        placeholder="Rua das Flores, 123 - Bairro Jardim Primavera, Cidade Alegria"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextInput
                        className="w-96 pt-6"
                        label="Celular"
                        placeholder="11 9 9999-9999"
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button className="bg-roxo" onClick={handleUpdate}>
                            Enviar
                        </Button>
                    </Group>
                </form>
            </Box>
        </div>
    );
}
