import Arrow from '@/Components/Modules/Arrow/Arrow';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductSuggestion() {
    return (
        <div className="group">
            <div className="w-48 h-48 bg-white overflow-hidden">
                <Link href={'/'}>
                    <Image
                        className="w-full h-full transition-all group-hover:scale-110 object-cover"
                        src="/images/home/shirt.png"
                        width={500}
                        height={500}
                        alt="product image"
                        priority
                    />
                </Link>
            </div>
            <div className="flex items-center justify-between mt-2">
                <span className="text-xs">Explore New Arrivals</span>
                <Arrow />
            </div>
        </div>
    );
}
