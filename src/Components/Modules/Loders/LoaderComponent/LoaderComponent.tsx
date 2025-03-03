import React from 'react';
import ContentLoader from 'react-content-loader';

const LoaderComponent = () => (
    <ContentLoader
        speed={2}
        width={800}
        height={250}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className='w-full min-h-[250px]'
    >
        <rect x="0" y="1" rx="0" ry="0" width="100%" height="200" />
        <rect x="0" y="210" rx="4" ry="4" width="100%" height="15" />
        <rect x="0" y="230" rx="4" ry="4" width="70%" height="12" />
    </ContentLoader>
);

export default LoaderComponent;
