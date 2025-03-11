'use client';
import GlobalBtn from '@/Components/Modules/Btns/GlobalBtn/GlobalBtn';
import Image from 'next/image';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function VisitOur() {
    return (
        <section>
            <div className="container">
                <div className="relative">
                    <div className="mb-8">
                        <h2 className="text-5xl font-semibold">
                            Visit our stores
                        </h2>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className="grid md:grid-cols-2 gap-4 p-4 md:p-2 bg-gray-100">
                                <div className="flex flex-col justify-center gap-6 md:px-12">
                                    <h2 className="text-xl lg:text-3xl font-bold">
                                        Zinzira Store, CA
                                    </h2>
                                    <p>
                                        2715 Ash Dr. San Jose, South Dakota
                                        83475
                                    </p>
                                    <p className="text-xl">
                                        info@zinzirastore.com
                                    </p>
                                    <span>+(313) 456-535-732</span>
                                    <GlobalBtn
                                        type={4}
                                        href="/products"
                                        title="Visit Store"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <Image
                                            className="w-full h-full"
                                            src={
                                                '/images/brands/store-thumb-4.jpg'
                                            }
                                            width={500}
                                            height={500}
                                            alt="product"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            className="w-full h-full"
                                            src={
                                                '/images/brands/store-thumb-5.jpg'
                                            }
                                            width={500}
                                            height={500}
                                            alt="product"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid md:grid-cols-2 gap-4 p-4 md:p-2 bg-gray-100">
                                <div className="flex flex-col justify-center gap-6 md:px-12">
                                    <h2 className="text-xl lg:text-3xl font-bold">
                                        Zinzira Store, CA
                                    </h2>
                                    <p>
                                        2715 Ash Dr. San Jose, South Dakota
                                        83475
                                    </p>
                                    <p className="text-xl">
                                        info@zinzirastore.com
                                    </p>
                                    <span>+(313) 456-535-732</span>
                                    <GlobalBtn
                                        type={4}
                                        href="/products"
                                        title="Visit Store"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <Image
                                            className="w-full h-full"
                                            src={
                                                '/images/brands/store-thumb-4.jpg'
                                            }
                                            width={500}
                                            height={500}
                                            alt="product"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            className="w-full h-full"
                                            src={
                                                '/images/brands/store-thumb-5.jpg'
                                            }
                                            width={500}
                                            height={500}
                                            alt="product"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid md:grid-cols-2 gap-4 p-4 md:p-2 bg-gray-100">
                                <div className="flex flex-col justify-center gap-6 md:px-12">
                                    <h2 className="text-xl lg:text-3xl font-bold">
                                        Zinzira Store, CA
                                    </h2>
                                    <p>
                                        2715 Ash Dr. San Jose, South Dakota
                                        83475
                                    </p>
                                    <p className="text-xl">
                                        info@zinzirastore.com
                                    </p>
                                    <span>+(313) 456-535-732</span>
                                    <GlobalBtn
                                        type={4}
                                        href="/products"
                                        title="Visit Store"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <Image
                                            className="w-full h-full"
                                            src={
                                                '/images/brands/store-thumb-4.jpg'
                                            }
                                            width={500}
                                            height={500}
                                            alt="product"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            className="w-full h-full"
                                            src={
                                                '/images/brands/store-thumb-5.jpg'
                                            }
                                            width={500}
                                            height={500}
                                            alt="product"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid md:grid-cols-2 gap-4 p-4 md:p-2 bg-gray-100">
                                <div className="flex flex-col justify-center gap-6 md:px-12">
                                    <h2 className="text-xl lg:text-3xl font-bold">
                                        Zinzira Store, CA
                                    </h2>
                                    <p>
                                        2715 Ash Dr. San Jose, South Dakota
                                        83475
                                    </p>
                                    <p className="text-xl">
                                        info@zinzirastore.com
                                    </p>
                                    <span>+(313) 456-535-732</span>
                                    <GlobalBtn
                                        type={4}
                                        href="/products"
                                        title="Visit Store"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <Image
                                            className="w-full h-full"
                                            src={
                                                '/images/brands/store-thumb-4.jpg'
                                            }
                                            width={500}
                                            height={500}
                                            alt="product"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            className="w-full h-full"
                                            src={
                                                '/images/brands/store-thumb-5.jpg'
                                            }
                                            width={500}
                                            height={500}
                                            alt="product"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid md:grid-cols-2 gap-4 p-4 md:p-2 bg-gray-100">
                                <div className="flex flex-col justify-center gap-6 md:px-12">
                                    <h2 className="text-xl lg:text-3xl font-bold">
                                        Zinzira Store, CA
                                    </h2>
                                    <p>
                                        2715 Ash Dr. San Jose, South Dakota
                                        83475
                                    </p>
                                    <p className="text-xl">
                                        info@zinzirastore.com
                                    </p>
                                    <span>+(313) 456-535-732</span>
                                    <GlobalBtn
                                        type={4}
                                        href="/products"
                                        title="Visit Store"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <Image
                                            className="w-full h-full"
                                            src={
                                                '/images/brands/store-thumb-4.jpg'
                                            }
                                            width={500}
                                            height={500}
                                            alt="product"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            className="w-full h-full"
                                            src={
                                                '/images/brands/store-thumb-5.jpg'
                                            }
                                            width={500}
                                            height={500}
                                            alt="product"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
