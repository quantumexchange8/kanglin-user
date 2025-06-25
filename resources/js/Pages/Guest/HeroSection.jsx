import React from "react";
import { Carousel } from "antd";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
    // ✅ Now hooks are used inside a component — this is valid
    const isXl = useMediaQuery({ minWidth: 1440 });
    const isLg = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
    const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isSm = useMediaQuery({ minWidth: 360, maxWidth: 767 });

    return (
        <Carousel autoplay autoplaySpeed={5000} arrows={!isSm}>
            <div>
                <img src="/asset/hero1.png" alt="" />
            </div>
            <div>
                <img src="/asset/hero2.png" alt="" />
            </div>
            <div>
                <img src="/asset/hero3.png" alt="" />
            </div>
        </Carousel>
    );
};

export default HeroSection;
