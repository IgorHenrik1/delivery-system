import { Badge, TextInput } from '@mantine/core';
import { IoMdSearch } from 'react-icons/io';

export default function () {
    return (
        <div className="flex justify-between px-6 gap-6 py-4 mt-6 rounded-lg bg-terciaria items-center">
            <div className="flex gap-3 items-center w-full">
                <TextInput placeholder="Encontrar produto" className="w-full" />
                <Badge color="#8234E9" size="xl" className="rounded-lg">
                    <IoMdSearch />
                </Badge>
            </div>

            {/* <div className="flex gap-3">
                <Badge color="#8234E9" className="rounded-lg" size="xl">
                    Lanches
                </Badge>
                <Badge color="#8234E9" className="rounded-lg" size="xl">
                    Bebidas
                </Badge>
                <Badge color="#8234E9" className="rounded-lg" size="xl">
                    Doces
                </Badge>
            </div> */}
        </div>
    );
}
