'use client';

import { Avatar, Menu, rem } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { IoIosSettings } from 'react-icons/io';
export default function AvatarHeader() {
    const router = useRouter();

    function handleAlter() {
        router.replace('/alterarInformacoes');
    }

    return (
        <div>
            <Menu shadow="md" width={200}>
                <Menu.Target>
                    <Avatar
                        src="https://github.com/igorhenrik1.png"
                        alt="it's me"
                        className="cursor-pointer"
                    />
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Item
                        onClick={handleAlter}
                        leftSection={
                            <IoIosSettings
                                style={{ width: rem(14), height: rem(14) }}
                            />
                        }
                    >
                        Alterar informações
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    );
}
