import { Avatar, Notification } from '@mantine/core';
export default function Sidebar() {
    return (
        <div className="bg-current: bg-terciaria w-fit px-4  flex flex-col gap-3 mt-6 rounded-lg">
            <div className="max-w-72">
                <Avatar
                    className="mx-auto mt-6 mb-10"
                    variant="filled"
                    size="150"
                    src="https://storage.googleapis.com/udois-261822.appspot.com/imagens-templates/thumbnail_1201132022082263039a3958485.webp"
                />

                <h1 className="text-branco text-xl font-bold text-wrap">
                    Faustinno Hamburgueria Artesanal
                </h1>
                <h3 className="text-green-400 text-lg font-semibold">Aberto</h3>
                <p className="text-branco">30 - 40 min</p>
                <p className="text-branco">Entrega a partir de R$3,00</p>

                <h1 className="my-10 text-branco">Para mais informações</h1>

                <Notification
                    color="#8234E9"
                    title="Ative as notificações"
                    className="mt-9 w-full mb-20"
                >
                    You are now obligated to give a star to Mantine project on
                    GitHub
                </Notification>
            </div>
        </div>
    );
}
