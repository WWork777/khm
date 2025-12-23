"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE;
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Фон появляется когда страница прокручена больше чем на 50px
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Очистка при размонтировании
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  

  return (
    <header className={`${styles.header} ${ isScrolled && !menuOpen ? styles.scrolled : ""}`}>
      {/* Остальной код без изменений */}
        <div>
            <div className={`${styles.inner} ${ menuOpen ? styles.modalOpen : ""}`}>
                {/* <Link href="/" className={styles.logo}>
                    <Image
                    src="/svg/logo.svg"
                    alt="Логотип"
                    width={220}
                    height={60}
                    priority
                    />
                </Link> */}

                {/* Навигация desktop */}
                <nav className={`${styles.nav} ${ isScrolled && !menuOpen ? styles.scrolled : ""} `}>
                    <Link href="/#about">О компании</Link>
                    <Link href="/#products">Продукция</Link>
                    <Link href="/#services">Услуги</Link>
                    <Link href="/#contacts">Контакты</Link>
                </nav>

                {/* Контакты и кнопка */}
                <div className={styles.actions}>
                    <div className={styles.contacts}>
                    <a href={`tel:${phone}`} className={styles.phone}>
                        +7 (999) 999 - 99 - 99
                        
                    
                    <Image
                            className={styles.icon}
                            src="/svg/phoneHead.svg"
                            alt="phone"
                            width={30}
                            height={30}
                        />
                    </a>
                    {/* <div className={styles.socials}>
                        <Link href="https://m.vk.com/tridsat_dva" target="_blank">
                        
                        </Link>
                        <Link href="https://wa.me/79029830005" target="_blank">
                        <Image
                            className={styles.icon}
                            src="/svg/wa.svg"
                            alt="WhatsApp"
                            width={40}
                            height={40}
                        />
                        </Link>
                    </div> */}
                    </div>
                </div>

                <button
                    className={styles.burger}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </div>
      {/* Мобильное меню */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          menuOpen ? styles.mobileMenuOverlayActive : ""
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`${styles.mobileMenu} ${
            menuOpen ? styles.mobileMenuActive : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={styles.mobile_logo_container}
          >
            <img src="/svg/logo.svg" alt="" className={styles.mobile_logo} />
          </Link> */}
          <nav>
            <Link href="/#about" onClick={() => setMenuOpen(false)}>
              О компании
            </Link>
            <Link href="/#products" onClick={() => setMenuOpen(false)}>
              Продукция
            </Link>
            <Link href="/#services" onClick={() => setMenuOpen(false)}>
              Услуги
            </Link>
            <Link href="/#contacts" onClick={() => setMenuOpen(false)}>
              Контакты
            </Link>
          </nav>
          <div className={styles.mobileContacts}>
            <div className={styles.contacts}>
                <div className={styles.phone}>
                    <a href="">
                        +7 (999) 999 - 99 - 99
                        <Image
                            className={styles.icon}
                            src="/svg/phoneHead.svg"
                            alt="phone"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>

            </div>
            {/* <div className={styles.socials}>
              <Link href="https://m.vk.com/tridsat_dva" target="_blank">
                <Image
                  src="/svg/vk.svg"
                  alt="whatsapp"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://wa.me/79029830005" target="_blank">
                <Image
                  src="/svg/wa.svg"
                  alt="whatsapp"
                  width={24}
                  height={24}
                />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
