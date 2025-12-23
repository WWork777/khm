import styles from "./Footer.module.scss"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <section className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.arrows}>
                    <Image src="/images/arrows.png" height={200} width={300} alt="arrows"></Image>
                </div>
                <div className={styles.navGrid}>
                    <div className={styles.leftSide}>
                        <Image src="/images/logo.png" height={200} width={300} alt="arrows"/>
                        <div>
                            <p>ООО &quot;КХМ&quot;</p>
                            <p>Кемерово, ул. Какая-то, 1</p>
                        </div>
                        

                    </div>
                    <div className={styles.navSide}>
                        <Link href="/#about">Компания</Link>
                        <Link href="/#products">Продукция</Link>
                        <Link href="/#services">Услуги</Link>
                        <Link href="/#contacts">Контакты</Link>
                    </div>
                    <div className={styles.contactsSide}>
                        <ul>
                            <li>
                                <a className={styles.footerContacts} href="ssd">
                                    <Image 
                                    src="/svg/mapPoint.svg"
                                    alt="Адрес"
                                    width={25}
                                    height={25}
                                    />
                                    Адрес
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerContacts} href={`tel:sdsd`}>
                                    <Image 
                                    src="/svg/phone.svg"
                                    alt="Адрес"
                                    width={25}
                                    height={25}
                                    />
                                    Телефон
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerContacts} href={`mailto:sdsds`}>
                                    <Image 
                                    src="/svg/mail.svg"
                                    alt="Адрес"
                                    width={25}
                                    height={25}
                                    />
                                    email
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>


            </div>
        </section>
    );
}