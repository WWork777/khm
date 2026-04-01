"use client";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <section className="container" id="contacts">
      <div className={styles.contactsGrid}>
        <div className={styles.help}>
          <h2>Свяжитесь с нами</h2>
          <div className={styles.line} />
          <p>
            Мы всегда готовы ответить на ваши вопросы и обсудить детали
            сотрудничества
          </p>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.contactItem}>
            <span>Адрес:</span>
            <p>г. Кемерово, ул. Тухачевского, 54</p>
          </div>

          <div className={styles.contactItem}>
            <span>Телефон:</span>
            <a href="tel:89059650390">8 (905) 965-03-90</a>
          </div>

          <div className={styles.contactItem}>
            <span>E-mail:</span>
            <a href="mailto:KHM-Group@mail.ru">KHM-Group@mail.ru</a>
          </div>
        </div>
      </div>
    </section>
  );
}
