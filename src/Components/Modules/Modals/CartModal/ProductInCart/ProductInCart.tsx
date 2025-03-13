import { useAppDispatch } from '@/hooks/useRedux';
import { changeCount, removeProduct } from '@/redux/slices/cartSlice';
import Image from 'next/image';
import React from 'react';

export default function ProductInCart({
    id,
    image,
    price,
    title,
    count,
}: {
    id: number;
    image: string;
    price: number;
    title: string;
    count: number;
}) {
    const dispatch = useAppDispatch();

    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-8">
                <div className="w-full h-[12rem] overflow-hidden sm:max-w-44">
                    <Image
                        className="w-full h-full object-contain"
                        src={image}
                        width={500}
                        height={500}
                        alt="product"
                    />
                </div>
                <div className="w-full">
                    <div className="mb-6">
                        <span className="text-2xl font-semibold line-clamp-1">
                            {title}
                        </span>
                    </div>
                    <div>
                        <div className="mb-4 flex items-center gap-4">
                            <input
                                className="p-2 text-sm border border-black/20 focus-visible:outline-none disabled:bg-gray-100 disabled:text-gray-400"
                                type="number"
                                value={count}
                                onChange={(e) => {
                                    if (
                                        e.target.value
                                            .trim()
                                            .match(/^1[0-9]+|[1-9]+$/)
                                    ) {
                                        dispatch(
                                            changeCount({
                                                id,
                                                count: e.target.value,
                                            })
                                        );
                                    }
                                }}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <div className="">
                                <span>$ {price} USD </span>
                                <sup>{`( $ ${+price * +count})`}</sup>
                            </div>
                        </div>
                        <div>
                            <button
                                className="text-red-600 font-medium"
                                onClick={() =>
                                    dispatch(
                                        removeProduct({
                                            id,
                                            price,
                                            count,
                                        })
                                    )
                                }
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
