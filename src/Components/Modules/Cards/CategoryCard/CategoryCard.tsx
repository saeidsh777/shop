import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

export interface props {
    name: string;
    image: string;
    slug: string;
}

export default function CategoryCard({ name, image, slug }: props) {
    return (
        <Link
            href={`/categoreis/${slug}`}
            className="flex flex-col h-full gap-2"
        >
            <div className="w-full h-full overflow-hidden">
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt="product image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex items-center justify-between">
                <p className="text-xl">{name}</p>
                <MdArrowOutward className="text-2xl" />
            </div>
        </Link>
    );
}
