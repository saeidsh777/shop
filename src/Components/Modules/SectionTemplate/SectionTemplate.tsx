import React from 'react';

export default function SectionTemplate({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <div className='py-20'>{children}</div>;
}
