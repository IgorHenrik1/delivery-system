import { Avatar } from '@mantine/core';

import { getServerSession } from 'next-auth';

import { nextAuthOptions } from '../app/api/auth/[...nextauth]/route';
import ButtonLogout from './ButtonLogout';

export default async function HeaderMain() {
    const session = await getServerSession(nextAuthOptions);

    return (
        <div className="flex justify-between  py-2 max-w-7xl m-auto">
            <div className="flex  items-center gap-4">
                <Avatar
                    src="https://github.com/igorhenrik1.png"
                    alt="it's me"
                />
                <p>{session?.user?.name}</p>
            </div>

            <ButtonLogout />
        </div>
    );
}
