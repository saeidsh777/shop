import { HiOutlineShoppingBag } from 'react-icons/hi2';
export default function CartIcon() {
    return (
        <button className="text-2xl relative" type="button" aria-label="card">
            <HiOutlineShoppingBag />
            <span className="absolute text-xs bg-white text-black rounded-full w-4 h-4 flex justify-center items-center -top-1 -right-1">
                0
            </span>
        </button>
    );
}
