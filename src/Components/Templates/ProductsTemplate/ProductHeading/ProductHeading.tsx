import React from 'react';
import PriceFilter from '../ProductFilter/PriceFilter/PriceFilter';

export default function ProductHeading() {
    return (
        <section className="flex justify-between items-center">
            <h1>Products</h1>
            <PriceFilter />
        </section>
    );
}
