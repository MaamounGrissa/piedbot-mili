import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import styles from '../styles/Home.module.css';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from 'emailjs-com';

function Contact(props) {
    const { locale } = useRouter();
    const { t } = useTranslation('common');
    const [formData, setFormData] = useState({ name: '', phone: '', message: ''})

    const clear = () => {
        setFormData({ name: '', phone: '', message: ''})
      }
    
      const sendEmail = (e) => {
          e.preventDefault();
    
          let feedbackDom = document.getElementById('feedback');
    
          if (formData.name === '') {
              feedbackDom.textContent = "Please enter your name";
              feedbackDom.style.color = "#F00";
              feedbackDom.style.display = "block";
              return
          } 
          if (formData.phone === '') {
              feedbackDom.textContent = "Please enter your phone";
              feedbackDom.style.color = "#F00";
              feedbackDom.style.display = "block";
              return
          } 
          var templateParams = {
                name: formData.name,
                phone: formData.phone,
                message: formData.message,
          }
          const serviceID = 'service_7rmrm67';
          const templateID = 'template_l8csal8';
          const userID = 'user_SLJ8sSNE36vqSQnSZKzPt';
    
          try {
              emailjs.send(serviceID, templateID, templateParams, userID);
              feedback.textContent = "Message sent successfully.";
              feedback.style.color = "#080";
              feedback.style.display = "block";
              clear();
    
          } catch(error) {
              console.log({error})
              feedback.textContent = "Error, Try later please!";
              feedback.style.color = "#F00";
              feedback.style.display = "block";
          }
      }

    return (
     <>
        <section className={styles.getInTouch}>
            <div className="container">
              <div className={locale === 'ar' ? "flex wrap rtl-row" : "flex wrap"}>
                  <div className="col50" data-aos="fade-right" data-aos-duration="1800">
                      <div className={locale === 'ar' ? "flex rtl-row" : "flex"} style={{ marginBottom: '20px' }}>
                        <span className="myHr"></span><span className={styles.blockHead}>{t('lets_talk')}</span>
                      </div>
                      <h2 className={styles.getBusinessTitle}>
                          <span>{t("get_in_touch")}</span>
                          <span></span>
                      </h2>
                      <p>{t("contact_desc")}</p>
                      <a href="tel:+21620203059" 
                               className={locale === 'ar' ? 'mb-2 flex rtl-row' : 'mb-2 flex'} >
                                <LocalPhoneIcon className="svg" /><span className={styles.contactItem}>+216 20 203 059</span></a>
                      <a href="mailto:arine.conseil.affaires@gmail.com" 
                               className={locale === 'ar' ? 'mb-2 flex rtl-row' : 'mb-2 flex'} >
                                <EmailIcon className="svg" /><span className={styles.contactItem}>arine.conseil.affaires@gmail.com</span></a>
                      <a href="https://goo.gl/maps/TWbqEb7siNgP7Nd66" target="_blanc" rel="noreferrer noopener" 
                                className={locale === 'ar' ? 'mb-2 flex rtl-row' : 'mb-2 flex'} >
                                <RoomIcon className="svg" /><span className={styles.contactItem}>{t("address")}</span></a>
                      <div className={locale === 'ar' ? 'socials flex rtl-row' : 'socials flex'}
                            style={{ marginTop: "40px" }}>
                          <a href="https://facebook.com" 
                              target="_blanc" rel="noreferrer noopener" > 
                              <img src='/images/socials/facebook.png' alt='Facebook' />
                          </a>
                          <a href="https://instagram.com" 
                              target="_blanc" rel="noreferrer noopener" > 
                              <img src='/images/socials/instagram.png' alt='Instagram' />
                          </a>
                          <a href="https://linkedin.com" 
                              target="_blanc" rel="noreferrer noopener" > 
                              <img src='/images/socials/linkedin.png' alt='Linkedin' />
                          </a>
                      </div>
                  </div>
                  <div className="col50" style={{ position: 'relative' }}>
                      <div data-aos="fade-left" data-aos-duration="1800" className={styles.contactForm}>
                          <form>
                            <h2>{t('contact_us')}</h2>
                            <input type="text" placeholder={t('modal_name')} 
                                  value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                            <input type="tel" placeholder={t('modal_phone')}
                                  value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                            <textarea  row="4" placeholder={t('modal_message')}
                                  value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}>
                            </textarea>
                            <button onClick={e => sendEmail(e)} type="submit">{t('modal_send')}</button>
                            <span id="feedback" className="feedback">{'feedback'}</span>
                          </form>
                      </div>
                  </div>
              </div>
            </div>
        </section>
        <div className="contacts-infos flex">
            <iframe title="ACA" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.518677330656!2d10.628313614610025!3d35.83628332906143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275371d3701e5%3A0x997b1fe27665d192!2sACA%20-%20Arine%20Conseils%20%26%20Affaires!5e0!3m2!1sfr!2stn!4v1634637203785!5m2!1sfr!2stn" width="100%" height="100%" style={{ border: 'none' }} loading="lazy"></iframe>
        </div>
    </>
    )
}

export default Contact
