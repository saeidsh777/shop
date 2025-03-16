'use client';

import { useAppDispatch } from '@/hooks/useRedux';
import { login } from '@/redux/slices/authSlice';
import { authUser } from '@/utils/auth/auth';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SigninForm() {
    const [form, setForm] = useState<{ email: string; password: string }>({
        email: 'admin@gmail.com',
        password: 'admin',
    });
    const router = useRouter();
    const dispatch = useAppDispatch();

    const onChange = (data: { [key: string]: string }) => {
        setForm((prv) => {
            return {
                ...prv,
                ...data,
            };
        });
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            authUser.email === form.email &&
            authUser.password === form.password
        ) {
            dispatch(login(authUser));
            router.push('/');
        } else {
            setForm({
                email: 'admin@gmail.com',
                password: 'admin',
            });
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="mb-8">
                <label className="text-gray-600 mb-2 block" htmlFor="email">
                    Email
                </label>
                <input
                    className="border border-gray-300 p-4 block focus-visible:border-black transition outline-none w-full"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => onChange({ email: e.target.value })}
                />
            </div>
            <div className="mb-8">
                <label className="text-gray-600 mb-2 block" htmlFor="password">
                    Password
                </label>
                <input
                    className="border border-gray-300 p-4 block focus-visible:border-black transition outline-none w-full"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={(e) => onChange({ password: e.target.value })}
                />
            </div>
            <button type="submit" className="bg-black text-white py-2 w-full">
                Login
            </button>
        </form>
    );
}
