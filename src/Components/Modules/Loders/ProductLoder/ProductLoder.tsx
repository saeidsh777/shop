import React from 'react';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import SectionTitle from '../../Titels/SectionTitle/SectionTitle';

export default function ProductLoder({ title }: { title: string }) {
    return (
        <div className="container">
            <div className="mb-12">
                <SectionTitle title={title} />
            </div>
            <div className="grid grid-cols-3  gap-2">
                <LoaderComponent />
                <LoaderComponent />
                <LoaderComponent />
            </div>
        </div>
    );
}
