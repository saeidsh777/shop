import React from 'react';
import ProductInformation from './ProductInformation/ProductInformation';

export default function ProductTemplate() {
    return (
        <main className="main">
            <div className="container mb-16">
                <ProductInformation />

                <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">
                        Product Overview
                    </h2>
                    <p className="mb-4 text-zinc-600 text-justify">
                        Elevate your wardrobe with the Zinzira Classic Denim
                        Jacket, a timeless piece designed for versatility and
                        style. Crafted from premium, durable denim, this jacket
                        offers a perfect blend of comfort and longevity. Its
                        tailored fit and classic cut ensure a flattering
                        silhouette, while the versatile design makes it ideal
                        for layering over any outfit. Featuring stylish details
                        like button closures, adjustable cuffs, and multiple
                        pockets, this jacket is both functional and fashionable.
                    </p>
                    <ul className="list-disc ms-8 flex flex-col gap-2">
                        <li>
                            Made from premium, high-quality denim known for its
                            durability and comfort
                        </li>
                        <li>
                            Features a tailored fit with a classic, versatile
                            cut that flatters various body shapes
                        </li>
                        <li>
                            Designed for easy layering, making it a versatile
                            addition to any wardrobe
                        </li>
                        <li>
                            Perfect for a wide range of occasions, from casual
                            day outings to semi-formal gatherings
                        </li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold mb-4">
                        Care Instructions
                    </h2>
                    <p className="mb-4 text-zinc-600 text-justify">
                        To keep your Zinzira Classic Denim Jacket looking its
                        best and ensure long-lasting wear, follow these care
                        instructions. Proper care will maintain the jacket’s
                        color, fit, and quality over time. By following these
                        care instructions, you’ll help ensure that your Zinzira
                        Classic Denim Jacket remains in excellent condition and
                        continues to look great for years to come.
                    </p>
                    <ul className="list-disc ms-8 flex flex-col gap-2">
                        <li>
                            Wash in cold water using a gentle cycle to preserve
                            the fabric’s color and texture.
                        </li>
                        <li>
                            Use a mild detergent free of bleach and harsh
                            chemicals to avoid damaging the fabric or affecting
                            the color.
                        </li>
                        <li>
                            Use steam to help remove wrinkles without direct
                            contact with the fabric.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
