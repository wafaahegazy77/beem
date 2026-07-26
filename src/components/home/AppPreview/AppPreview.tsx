"use client";

import "./_AppPreview.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const screens = [
    "/images/screen-1.png",
    "/images/screen-2.png",
    "/images/screen-3.png",
    "/images/screen-4.png",
    "/images/screen-5.png",
    "/images/screen-1.png",
    "/images/screen-2.png",
    "/images/screen-3.png",
    "/images/screen-4.png",
    "/images/screen-5.png",
];


const AppPreview = () => {
    return (
        <section className="app_preview_section">
            <div className="">

                <Swiper
                    className="app_preview_slider"
                    modules={[Autoplay]}
                    loop
                    centeredSlides
                    spaceBetween={10}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={6000}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {screens.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="phone_card">
                                <img
                                    src={image}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </section>
    );
};
export default AppPreview;