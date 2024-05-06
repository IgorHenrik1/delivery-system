import { getServerSession } from 'next-auth';

import { nextAuthOptions } from '../app/api/auth/[...nextauth]/route';
import AvatarHeader from './AvatarHeader';
import ButtonLogout from './ButtonLogout';

export default async function HeaderMain() {
    const session = await getServerSession(nextAuthOptions);

    return (
        <div className="flex justify-between  py-2 max-w-7xl m-auto">
            <div className="flex  items-center gap-4">
                <AvatarHeader />
                <p>{session?.user.name}</p>
            </div>

            <ButtonLogout />
        </div>
    );
}
