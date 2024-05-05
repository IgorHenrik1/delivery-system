import { Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import OrdersItems from './OrdersItems';

export default function OrdersPlaced() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer
                opened={opened}
                onClose={close}
                title="Carrinho"
                className="bg-slate-950 text-primaria"
                overlayProps={{
                    backgroundOpacity: 0.5,
                    blur: 4,
                }}
            >
                {<OrdersItems />}
            </Drawer>

            <Button onClick={open}>Adicionar</Button>
        </>
    );
}
