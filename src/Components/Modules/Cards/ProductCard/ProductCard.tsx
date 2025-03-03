import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    title: string;
    price: number;
    image: string;
    slug: string;
}

export default function ProductCard({ title, price, image, slug }: Props) {
    return (
        <div className="group">
            <div className="h-auto w-full mb-4 overflow-hidden">
                <Link href={`/products/${slug}`}>
                    <Image
                        className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
                        src={image}
                        width={500}
                        height={500}
                        alt="pruduct image"
                    />
                </Link>
            </div>
            <div>
                <Link
                    className="text-sm sm:text-lg md:text-xl tracking-[-.1px] line-clamp-1"
                    href={`/products/${slug}`}
                >
                    {title}
                </Link>
                <p className="text-sm sm:text-[16px]">
                    <span>$ </span> {price} <span> USD</span>
                </p>
            </div>
        </div>
    );
}
