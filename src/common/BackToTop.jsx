import React, { useState } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-voilet text-white sm:py-2 sm:px-3 px-3 py-2 rounded-xl shadow-lg text-5xl"
                ><img src="./assets/images/svg/arrow-up.svg" alt="up-arrow" />
                </button>
            )}
        </div>
    );
};

export default BackToTop;
