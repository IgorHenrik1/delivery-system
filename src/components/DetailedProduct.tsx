import { Button, Group, Image, Modal, Textarea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import OrdersPlaced from './OrdersPlaced';

export default function DetailedProduct() {
    const [opened, { close, open }] = useDisclosure(false);

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    return (
        <div>
            <Modal
                className="bg-secundaria  flex"
                opened={opened}
                onClose={close}
                size="auto"
                title="Modal size auto"
            >
                <div className="flex gap-10">
                    <div>
                        <Image
                            src="https://img.freepik.com/fotos-gratis/foto-de-delicioso-hamburguer-isolado-no-fundo-branco_125540-3378.jpg"
                            alt="Norway"
                            className="max-w-sm mx-auto"
                        />

                        <h1 className="text-primaria mx-auto text-center font-bold text-wrap">
                            Norway Fjord Adventures
                        </h1>

                        <p className="text-primaria mx-auto text-center text-wrap max-w-96">
                            {' '}
                            Burguer com hambúrguer de 130g, queijo prato no pão
                            brioche tostadinho Atenção: Todas as nossas carnes
                            são ao Ponto.
                        </p>

                        <h2 className="text-primaria mx-auto text-center text-wrap text-4xl">
                            R$ 20,00
                        </h2>
                    </div>

                    <div className="flex flex-col items-center justify-center px-10">
                        <Textarea
                            className="text-primaria"
                            variant="filled"
                            label="Observação"
                            placeholder="Ex: Tirar a cebola, maionese à parte, ponto da carne etc"
                        />
                        <Group mt="xl">
                            <span className="text-roxo" onClick={decrementar}>
                                -
                            </span>

                            <h2 className="text-primaria w-8 h-8 flex justify-center items-center rounded-lg">
                                {contador}
                            </h2>
                            <span className="text-roxo" onClick={incrementar}>
                                +
                            </span>
                        </Group>

                        <OrdersPlaced />
                    </div>
                </div>
            </Modal>

            <Button
                color="#8234E9"
                fullWidth
                mt="md"
                radius="md"
                onClick={open}
            >
                Comprar
            </Button>
        </div>
    );
}
