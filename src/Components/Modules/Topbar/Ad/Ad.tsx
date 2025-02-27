'use client';
import { TypeAnimation } from 'react-type-animation';

export default function Ad() {
    return (
        <div className="bg-black py-2 text-xs text-center">
            <TypeAnimation
                sequence={[
                    'We produce food for Mice',
                    5000,
                    'We produce food for Hamsters',
                    5000,
                ]}
                speed={1}
                repeat={Infinity}
            />
        </div>
    );
}
