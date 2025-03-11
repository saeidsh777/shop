import React from 'react';
import ProductHeading from './ProductHeading/ProductHeading';
import ProductsFiltered from './ProductFilter/ProductsFiltered/ProductsFiltered';

export default function ProductsTemplate() {
    return (
        <main className="main container">
            <ProductHeading />
            <ProductsFiltered />
        </main>
    );
}
