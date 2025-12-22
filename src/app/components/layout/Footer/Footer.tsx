import styles from "./Footer.module.scss"
import Image from "next/image";

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
                        <p>ООО &quot;КХМ&quot;</p>
                        <p>Кемерово, ул. Какая-то, 1</p>

                    </div>
                    <div className={styles.navSide}>

                    </div>
                    <div className={styles.contactsSide}>

                    </div>
                </div>


            </div>
        </section>
    );
}