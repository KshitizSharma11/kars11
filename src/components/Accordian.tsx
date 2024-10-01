"use client";
import React, { useState } from 'react';
import { FaLock, FaDollarSign , FaUser } from 'react-icons/fa';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
const Accordion = () => {
    const accordionData = [
        {
            icon: FaLock,
            heading: 'Trust, Safety And Transparency.',
            paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eius reiciendis iusto suscipit officia sit modi magnam, libero quasi, beatae adipisci soluta, tempore unde. Placeat odio laudantium obcaecati dolor commodi."
        },
        {
            icon: FaDollarSign,
            heading: 'Financial Security.',
            paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eius reiciendis iusto suscipit officia sit modi magnam, libero quasi, beatae adipisci soluta, tempore unde. Placeat odio laudantium obcaecati dolor commodi."
        },
        {
            icon: FaUser,
            heading: 'Customer Satisfaction.',
            paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eius reiciendis iusto suscipit officia sit modi magnam, libero quasi, beatae adipisci soluta, tempore unde. Placeat odio laudantium obcaecati dolor commodi."
        }
    ];

    // State array to keep track of which accordion item is open
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle function to open/close each accordion item
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="flex flex-col mt-10 w-[80%]">
            {accordionData.map((acc, index) => (
                <div className="rounded-lg border my-2 border-gray-400" key={index}>
                    <div>
                        <div className="flex justify-between items-center p-4">
                            {/* Render icon component */}
                            <acc.icon size={30} color={'#f97316'} />

                            <h1 className="text-2xl font-medium">{acc.heading}</h1>

                            <button onClick={() => handleClick(index)} className="cursor-pointer">
                                {activeIndex === index ? (
                                    <FiChevronUp size={30} color={'blue'} />
                                ) : (
                                    <FiChevronDown size={30} color={'black'} />
                                )}
                            </button>
                        </div>
                        {activeIndex === index && (
                            <p className="text-base text-gray-600 p-4">{acc.paragraph}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
