"use client"
import styles from "./Products.module.scss"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductsData from "@/app/data/Products.json"

interface SliderCardProps {
  image: string;
  title: string;
}

export const SliderCard = ({
    image,
    title,
}: SliderCardProps) => {
  return (
    <div className={styles.sliderCard}>
        <Image className={styles.cardImage} src={image} height={1000} width={1000} alt="about khm"/>
        <div className={styles.cardBody}>
            <h3>{title}</h3>
            <button>
                <p>Перейти к каталогу</p>
            </button>
        </div>
        
    </div>
  );
};


export default function Products(){
    return(
        <section className="container">
            <div className={styles.head}>
                <div className={styles.line}>
                    <h2>Наша <span>продукция</span></h2>
                </div>
                <p>большой выбор редукторов и другого оборудования</p>
                
            </div>
            
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
                        {ProductsData.map((card) => (
                            <SwiperSlide key={card.id}>
                                <SliderCard
                                image={card.image}
                                title={card.title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
            
        </section>
    );
}