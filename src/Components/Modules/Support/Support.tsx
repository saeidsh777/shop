import React from 'react';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { MdOutlinePayment, MdSupportAgent } from 'react-icons/md';
import { LiaShippingFastSolid } from 'react-icons/lia';

export default function Support() {
    return (
        <section className="container grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-800">
            <div>
                <span className="text-5xl">
                    <RiInboxArchiveLine />
                </span>
                <h2 className="md:text-2xl font-semibold my-2">
                    Free Shipping
                </h2>
                <p className="text-sm md:text-lg">
                    You will love at great low prices
                </p>
            </div>
            <div>
                <span className="text-5xl">
                    <MdOutlinePayment />
                </span>
                <h2 className="md:text-2xl font-semibold my-2">
                    Flexible Payment
                </h2>
                <p className="text-sm md:text-lg">
                    Pay with Multiple Credit Cards
                </p>
            </div>
            <div>
                <span className="text-5xl">
                    <LiaShippingFastSolid />
                </span>
                <h2 className="md:text-2xl font-semibold my-2">
                    Fast Delivery
                </h2>
                <p className="text-sm md:text-lg">
                    Experience the joy of fast shipping
                </p>
            </div>
            <div>
                <span className="text-5xl">
                    <MdSupportAgent />
                </span>
                <h2 className="md:text-2xl font-semibold my-2">
                    Premium Support
                </h2>
                <p className="text-sm md:text-lg">
                    Outstanding premium support
                </p>
            </div>
        </section>
    );
}
