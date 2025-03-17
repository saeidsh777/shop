'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import Link from 'next/link';
import { RiUser3Line } from 'react-icons/ri';
import { IoIosLogOut } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { logout } from '@/redux/slices/authSlice';
import { BiLogIn } from 'react-icons/bi';
export default function UserIcon() {
    const login = useAppSelector((state) => state.auth.login);
    const dispatch = useAppDispatch();

    return (
        <div className="group relative">
            {login ? (
                <button
                    className="text-2xl flex"
                    type="button"
                    aria-label="profile"
                >
                    <RiUser3Line />
                </button>
            ) : (
                <Link className="flex" href={'/auth/signin'}>
                    <button
                        className="text-2xl"
                        type="button"
                        aria-label="profile"
                    >
                        <BiLogIn />
                    </button>
                </Link>
            )}

            {login && (
                <div className="absolute top-[100%] left-0 pt-5">
                    <ul className="bg-white p-2 text-black shadow-md opacity-0 invisible transition group-hover:visible group-hover:opacity-100">
                        <li>
                            <Link
                                className="flex items-center gap-2 px-2 py-1"
                                href={'/profile'}
                            >
                                <CgProfile />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li
                            className="flex items-center gap-2 px-2 py-1 cursor-pointer"
                            onClick={() => dispatch(logout())}
                        >
                            <IoIosLogOut />
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
