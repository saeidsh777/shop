'use client';
import React, { useState } from 'react';
import { IoMdArrowForward } from 'react-icons/io';

export default function EmailInput() {
    const [value, setValue] = useState('');
    return (
        <div className="w-full bg-zinc-200/50 relative">
            <input
                type="email"
                name="email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full h-14 bg-transparent px-6 py-2 focus-visible:outline-black focus-visible:outline-1 focus-visible:outline"
                placeholder="Email Address"
            />
            <span className="bg-black text-white flex justify-center items-center w-12 h-12 absolute right-1 top-1">
                <IoMdArrowForward />
            </span>
        </div>
    );
}
