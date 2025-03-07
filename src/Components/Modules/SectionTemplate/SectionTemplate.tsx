import React from 'react';

export default function SectionTemplate({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <div className='pt-20 py-12'>{children}</div>;
}
