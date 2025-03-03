import React, { Suspense } from 'react';
import Header from './Header/Header';
import SectionTemplate from '@/Components/Modules/SectionTemplate/SectionTemplate';
import BestSellers from './BestSellers/BestSellers';
import LoaderComponent from '@/Components/Modules/Loders/LoaderComponent/LoaderComponent';

export default function HomeTemplate() {
    return (
        <div>
            <Header />
            <main>
                <SectionTemplate>
                    <Suspense fallback={<LoaderComponent />}>
                        <BestSellers />
                    </Suspense>
                </SectionTemplate>
            </main>
        </div>
    );
}
