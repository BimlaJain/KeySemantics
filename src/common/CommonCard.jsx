import React from "react";
import CommonHeading from "./CommonHeading";
import CommonButton from "./CommonButton";

const CommonCard = ({ heading, list, NavButton, classList }) => {
    return (
        <div className={`${classList}p-6`}>
            <CommonHeading heading={heading} />
            <ul className="pb-6 max-w-[552px] max-lg:mx-auto lg:ml-8 pt-5 ">
                {list.map((item, index) => (
                    <li key={index} className="list-disc text-royalblue pb-2 sm:text-base text-sm font-normal leading-custom-3xl max-lg:ml-4">
                        {item}
                    </li>
                ))}
            </ul>
            <CommonButton NavButton={NavButton} />
        </div>
    );
};

export default CommonCard;
