import React from "react";
import { Carousel } from "antd";
const contentStyle = {
    margin: 0,
    color: "#fff",
    textAlign: "center",
};
const HeroSection = () => (
    <>
        <Carousel arrows autoplay autoplaySpeed={5000}>
            <div>
                <h3
                    style={contentStyle}
                    className="bg-[url('/asset/hero1.png')] bg-no-repeat bg-cover bg-center h-[30vh] md:h-[60vh] lg:h-[100vh] min-[1600px]:h-[90vh] min-[1920px]:h-[1000px]"
                ></h3>
            </div>
            <div>
                <h3
                    style={contentStyle}
                    className="bg-[url('/asset/hero2.png')] bg-no-repeat bg-cover bg-center h-[30vh] md:h-[60vh] lg:h-[100vh] min-[1600px]:h-[90vh] min-[1920px]:h-[1000px]"
                ></h3>
            </div>
            <div>
                <h3
                    style={contentStyle}
                    className="bg-[url('/asset/hero3.png')] bg-no-repeat bg-cover bg-center h-[30vh] md:h-[60vh] lg:h-[100vh] min-[1600px]:h-[90vh] min-[1920px]:h-[1000px]"
                ></h3>
            </div>
        </Carousel>
        <br />
    </>
);
export default HeroSection;
