'use client';

import RegisterLogin from './RegisterLogin';

export default function Register() {
    return (
        <div className="bg-current: bg-primaria h-lvh flex justify-center">
            <div className="w-3/4  h-full flex items-center">
                <div className="flex items-center justify-center h-full w-2/4">
                    <h1>Faça seu cadastro</h1>
                </div>
                <div className=" w-2/4 flex justify-center">
                    <div className="py-12 rounded-xl bg-secundaria w-fit px-16">
                        <RegisterLogin />
                    </div>
                </div>
            </div>
        </div>
    );
}
