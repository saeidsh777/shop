'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { categoriesType, setCategory } from '@/redux/slices/categoriesSlice';
import { setProducts } from '@/redux/slices/productsSlice';

export default function CategoryFilter() {
    const categories: categoriesType = useAppSelector(
        (state) => state.categories
    );
    const categoryState = useAppSelector((state) => state.categories.category);

    const dispatch = useAppDispatch();

    return (
        <select
            className="bg-white border border-black/20 p-2 font-sans"
            value={categoryState}
            onChange={(e) => {
                dispatch(setCategory(e.target.value));
                dispatch(setProducts(e.target.value));
            }}
        >
            <option value="-1">All</option>

            {categories.status === 'success' &&
                categories.categories.length &&
                (categories.categories as { id: number; name: string }[]).map(
                    (category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    )
                )}
        </select>
    );
}
