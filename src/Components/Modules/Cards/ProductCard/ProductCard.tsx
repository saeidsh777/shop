import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    title: string;
    price: number;
    image: string;
    id: number;
}

export default function ProductCard({ title, price, image, id }: Props) {
    return (
        <div className="group">
            <div className="h-[20rem] w-full mb-4">
                <Link href={`/products/${id}`}>
                    <Image
                        className="h-full w-full object-contain group-hover:scale-105 transition-all duration-500"
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
                    href={`/products/${id}`}
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
