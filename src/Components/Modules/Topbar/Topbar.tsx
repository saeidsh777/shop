'use client';
import Logo from '../Logo/Logo';
import Navbar from './Navbar/Navbar';
import SearchIcon from './SearchIcon/SearchIcon';
import UserIcon from './UserIcon/UserIcon';
import CartIcon from './CartIcon/CartIcon';
import { usePathname } from 'next/navigation';
import Ad from './Ad/Ad';

export default function Topbar() {
    const pathName = usePathname();

    return (
        <div
            className={`border-b border-white/30 fixed w-full top-0 left-0 ${
                pathName == '/' && 'text-white'
            }`}
        >
            <Ad/>
            <div className="container py-4">
                <div className="flex items-center justify-between">
                    <Logo />
                    <Navbar />
                    <div className="flex items-center gap-6">
                        <SearchIcon />
                        <UserIcon />
                        <CartIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
