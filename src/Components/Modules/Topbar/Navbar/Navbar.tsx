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
            } lg:bg-transparent lg:block lg:translate-y-0 lg:static w-full lg:w-fit lg:visible lg:opacity-100 ${
                isShow
                    ? 'opacity-100 visible transition-all translate-y-0'
                    : 'opacity-0 invisible transition-all translate-y-4'
            } lg:block`}
        >
            <ul className="flex flex-col lg:flex-row lg:items-start gap-6 container py-8 lg:py-0">
                <li>
                    <Link href="/" className="text-3xl lg:text-sm">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/products" className="text-3xl lg:text-sm">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-3xl lg:text-sm">
                        Category
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-3xl lg:text-sm">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-3xl lg:text-sm">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
