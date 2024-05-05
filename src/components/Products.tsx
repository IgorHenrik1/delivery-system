import CardProducts from './CardProducts';

export default function Products() {
    return (
        <div className="bg-current: bg-terciaria px-6 rounded-lg pb-4">
            <div>
                <h1 className="text-2xl text-branco font-bold py-3">
                    Produtos
                </h1>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
            </div>
        </div>
    );
}
