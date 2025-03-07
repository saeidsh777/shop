import GlobalBtn from '@/Components/Modules/Btns/GlobalBtn/GlobalBtn';
import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
    return (
        <section className="container">
            <div className="grid md:grid-cols-6 lg:grid-cols-5 gap-6">
                <div className="md:col-span-3 flex md:static flex-col justify-between gap-4 mb-6 md:mb-0 ">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                        Find something new in every Zinzira collection
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3 max-w-[490px]">
                        <div>
                            <Image
                                src="/images/products/collection-thumb-2.jpg"
                                width={500}
                                height={500}
                                alt="image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/products/collection-thumb-3.jpg"
                                width={500}
                                height={500}
                                alt="image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <p className="max-w-[490px] text-gray-500">
                        We are passionate about modern & stylish cloth. We
                        specialize in offering a curated selection of modern &
                        stylish cloth that reflects elegance.
                    </p>
                    <GlobalBtn type={3} title="About us" href="/about" />
                </div>
                <div className="md:col-span-3 lg:col-span-2">
                    <Image
                        src="/images/products/collection-thumb.jpg"
                        width={500}
                        height={500}
                        alt="image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
