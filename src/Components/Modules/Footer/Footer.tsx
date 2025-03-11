import Link from 'next/link';
import EmailInput from './EmailInput/EmailInput';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTiktok,
    FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="pt-20 pb-5 bg-zinc-100">
            <div className="container">
                <div className="grid sm:grid-cols-3">
                    <div>
                        <h3 className="font-bold mb-4">PAGES</h3>
                        <nav>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-xs font-medium "
                                        href={'/'}
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-xs font-medium "
                                        href={'/'}
                                    >
                                        SHOP
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-xs font-medium "
                                        href={'/'}
                                    >
                                        CATEGORY
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-xs font-medium "
                                        href={'/about'}
                                    >
                                        ABOUT
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-xs font-medium "
                                        href={'/'}
                                    >
                                        BLOG
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-col items-center col-span-2">
                        <h3 className="font-bold mb-4">
                            10% OFF YOUR FIRST PURCHASE
                        </h3>

                        <p className="text-sm mb-6">
                            Special offers for subscribers. Don&apos;t miss out
                            on future offers, new arrivals, & expert fashion
                            tips.
                        </p>
                        <EmailInput />
                        <div className="flex items-center gap-2 mt-6">
                            <Link
                                className="group text-3xl text-zinc-500 hover:text-black"
                                href={'/'}
                            >
                                <FaFacebook className="group-hover:scale-110 transition-all" />
                            </Link>
                            <Link
                                className="group text-3xl text-zinc-500 hover:text-black"
                                href={'/'}
                            >
                                <FaInstagram className="group-hover:scale-110 transition-all" />
                            </Link>
                            <Link
                                className="group text-3xl text-zinc-500 hover:text-black"
                                href={'/'}
                            >
                                <FaYoutube className="group-hover:scale-110 transition-all" />
                            </Link>
                            <Link
                                className="group text-3xl text-zinc-500 hover:text-black"
                                href={'/'}
                            >
                                <FaTiktok className="group-hover:scale-110 transition-all" />
                            </Link>
                            <Link
                                className="group text-3xl text-zinc-500 hover:text-black"
                                href={'/'}
                            >
                                <FaLinkedin className="group-hover:scale-110 transition-all" />
                            </Link>
                            <Link
                                className="group text-3xl text-zinc-500 hover:text-black"
                                href={'/'}
                            >
                                <FaXTwitter className="group-hover:scale-110 transition-all" />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='pt-4 text-sm text-center'>
                    <p>© 2024 Zinzira. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
