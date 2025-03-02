'use client';
import { useAppSelector } from '@/hooks/useRedux';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const isShow = useAppSelector((state) => state.menu.value);
    const pathName = usePathname();

    return (
        <nav
            className={`absolute top-full left-0 ${
                pathName === '/' ? 'bg-black' : 'bg-white'
            } md:bg-transparent md:block md:translate-y-0 md:static w-full md:w-fit md:visible md:opacity-100 ${
                isShow
                    ? 'opacity-100 visible transition-all translate-y-0'
                    : 'opacity-0 invisible transition-all translate-y-4'
            } md:block`}
        >
            <ul className="flex flex-col md:flex-row md:items-start gap-6 container py-8 md:py-0">
                <li>
                    <Link href="/" className="text-3xl md:text-sm">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/shop" className="text-3xl md:text-sm">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-3xl md:text-sm">
                        Category
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-3xl md:text-sm">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-3xl md:text-sm">
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-3xl md:text-sm">
                        FAQ
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-3xl md:text-sm">
                        Journal
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
