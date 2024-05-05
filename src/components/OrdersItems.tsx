import { Image, Paper } from '@mantine/core';

export default function OrdersItems() {
    return (
        <Paper shadow="xs" p="xl">
            <div>
                <Image
                    src="https://img.freepik.com/fotos-gratis/foto-de-delicioso-hamburguer-isolado-no-fundo-branco_125540-3378.jpg"
                    alt="Norway"
                    sizes="10"
                    className="mx-auto"
                />

                <h1 className="text-primaria mx-auto text-center font-bold text-wrap">
                    Norway Fjord Adventures
                </h1>

                <p className="text-primaria mx-auto text-center text-wrap max-w-96">
                    {' '}
                    Burguer com hambúrguer de 130g, queijo prato no pão brioche
                    tostadinho Atenção: Todas as nossas carnes são ao Ponto.
                </p>

                <h2 className="text-primaria mx-auto text-center text-wrap text-4xl">
                    R$ 20,00
                </h2>
            </div>
        </Paper>
    );
}
