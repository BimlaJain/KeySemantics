import React, { useState } from "react";
import CommonButton from "../common/CommonButton";
import { ACCORDION_ITEMS, KEY_ACCORDION } from "../utils/helper";
import CommonHeading from "../common/CommonHeading";

const FAQSection = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (        
        <div className="xl:pt-[164px] pt-12 md:pt-16 lg:pt-20 justify-between flex flex-col md:flex-row items-center md:items-start bg-gray-50 container relative">
            <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0 md:sticky top-4">
                <img
                    src="./assets/images/webp/girl.webp"
                    alt="Illustration"
                    className="rounded-lg shadow-lg w-[600px]"
                />
            </div>
            <div className="md:w-1/2 w-full md:pl-8">
                <CommonHeading classList="!text-left" heading="Key Q&A" />
                <ul className="list-disc pl-5 pt-7 text-royalblue mb-6">
                    {KEY_ACCORDION.map((item, index) => (
                        <li
                            key={index}
                            className="list-disc text-royalblue text-base font-normal leading-custom-2xl pb-2 max-lg:ml-4"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                {ACCORDION_ITEMS.map((item, index) => (
                    <div key={index} className="border-y border-grey max-w-[552px] overflow-hidden">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between text-custom-xxs items-center py-4 text-left text-royalblue font-medium"
                        >
                            {item.heading}
                            <img
                                src="./assets/images/svg/up.svg"
                                alt={openAccordion === index ? "Collapse" : "Expand"}
                                className={`h-5 w-5 transition-transform duration-500 transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>
                        <div
                            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${openAccordion === index
                                    ? "max-h-[500px] opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="py-4 px-2 text-royalblue sm:text-base text-sm leading-custom-3xl">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}

                <div className="mt-6">
                    <CommonButton NavButton="Get a demo" />
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
