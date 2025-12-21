"use client"
import styles from "./About.module.scss"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AboutData from "@/app/data/About.json"

interface SliderCardProps {
  image: string;
  title: string;
  subTitle: string;
}

export const SliderCard = ({
    image,
    title,
    subTitle
}: SliderCardProps) => {
  return (
    <div className={styles.sliderCard}>
        <Image className={styles.cardImage} src={image} height={1000} width={1000} alt="about khm"/>
        <h3>{title}</h3>
        <p className={styles.subTitleCard}>{subTitle}</p>
        <button>
            <p>узнать подробнее</p>
            <svg className={styles.arrow} width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.7071 8.07112C41.0976 7.6806 41.0976 7.04743 40.7071 6.65691L34.3431 0.292946C33.9526 -0.0975785 33.3195 -0.0975785 32.9289 0.292946C32.5384 0.68347 32.5384 1.31664 32.9289 1.70716L38.5858 7.36401L32.9289 13.0209C32.5384 13.4114 32.5384 14.0446 32.9289 14.4351C33.3195 14.8256 33.9526 14.8256 34.3431 14.4351L40.7071 8.07112ZM0 7.36401V8.36401H40V7.36401V6.36401H0V7.36401Z" fill="#B9370E"/>
            </svg>
        </button>
    </div>
  );
};


export default function About(){
    return(
        <section className="container" style={{marginTop:"0px"}}>
            <div className={styles.redFon}/>
            <div className={styles.aboutContent}>
                <div className={styles.head}>
                    <div>
                        <h2>Почему выбирают нас?</h2>
                
                        <button className={styles.CTAbutton}>
                            <span className={styles.text}>Бесплатный подбор оборудования</span>
                            <div className={styles.circle}>
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" >
                                    <path d="M27.877 20.0498L13.2479 6.11104C13.0038 5.87834 12.6795 5.74854 12.3423 5.74854C12.0051 5.74854 11.6808 5.87834 11.4367 6.11104L11.4209 6.12679C11.3022 6.23959 11.2076 6.37537 11.143 6.52587C11.0784 6.67637 11.0451 6.83844 11.0451 7.00222C11.0451 7.16601 11.0784 7.32808 11.143 7.47858C11.2076 7.62907 11.3022 7.76486 11.4209 7.87766L25.1969 21.0027L11.4209 34.1224C11.3022 34.2352 11.2076 34.371 11.143 34.5215C11.0784 34.672 11.0451 34.8341 11.0451 34.9978C11.0451 35.1616 11.0784 35.3237 11.143 35.4742C11.2076 35.6247 11.3022 35.7605 11.4209 35.8733L11.4367 35.889C11.6808 36.1217 12.0051 36.2515 12.3423 36.2515C12.6795 36.2515 13.0038 36.1217 13.2479 35.889L27.877 21.9503C28.0057 21.8277 28.1081 21.6803 28.1781 21.5169C28.2481 21.3536 28.2842 21.1777 28.2842 21C28.2842 20.8223 28.2481 20.6465 28.1781 20.4831C28.1081 20.3198 28.0057 20.1724 27.877 20.0498Z" fill="white"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                    
                
                

                    <div className={styles.custom_navigation}>
                        <div className={`${styles.custom_prev}`}></div>
                        <div className={`${styles.custom_next}`}></div>
                    </div>
                </div>

                <div className={styles.sliderBox}>
                    <div className={styles.waveFon}/>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        className={styles.mySwiper}
                        spaceBetween={20}
                        slidesPerView="auto"
                        navigation={{
                        nextEl: `.${styles.custom_next}`,
                        prevEl: `.${styles.custom_prev}`,
                        disabledClass: "swiper-button-disabled",
                        }}
                        breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.1,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1600: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        }}
                        onInit={(swiper) => {
                        swiper.navigation.init();
                        swiper.navigation.update();
                        }}
                    >
                        {AboutData.map((card) => (
                            <SwiperSlide key={card.id}>
                                <SliderCard
                                image={card.image}
                                title={card.title}
                                subTitle={card.subTitle}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            
        </section>
    );
}