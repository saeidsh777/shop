import SectionTitle from '@/Components/Modules/Titels/SectionTitle/SectionTitle';
import styles from './Brands.module.css';
import Image from 'next/image';

export default function Brands() {
    return (
        <section>
            <SectionTitle title="Trusted Partners" />
            <p className="text-center my-3 text-gray-500 text-sm md:text-xl">
                Explore our selection of top brands known for quality & style.
            </p>
            <div className="overflow-hidden relative h-16">
                <div
                    className={`flex items-center justify-between absolute w-full gap-4 px-2 lg:px-4 xl:px-8 ${styles.move}`}
                >
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-1.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-2.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-3.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-4.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-5.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-6.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                </div>
                <div
                    className={`flex items-center justify-between absolute w-full gap-4 px-2 lg:px-4 xl:px-8 ${styles.move1}`}
                >
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-1.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-2.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-3.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-4.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-5.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                    <div className="w-40 h-16 text-center">
                        <Image
                            className="w-full h-full"
                            src="/images/brands/brand-6.svg"
                            width={500}
                            height={500}
                            alt="brand image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
