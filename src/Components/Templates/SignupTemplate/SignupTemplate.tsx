import Link from 'next/link';
import React from 'react';

export default function SignupTemplate() {
    const handleSubmit = async (formData: FormData) => {
        'use server';
        const name = formData.get('email');
        console.log(name);
    };

    return (
        <div>
            <div className="flex items-center justify-center min-h-svh pt-12">
                <div className="w-full flex flex-col justify-center items-center gap-8">
                    <h2 className="text-5xl font-semibold text-center">
                        Sign up
                    </h2>
                    <div className="w-full max-w-md">
                        <div>
                            <form action={handleSubmit}>
                                <div className="mb-8">
                                    <label
                                        className="text-gray-600 mb-2 block"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="border border-gray-300 p-4 block focus-visible:border-black transition outline-none w-full"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label
                                        className="text-gray-600 mb-2 block"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="border border-gray-300 p-4 block focus-visible:border-black transition outline-none w-full"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-black text-white py-2 w-full"
                                >
                                    Login
                                </button>
                            </form>

                            <div className="flex items-center justify-between mt-4">
                                <small>I have an account.</small>
                                <Link href="/auth/signin" className="underline">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
