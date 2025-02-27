import Link from 'next/link';
import Arrow from '../../Arrow/Arrow';

type props = {
    bg: string;
    text: string;
};

export default function GlobalBtn({ bg, text }: props) {
    return (
        <Link
            className={`bg-${bg} border border-${bg} px-8 py-3 transition-all duration-[500ms] ease-out font-medium text-${text} block w-fit group relative before:absolute before:left-0 before:top-0 before:w-0 before:h-full before:bg-${text} hover:border-${text} hover:before:w-full before:transition-all before:ease-out before:duration-[500ms] overflow-hidden`}
            href={'/'}
        >
            <div
                className={`relative flex items-center gap-4 group-hover:text-${bg}`}
            >
                <span>Shop New</span>
                <Arrow />
            </div>
        </Link>
    );
}
