'use client';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Ad() {
    const [run, setRun] = useState(false);
    useEffect(() => {
        setRun(true);
    }, []);
    return (
        <div className="bg-black text-white py-2 text-xs text-center">
            {run ? (
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
            ) : (
                <p>
                    WELCOME - WELCOME - WELCOME - WELCOME - WELCOME - WELCOME{' '}
                </p>
            )}
        </div>
    );
}
