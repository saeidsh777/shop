import Link from 'next/link';
import Arrow from '../../Arrow/Arrow';

interface color {
    type: 1 | 2 | 3;
    href: string;
    title:string;
}

const colorLogics: Record<
    1 | 2 | 3,
    {
        b: string;
        bg: string;
        t: string;
        ht: string;
        bbg: string;
        hb: string;
        ght: string;
    }
> = {
    1: {
        b: 'border-white',
        bg: 'bg-white',
        t: 'text-black',
        ht: 'hover:text-white',
        bbg: 'before:bg-black',
        hb: 'hover:border-black',
        ght: 'group-hover:text-white',
    },
    2: {
        b: 'border-white',
        bg: 'transparent',
        t: 'text-white',
        ht: 'hover:text-white',
        hb: 'hover:border-white',
        bbg: 'before:bg-white',
        ght: 'group-hover:text-black',
    },
    3: {
        b: 'border-black',
        bg: 'bg-black',
        t: 'text-white',
        ht: 'hover:text-white',
        bbg: 'before:bg-white/20',
        hb: 'hover:border-white/20',
        ght: 'group-hover:text-white',
    },
};

export default function GlobalBtn({ type, href,title }: color) {
    return (
        <Link
            className={`group border ${colorLogics[type].b} ${colorLogics[type].bg} ${colorLogics[type].t} ${colorLogics[type].bbg} ${colorLogics[type].hb} ${colorLogics[type].ht} relative px-8 py-3 transition-all duration-[500ms] ease-out font-medium block w-fit before:absolute before:block before:content-[''] before:left-0 before:top-0 before:w-0 before:h-full hover:before:w-full before:transition-all before:ease-out before:duration-[500ms] overflow-hidden`}
            href={href}
        >
            <div
                className={`relative flex items-center gap-4 ${colorLogics[type].ght}`}
            >
                <span>{title}</span>
                <Arrow />
            </div>
        </Link>
    );
}
