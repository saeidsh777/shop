'use client';
import Logo from '../Logo/Logo';
import Navbar from './Navbar/Navbar';
import SearchIcon from './SearchIcon/SearchIcon';
import UserIcon from './UserIcon/UserIcon';
import CartIcon from './CartIcon/CartIcon';
import { usePathname } from 'next/navigation';
import Ad from './Ad/Ad';
import MenuBtn from './MenuBtn/MenuBtn';
import { useAppSelector } from '@/hooks/useRedux';
import { useEffect, useRef } from 'react';

export default function Topbar() {
    const pathName = usePathname();
    const isShow = useAppSelector((state) => state.menu.value);
    const divElm = useRef<HTMLDivElement | null>(null);
    let opacity: number = 0;

    const scrollEvent = () => {
        const scroll: number = Math.floor(window.scrollY);
        if (divElm.current) {
            divElm.current.style.background = `rgba(0, 0, 0)`;
            if (scroll <= 100) {
                opacity = +(scroll * 0.01).toFixed(2);
                divElm.current.style.background = `rgba(0, 0, 0, ${opacity}
                )`;
            } else {
                opacity = 100;
                divElm.current.style.background = 'rgba(0, 0, 0)';
            }
        }
    };

    useEffect(() => {
        if (pathName == '/') {
            if (!isShow) {
                if (divElm.current) {
                    divElm.current.style.background = 'rgba(0, 0, 0, 0)';
                }
                window.addEventListener('scroll', scrollEvent);
            } else {
                if (divElm.current) {
                    if (isShow) {
                        divElm.current.style.background = `black`;
                    }
                }
            }
        } else {
            if (divElm.current) {
                if (pathName == '/') {
                    divElm.current.style.background = `rgba(0, 0, 0) !important`;
                } else {
                    divElm.current.style.background = 'white';
                }
            }
        }

        return () => removeEventListener('scroll', scrollEvent);
    }, [isShow, pathName]);

    return (
        <div
            ref={divElm}
            className={`border-b border-white/30 fixed w-full top-0 left-0 z-50 ${
                isShow
                    ? 'bg-black transition-all'
                    : 'bg-transparent transition-all'
            } ${pathName == '/' ? 'text-white' : 'text-black'}`}
            style={{ background: isShow ? 'black' : 'rgba(0, 0, 0, 0)' }}
        >
            <Ad />
            <div className="container py-4">
                <div className="flex items-center justify-between">
                    <Logo />
                    <Navbar />
                    <div className="flex items-center gap-6">
                        <SearchIcon />
                        <UserIcon />
                        <CartIcon />
                        <MenuBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}
