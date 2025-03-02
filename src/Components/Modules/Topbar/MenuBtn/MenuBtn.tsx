'use client';
import { show } from '@/redux/slices/showMenuSlice';
import styles from './MenuBtn.module.css';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { usePathname } from 'next/navigation';

export default function MenuBtn() {
    const pathName = usePathname();
    const isShow = useAppSelector((state) => state.menu.value);
    const dispatch = useAppDispatch();

    return (
        <div
            className="flex flex-col gap-2 cursor-pointer md:hidden"
            onClick={() => dispatch(show())}
        >
            <div
                className={`${styles.line} ${isShow && styles.down} ${
                    pathName === '/' ? 'bg-white' : 'bg-black'
                }`}
            ></div>
            <div
                className={`${styles.line} ${
                    isShow && 'invisible opacity-0 scale-0'
                } ${pathName === '/' ? 'bg-white' : 'bg-black'}`}
            ></div>
            <div
                className={`${styles.line} ${isShow && styles.up} ${
                    pathName === '/' ? 'bg-white' : 'bg-black'
                }`}
            ></div>
        </div>
    );
}
