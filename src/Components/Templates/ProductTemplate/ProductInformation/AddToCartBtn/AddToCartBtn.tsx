'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { addToCart } from '@/redux/slices/cartSlice';
import { useEffect, useState } from 'react';
import { PiShoppingBagOpenFill } from 'react-icons/pi';

export default function AddToCartBtn({
    product,
}: {
    product: {
        id: number;
        image: string;
        price: number;
        title: string;
    };
}) {
    const dispatch = useAppDispatch();
    const [count, setCount] = useState<string>('1');
    const [isExist, setIsExist] = useState<boolean>(false);
    const cart = useAppSelector((state) => state.cart.products);

    useEffect(() => {
        if (cart.length) {
            cart.forEach((item) => {
                if (item.id === product.id) {
                    setIsExist(true);
                } else {
                    setIsExist(false);
                }
            });
        } else {
            setIsExist(false);
        }
    }, [cart]);
    return (
        <div className="flex items-center gap-6">
            <input
                className="p-3 text-sm border border-black/20 focus-visible:outline-none disabled:bg-gray-100 disabled:text-gray-400"
                type="number"
                value={count}
                onChange={(e) => {
                    if (e.target.value.trim().match(/^1[0-9]+|[1-9]+$/)) {
                        setCount(e.target.value);
                    }
                }}
                disabled={isExist ? true : false}
                min={1}
                max={100}
                step={1}
            />
            <button
                className="flex items-center justify-center gap-4 px-6 py-3 text-sm bg-black text-white hover:bg-black/80 transition disabled:bg-gray-500"
                type="button"
                aria-label="add_to_card"
                onClick={() =>
                    dispatch(addToCart({ ...product, count: +count }))
                }
                disabled={isExist ? true : false}
            >
                {isExist ? 'Added' : 'Add to Card'} <PiShoppingBagOpenFill />
            </button>
        </div>
    );
}
