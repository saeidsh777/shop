import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul className="flex items-start gap-6">
                <li>
                    <Link href="/" className="text-sm">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-sm">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-sm">
                        Category
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-sm">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-sm">
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-sm">
                        FAQ
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-sm">
                        Journal
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
