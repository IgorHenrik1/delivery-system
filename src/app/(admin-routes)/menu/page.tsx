import { BackgroundImage, Box, Center } from '@mantine/core';
import HeaderMain from '../../../components/HeaderMain';
import Options from '../../../components/Options';
import Products from '../../../components/Products';
import Sidebar from '../../../components/Sidebar';

export default async function Main() {
    return (
        <div className="h-full bg-current: bg-primaria ">
            <div className=" bg-current: bg-secundaria ">
                <HeaderMain />
            </div>
            <Box>
                <BackgroundImage
                    h={250}
                    className="bg-cover"
                    src="https://s1.1zoom.me/b5050/755/Hamburger_Closeup_Fast_food_550990_1920x1080.jpg"
                    radius="sm"
                >
                    <Center p="md"></Center>
                </BackgroundImage>

            </Box>

            <div className="max-w-7xl m-auto flex gap-6">
                <Sidebar />
                <div className="flex flex-col gap-6">
                    <Options />
                    <Products />
                </div>
            </div>
        </div>
    );
}
