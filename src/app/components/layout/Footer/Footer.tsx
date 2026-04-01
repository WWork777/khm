"use client";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.arrows}>
          <Image
            src="/images/arrows.png"
            height={200}
            width={300}
            alt="arrows"
          />
        </div>
        <div className={styles.navGrid}>
          <div className={styles.leftSide}>
            <Image src="/images/logo.png" height={200} width={300} alt="logo" />
            <div>
              <p>ООО &quot;КХМ&quot;</p>
              <p>г. Кемерово, ул. Тухачевского, 54</p>
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
                <a
                  className={styles.footerContacts}
                  href="https://yandex.ru/maps/?text=Кемерово, ул. Тухачевского, 54"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/svg/mapPoint.svg"
                    alt="Адрес"
                    width={25}
                    height={25}
                  />
                  г. Кемерово, ул. Тухачевского, 54
                </a>
              </li>
              <li>
                <a className={styles.footerContacts} href="tel:89059650390">
                  <Image
                    src="/svg/phone.svg"
                    alt="Телефон"
                    width={25}
                    height={25}
                  />
                  8 (905) 965-03-90
                </a>
              </li>
              <li>
                <a
                  className={styles.footerContacts}
                  href="mailto:KHM-Group@mail.ru"
                >
                  <Image
                    src="/svg/mail.svg"
                    alt="Email"
                    width={25}
                    height={25}
                  />
                  KHM-Group@mail.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
