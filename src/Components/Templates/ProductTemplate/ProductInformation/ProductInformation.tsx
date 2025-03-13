'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/useRedux';
import { useParams } from 'next/navigation';
import LoadingFetch from '@/Components/Modules/Loders/LoadingFetch/LoadingFetch';
import AddToCartBtn from './AddToCartBtn/AddToCartBtn';

import { FaStar } from 'react-icons/fa6';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { PiTimer } from 'react-icons/pi';
import { TbTruckDelivery } from 'react-icons/tb';

export default function ProductInformation() {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<
        | {
              category: string;
              description: string;
              id: number;
              image: string;
              price: number;
              rating: { rate: number; count: number };
              title: string;
          }
        | undefined
    >(undefined);
    const products = useAppSelector((state) => state.products.products);

    useEffect(() => {
        const findProduct = (
            products as {
                category: string;
                description: string;
                id: number;
                image: string;
                price: number;
                rating: { rate: number; count: number };
                title: string;
            }[]
        ).find((item) => item.id == +productId);
        setProduct(findProduct);
    }, [products]);

    return (
        <>
            {product ? (
                <section className="grid md:grid-cols-2 gap-4 items-center mb-12">
                    <div>
                        <div className="w-full h-[500px]">
                            <Image
                                className="object-contain aspect-square"
                                src={product.image}
                                width={500}
                                height={500}
                                alt="product"
                                priority
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-semibold">
                            {product.title}
                        </h2>
                        <p className="text-xl font-semibold">
                            $ {product.price} USD
                        </p>

                        <div className="text-sm flex items-center gap-4">
                            <p className="flex items-center gap-2">
                                <FaStar /> {product.rating.rate}
                            </p>
                            <span className="w-[1px] h-2 bg-black block"></span>
                            <p>Category: {product.category}</p>
                        </div>

                        <AddToCartBtn
                            product={{
                                id: product.id,
                                image: product.image,
                                price: product.price,
                                title: product.title,
                            }}
                        />

                        <div >
                            <p className="text-xl font-semibold mb-3">
                                Product Info
                            </p>
                            <p className='text-gray-500 line-clamp-4'>
                                {product.description}
                            </p>

                        </div>

                        <div className="flex items-center justify-between gap-6">
                            <div>
                                <RiInboxArchiveLine className="text-2xl mb-3" />
                                <small className="leading-5 block">
                                    Orders processed in
                                    <br /> 3-5 business days.
                                </small>
                            </div>
                            <div>
                                <PiTimer className="text-2xl mb-3" />
                                <small className="leading-5 block">
                                    Easy returns within 30
                                    <br /> days of purchase.
                                </small>
                            </div>
                            <div>
                                <TbTruckDelivery className="text-2xl mb-3" />
                                <small className="leading-5 block">
                                    Free shipping on all
                                    <br /> orders over $200
                                </small>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <LoadingFetch />
            )}
        </>
    );
}
