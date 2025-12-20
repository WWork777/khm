"use client"
import React from 'react';
import styles from "./Hero.module.scss"
import Image from 'next/image';

export default function Hero(){
    return(
        <section className={styles.hero}> 
            <div className={styles.heroIM}>
                <div className={styles.heroContent}>
                    <h1>поставщик редукторов donly в кемерово</h1>
                    <p>оборудование от проверенного <br/>производителя</p>

                    <button className={styles.button}>
                        <span className={styles.text}>подобрать оборудование</span>
                        <div className={styles.circle}>
                            {/* <svg 
                            className={styles.arrow} 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path 
                                d="M12 5V19M12 5L6 11M12 5L18 11" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            /> */}

                            <svg className={styles.arrow}  width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.7235 10.5321C37.2328 10.0186 37.2294 9.18945 36.716 8.6801L28.3481 0.379812C27.8346 -0.129534 27.0055 -0.126174 26.4961 0.387317C25.9868 0.900809 25.9901 1.72998 26.5036 2.23933L33.9417 9.61737L26.5636 17.0554C26.0543 17.5689 26.0577 18.3981 26.5712 18.9075C27.0846 19.4168 27.9138 19.4134 28.4232 18.9L36.7235 10.5321ZM0.00488281 9.75488L0.0101893 11.0645L35.799 10.9194L35.7937 9.60986L35.7884 8.30029L-0.00042369 8.44531L0.00488281 9.75488Z" fill="#B9370E"/>
                            </svg>

                            {/* </svg> */}
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}