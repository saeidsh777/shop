'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import SigninForm from './SigninForm/SigninForm';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/useRedux';
export default function SigninTemplate() {
    const login = useAppSelector((state) => state.auth.login);
    const router = useRouter();
    useEffect(() => {
        if (login) {
            router.back();
        }
    }, [login]);
    return (
        <div>
            <div className="flex items-center justify-center min-h-svh pt-12">
                <div className="w-full flex flex-col justify-center items-center gap-8">
                    <h2 className="text-5xl font-semibold text-center">
                        Sign in
                    </h2>
                    <div className="w-full max-w-md">
                        <div>
                            <SigninForm />

                            <div className="flex items-center justify-between mt-4">
                                <small>Don&apos;t have an account?</small>
                                <Link href="/auth/signup" className="underline">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
