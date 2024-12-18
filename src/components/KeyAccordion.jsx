import React, { useState } from "react";
import CommonButton from "../common/CommonButton";
import { ACCORDION_ITEMS_LIST, KEY_ACCORDION_LIST } from "../utils/helper";
import CommonHeading from "../common/CommonHeading";

const FAQSection = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="xl:pt-[164px] pt-12 md:pt-16 lg:pt-20 flex flex-col md:flex-row items-center md:items-start container relative justify-between">
            {/* Left Section */}
            <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0 md:sticky top-4">
                <img
                    src="./assets/images/webp/girl.webp"
                    alt="Illustration"
                    className="rounded-lg shadow-lg w-[600px]"
                />
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full md:pl-8">
                <CommonHeading classList="!text-left" heading="Key Q&A" />
                <ul className="list-disc pl-5 pt-7 text-royalblue mb-6">
                    {KEY_ACCORDION_LIST.map((item, index) => (
                        <li
                            key={index}
                            className="text-royalblue sm:text-base text-sm font-normal leading-custom-2xl pb-2 max-lg:ml-4"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Accordion Section */}
                {ACCORDION_ITEMS_LIST.map((item, index) => (
                    <div key={index} className="border-y border-grey max-w-[552px] overflow-hidden">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between text-custom-xxs items-center py-4 text-left text-royalblue font-medium"
                        >
                            {item.heading}
                            <img
                                src="./assets/images/svg/up.svg"
                                alt={openAccordion === index ? "Collapse" : "Expand"}
                                className={`size-5 transition-transform duration-500 transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>

                        <div
                            className={`transition-all duration-700 ease-in-out overflow-hidden ${openAccordion === index
                                ? "max-h-[500px] opacity-100"
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="bg-gray-50 pb-4 text-darkblue text-base max-md:text-sm opacity-65 transition-all duration-700 ease-in-out">
                                {item.description && <p className="mb-4">{item.description}</p>}
                                {item.tittle && <p className="mb-4">{item.tittle}</p>}
                                {item.images?.length > 0 && (
                                    <div className="flex space-x-4">
                                        {item.images.map((imgSrc, imgIndex) => (
                                            <img
                                                key={imgIndex}
                                                src={imgSrc}
                                                alt={`Accordion ${index + 1} Image ${imgIndex + 1}`}
                                                className="w-1/2 h-auto object-cover rounded-md"
                                            />
                                        ))}
                                    </div>
                                )}
                                {item.content && <p className="pt-4">{item.content}</p>}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Demo Button */}
                <div className="mt-6">
                    <CommonButton NavButton="Get a demo" />
                </div>
            </div>
        </div>
    );
};

export default FAQSection;