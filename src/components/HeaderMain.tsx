import { Avatar, Badge } from '@mantine/core';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export default function HeaderMain() {
    return (
        <div className="flex justify-between  py-2 max-w-7xl m-auto">
            <Avatar src="https://github.com/igorhenrik1.png" alt="it's me" />
            <Badge
                variant="filled"
                color="#8234E9"
                size="xl"
                className="rounded-lg"
            >
                <RiLogoutBoxRLine size={20} />
            </Badge>
        </div>
    );
}
