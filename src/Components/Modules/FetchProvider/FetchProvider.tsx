'use client';
import { useAppDispatch } from '@/hooks/useRedux';
import { authChecker } from '@/redux/slices/authSlice';
import { getProducts } from '@/redux/slices/productsSlice';
import React, { useEffect } from 'react';

export default function FetchProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(authChecker());
    }, []);
    return <div>{children}</div>;
}
