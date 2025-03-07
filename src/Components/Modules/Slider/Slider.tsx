'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import CategoryCard from '../Cards/CategoryCard/CategoryCard';
import LoadingFetch from '../Loders/LoadingFetch/LoadingFetch';

export default function Slider() {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories');
        if (res.ok) {
            const result = await res.json();
            setCategories(result);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);
    return (
        <div className="relative">
            <div className="mb-8">
                <h2 className="text-5xl font-semibold">Our Categories</h2>
            </div>
            <div className="h-96">
                {categories.length ? (
                    <Swiper
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        loop={true}
                    >
                        {categories.map(
                            (category: {
                                id: number;
                                name: string;
                                image: string;
                                slug: string;
                            }) => (
                                <SwiperSlide key={category.id}>
                                    <CategoryCard
                                        name={category.name}
                                        image={category.image}
                                        slug={category.slug}
                                    />
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                ) : (
                    <LoadingFetch />
                )}
            </div>
        </div>
    );
}
