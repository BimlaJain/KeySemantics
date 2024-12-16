import React, { useState } from "react";
import CommonButton from "../common/CommonButton";
import { keyAccordion } from "../utils/helper";
import CommonHeading from "../common/CommonHeading";
import { accordionItems } from "../utils/helper";

const FAQSection = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="pt-[148px] max-sm:pt-12 max-md:pt-16 max-lg:pt-20 justify-between flex flex-col md:flex-row items-center md:items-start bg-gray-50 container relative">
            <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0 sticky top-4">
                <img
                    src="./assets/images/webp/girl.webp"
                    alt="Illustration"
                    className="rounded-lg shadow-lg w-[600px]"
                />
            </div>
            <div className="md:w-1/2 w-full md:pl-8">
                <CommonHeading classList="!text-left" heading="Key Q&A" />
                <ul className="list-disc pl-5 pt-7 text-gray-600 mb-6">
                    {keyAccordion.map((item, index) => (
                        <li key={index} className="list-disc text-royal_blue text-base font-normal leading-custom-xl pb-2 max-lg:ml-4" >
                            {item}
                        </li>
                    ))}
                </ul>
                {accordionItems.map((item, index) => (
                    <div key={index} className="border-b border-grey max-w-[552px]">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between text-custom_xxs items-center py-4 text-left text-royal_blue font-medium"
                        >
                            {item.heading}
                            <span>{openAccordion === index ? (
                                <img
                                    src="./assets/images/svg/up.svg"
                                    alt="Collapse"
                                    className="h-5 w-5 transition-transform duration-700 transform rotate-0"
                                />
                            ) : (
                                <img
                                    src="./assets/images/svg/down.svg"
                                    alt="Expand"
                                    className="h-5 w-5 transition-transform duration-700 transform rotate-180"
                                />
                            )}</span>
                        </button>
                        {openAccordion === index && (
                            <div className="py-4 text-royal_blue">
                                {item.content}
                            </div>
                        )}
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