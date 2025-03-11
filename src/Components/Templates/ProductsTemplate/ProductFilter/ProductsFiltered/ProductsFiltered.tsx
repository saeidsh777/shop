'use client';
import ProductCard from '@/Components/Modules/Cards/ProductCard/ProductCard';
import LoaderComponent from '@/Components/Modules/Loders/LoaderComponent/LoaderComponent';
import { useAppSelector } from '@/hooks/useRedux';
import React from 'react';

export default function ProductsFiltered() {
    const products = useAppSelector((state) => state.products);

    return (
        <section className="grid grid-cols-4 gap-x-4 gap-y-8 my-8">
            {products.status == 'loading' && (
                <div className="grid grid-cols-3 gap-4 col-span-4 my-8">
                    <LoaderComponent />
                    <LoaderComponent />
                    <LoaderComponent />
                </div>
            )}

            {!!products.productsFiltered.length &&
                (
                    products.productsFiltered as {
                        id: number;
                        title: string;
                        price: number;
                        image: string;
                    }[]
                ).map((category) => (
                    <ProductCard
                        key={category.id}
                        id={category.id}
                        title={category.title}
                        price={category.price}
                        image={category.image}
                    />
                ))}
        </section>
    );
}
