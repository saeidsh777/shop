import ProductCard from '@/Components/Modules/Cards/ProductCard/ProductCard';
import ProductLoder from '@/Components/Modules/Loders/ProductLoder/ProductLoder';
import SectionTitle from '@/Components/Modules/Titels/SectionTitle/SectionTitle';

export default async function BestSellers() {
    try {
        const res = await fetch(
            'https://api.escuelajs.co/api/v1/products?offset=0&limit=8'
        );

        const products = await res.json();
        interface Product {
            id: string;
            title: string;
            price: number;
            images: string[];
            slug: string;
        }

        return (
            <section className="container">
                <div className="mb-12">
                    <SectionTitle title="Best Sellers" />
                </div>
                <div className="grid grid-cols-1 auto-rows-auto sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {products.map((product: Product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.images[0]}
                            slug={product.slug}
                        />
                    ))}
                </div>
            </section>
        );
    } catch (error) {
        console.log((error as Error).message);
        return <ProductLoder title="Best Sellers" />;
    }
}
