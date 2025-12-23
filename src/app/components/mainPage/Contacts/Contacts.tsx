"use client"
import styles from "./Contacts.module.scss"


export default function Contacts(){
    return(
        <section className="container" id="contacts">
            
            <div className={styles.contactsGrid}>
                <div className={styles.help}>
                    <h2>Нужна помощь с подбором?</h2>
                    <div className={styles.line}/>
                    <p>Оставьте заявку и наш специалист свяжется с вами в течение 15 минут</p>
                </div>
                <div className={styles.form}>
                    <form action="">
                        <div className={styles.formGroup}>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Введите ваше имя" 
                                required 
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                placeholder="+7 (___) ___-__-__" 
                                required 
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <textarea 
                                id="comment" 
                                name="comment" 
                                placeholder="Ваш комментарий или вопрос" 
                            ></textarea>
                        </div>
                        
                        <button type="submit" className={styles.submitBtn}>
                            <p>Оставить заявку</p>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}