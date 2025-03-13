'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import CartModal from '../../Modals/CartModal/CartModal';
import { showModal } from '@/redux/slices/modalSlice';
export default function CartIcon() {
    const cart = useAppSelector((state) => state.cart.products.length);
    const dispatch = useAppDispatch();

    return (
        <>
            <button
                className="text-2xl relative"
                type="button"
                aria-label="card"
                onClick={() => dispatch(showModal())}
            >
                <HiOutlineShoppingBag />
                <span className="absolute text-xs bg-white text-black rounded-full w-4 h-4 flex justify-center items-center -top-1 -right-1 border-gray-500 shadow-md border">
                    {cart}
                </span>
            </button>
            <CartModal />
        </>
    );
}
