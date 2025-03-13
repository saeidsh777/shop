'use client';
import { MdClose } from 'react-icons/md';
import ProductInCart from './ProductInCart/ProductInCart';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { showModal } from '@/redux/slices/modalSlice';

export default function CartModal() {
    const dispatch = useAppDispatch();
    const modal = useAppSelector((state) => state.modal.value);
    const cart = useAppSelector((state) => state.cart.products);
    const totalPrice = useAppSelector((state) => state.cart.totalPrice);

    return (
        <section
            className={`fixed top-0 left-0 w-svw h-svh ${
                modal ? 'flex justify-center items-center' : 'hidden'
            }`}
        >
            <div
                className="absolute w-full h-full top-0 left-0 bg-black/60"
                onClick={() => dispatch(showModal())}
            ></div>
            <div className="bg-white text-black p-6 relative w-full h-fit max-h-svh max-w-[45rem] mx-4 overflow-y-scroll">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-lg md:text-4xl font-semibold">
                        Your Cart
                    </h2>
                    <MdClose
                        className="text-lg md:text-4xl"
                        onClick={() => dispatch(showModal())}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    {!!cart.length ? (
                        cart.map(
                            (item: {
                                id: number;
                                image: string;
                                price: number;
                                title: string;
                                count: number;
                            }) => <ProductInCart key={item.id} {...item} />
                        )
                    ) : (
                        <div className="p-4 bg-gray-100 ">
                            <p className="text-center font-semibold text-gray-500">
                                No items found.
                            </p>
                        </div>
                    )}
                </div>
                <hr className="my-8" />
                <div>
                    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between text-2xl font-semibold mb-6">
                        <span>Subtotal</span>
                        <span>$ {totalPrice.toFixed(2)} USD</span>
                    </div>
                    <button
                        className="w-full px-6 py-3 text-sm bg-black text-white hover:bg-black/80 transition disabled:bg-gray-500"
                        type="button"
                        aria-label="add_to_card"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
}
