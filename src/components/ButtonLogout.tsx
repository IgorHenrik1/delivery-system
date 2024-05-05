'use client';

import { Badge } from '@mantine/core';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export default function ButtonLogout() {
    const router = useRouter();

    async function logout() {
        await signOut({
            redirect: false,
        });

        router.replace('/');
    }

    return (
        <Badge
            variant="filled"
            color="#8234E9"
            size="xl"
            className="rounded-lg cursor-pointer"
            onClick={logout}
        >
            <RiLogoutBoxRLine size={20} />
        </Badge>
    );
}
