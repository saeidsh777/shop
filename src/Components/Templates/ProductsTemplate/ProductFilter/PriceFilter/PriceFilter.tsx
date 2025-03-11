'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { setSort } from '@/redux/slices/productsSlice';

export default function PriceFilter() {
    const sortValue = useAppSelector((state) => state.products.sort);
    const dispatch = useAppDispatch();
    return (
        <select
            className="bg-white border border-black/20 p-2 font-sans"
            value={sortValue}
            onChange={(e) => dispatch(setSort(e.target.value))}
        >
            <option value="-1">Default</option>
            <option value="low">Low</option>
            <option value="high">High</option>
        </select>
    );
}
