'use client';

import { useAppSelector } from '@/hooks/useRedux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const login = useAppSelector((state) => state.auth.login);
    const router = useRouter();

    useEffect(() => {
        if (!login) {
            router.push('/auth/signin');
        }
    }, [login]);
    return (
        <main className="main">
            <div className="container">
                <iframe
                    src="https://saeid-shojaei.vercel.app/"
                    className="w-full h-svh border-8 p-2 border-gray-500 mb-8"
                ></iframe>
            </div>
        </main>
    );
}
