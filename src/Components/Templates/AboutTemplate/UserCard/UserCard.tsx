import Image from 'next/image';
import React from 'react';

interface UserProps {
    name: string;
    image: string;
    work: string;
}

export default function UserCard({ image, name, work }: UserProps) {
    return (
        <div>
            <div>
                <Image
                    className="w-full h-full object-cover"
                    src={image}
                    width={500}
                    height={500}
                    alt="user image"
                />
            </div>
            <div className="mt-4">
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <p className="text-sm">{work}</p>
            </div>
        </div>
    );
}
