import GlobalBtn from '@/Components/Modules/Btns/GlobalBtn/GlobalBtn';
import SectionTitle from '@/Components/Modules/Titels/SectionTitle/SectionTitle';
import Image from 'next/image';
import React from 'react';
import UserCard from './UserCard/UserCard';
import SectionTemplate from '@/Components/Modules/SectionTemplate/SectionTemplate';
import Support from '@/Components/Modules/Support/Support';
import VisitOur from '@/Components/Modules/VisitOur/VisitOur';

export default function AboutTemplate() {
    return (
        <main className="main">
            <div className="container">
                <section className="relative mb-20 lg:mb-48">
                    <h1 className="mb-8 sm:mb-20">About Our Story</h1>
                    <div className="flex flex-col md:flex-row gap-4 xl:gap-24">
                        <div className="w-full lg:h-[30rem] lg:w-[24rem] md:w-[32rem]">
                            <Image
                                className="w-full h-full object-cover"
                                src={'/images/products/about-1.jpg'}
                                alt="product image"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="flex flex-col justify-end lg:justify-between">
                            <p className="md:max-w-56">
                                Explore our collection and find cloths that
                                speaks to you
                            </p>
                            <h2 className="text-3xl lg:text-5xl font-semibold lg:max-w-[29rem]">
                                The journey behind Zinzira’s evolution in modern
                                fashion
                            </h2>
                        </div>
                    </div>

                    <div className="hidden md:block max-h-[30rem] md:w-60 xl:w-80 absolute right-0 top-0">
                        <Image
                            className="w-full h-full object-cover"
                            src={'/images/products/about-2.jpg'}
                            alt="product image"
                            width={500}
                            height={500}
                        />
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-8 place-items-center mb-20 lg:mb-40">
                    <div className="flex flex-col gap-8 md:gap-12 order-2 lg:order-1">
                        <h2 className="text-3xl lg:text-4xl font-semibold">
                            With our chic textile lines, discover modern
                            elegance
                        </h2>
                        <div>
                            <p className="mb-4 text-sm">
                                At Zinzira, we believe that fashion is more than
                                just clothing—it’s a way to express
                                individuality and connect with the world.
                                Founded with a vision to create timeless,
                                high-quality pieces, Zinzira has evolved into a
                                brand known for craftsmanship.
                            </p>
                            <p className=" text-sm">
                                From our humble beginnings to becoming a leading
                                name in modern fashion, our journey has been
                                driven by a passion for creating clothing.
                            </p>
                        </div>
                        <GlobalBtn
                            title="Explore All"
                            href="/products"
                            type={4}
                        />
                    </div>
                    <div className="w-full order-1 lg:order-2">
                        <Image
                            className="w-full h-full object-cover"
                            src={'/images/products/about-3.jpg'}
                            alt="product image"
                            width={500}
                            height={500}
                        />
                    </div>
                </section>

                <section className="grid lg:grid-cols-2 gap-8 place-items-center mb-20">
                    <div className="w-full">
                        <Image
                            className="w-full h-full object-cover"
                            src={'/images/products/about-4.jpg'}
                            alt="product image"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="flex flex-col gap-8 md:gap-12">
                        <h2 className="text-3xl lg:text-4xl font-semibold">
                            Every item is meticulously made by hand and has a
                            distinct design
                        </h2>
                        <div>
                            <p className="text-sm">
                                Our mission at Zinzira is to redefine what it
                                means to wear modern fashion. We aim to craft
                                stylish, durable pieces that make a lasting
                                impression while minimizing environmental
                                impact.
                            </p>
                        </div>
                        <GlobalBtn
                            title="Explore All"
                            href="/products"
                            type={4}
                        />
                    </div>
                </section>

                <SectionTitle title="Meet Our Team" />

                <section className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-x-4 gap-y-12">
                    <UserCard
                        image="/images/user/user-1.jpg"
                        name="Cody Fisher"
                        work="Web Designer"
                    />
                    <UserCard
                        image="/images/user/user-2.jpg"
                        name="Cameron Williamson"
                        work="Senior Designer"
                    />
                    <UserCard
                        image="/images/user/user-3.jpg"
                        name="Robert Fox"
                        work="President of Sales"
                    />
                    <UserCard
                        image="/images/user/user-4.jpg"
                        name="Annette Black"
                        work="Creative Designer"
                    />
                    <UserCard
                        image="/images/user/user-5.jpg"
                        name="Brooklyn Simmons"
                        work="Marketing Coordinator"
                    />
                    <UserCard
                        image="/images/user/user-6.jpg"
                        name="Marvin McKinney"
                        work="Head of Design"
                    />
                    <UserCard
                        image="/images/user/user-7.jpg"
                        name="Wade Warren"
                        work="Project Manager"
                    />
                    <UserCard
                        image="/images/user/user-8.jpg"
                        name="Eleanor Pena"
                        work="Designer"
                    />
                </section>

                <SectionTemplate>
                    <Support />
                </SectionTemplate>

                <SectionTemplate>
                    <VisitOur />
                </SectionTemplate>
            </div>
        </main>
    );
}
