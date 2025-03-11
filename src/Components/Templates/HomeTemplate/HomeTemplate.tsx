import React, { Suspense } from 'react';
import Header from './Header/Header';
import SectionTemplate from '@/Components/Modules/SectionTemplate/SectionTemplate';
import BestSellers from './BestSellers/BestSellers';
import LoadingFetch from '@/Components/Modules/Loders/LoadingFetch/LoadingFetch';
import AboutUs from './AboutUs/AboutUs';
import Brands from './Brands/Brands';
import LastProducts from './LastProducts/LastProducts';
import Support from './Support/Support';
import VisitOur from './VisitOur/VisitOur';

export default function HomeTemplate() {
    return (
        <div>
            <Header />
            <main>
                <SectionTemplate>
                    <Suspense fallback={<LoadingFetch />}>
                        <BestSellers />
                    </Suspense>
                </SectionTemplate>
                <SectionTemplate>
                    <AboutUs />
                </SectionTemplate>
                <SectionTemplate>
                    <Brands />
                </SectionTemplate>
                <SectionTemplate>
                    <Suspense fallback={<LoadingFetch />}>
                        <LastProducts />
                    </Suspense>
                </SectionTemplate>
                <SectionTemplate>
                    <Support />
                </SectionTemplate>
                <SectionTemplate>
                    <VisitOur />
                </SectionTemplate>
            </main>
        </div>
    );
}
