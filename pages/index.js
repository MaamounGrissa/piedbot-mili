import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Bules from '../components/Bules';
import Tricker from '../components/Tricker';
import Callback from '../components/Callback';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Contact from '../components/Contact';
import emailjs from 'emailjs-com';
import { style } from '@mui/system';
// import Head from 'next/head';
// import Image from 'next/image';


export async function getStaticProps({locale}) {
  return {
      props: {
          ...(await serverSideTranslations( locale, ['common'] ))
      }
  }
}

export default function Home(props) {
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const [showModal, setShowModal] = useState(false);
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

  const modalData = {
    title: t('modal_title'),
    name: t('modal_name'),
    phone: t('modal_phone'),
    send: t('modal_send')
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <section className={styles.intro}> 
        <img src="/images/mili.jpeg" alt="Mili" className={styles.introImg} />
        <div className={styles.overlay}>
          <div className="container">
            <h2 data-aos="fade-in" data-aos-duration="1200" className={styles.subtitle} >{t("site_service")}</h2>
            <h1 data-aos="flip-up" className={styles.title}>{t("site_method")}</h1>
            <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1800" className={styles.desc}>{t("site_intro")}</p>
            <Link href="/mili"><a className={styles.introBtn} >{t("intro_btn")}</a></Link>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className="container" style={{ position: 'relative' }}>
          <div className={styles.boxsContainer}>
            <div className={styles.box}>
              <img src="/images/icons/monitor.png" alt="icon" className={styles.icon} />
              <h3>{t("without_operating")}</h3>
              <p>Le pied bot est une malformation osseuse du pied qui est souvent accompagnée d’une rétraction des tendons et des muscles.</p>
            </div>
            <div className={styles.box}>
              <img src="/images/icons/obese.png" alt="icon" className={styles.icon} />
              <h3>{t("efficient")}</h3>
              <p>Le pied bot est une malformation osseuse du pied qui est souvent accompagnée d’une rétraction des tendons et des muscles.</p>
            </div>
            <div className={styles.box}>
              <img src="/images/icons/diagram.png" alt="icon" className={styles.icon} />
              <h3>{t("less_expensive")}</h3>
              <p>Le pied bot est une malformation osseuse du pied qui est souvent accompagnée d’une rétraction des tendons et des muscles.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.aboutMili}>
        <div className="container">
          <h2>{t("modern")}</h2>
          <p>{t("about_mili")}</p>
        </div>
      </section>
      {/*
      <section>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div data-aos="zoom-in" data-aos-duration="3000" className={styles.tarotImage}>
                <img src="/images/tarot-home.png" alt="TarotHome"/>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.tarotText}>
                <h2 data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="200" >{t("tarot_reading")}</h2>
                <p data-aos="zoom-in-left" data-aos-duration="1200" data-aos-delay="500" >{t("tarot_desc")}</p>
                <Link href="/tarot">
                  <a data-aos="zoom-out-up" data-aos-duration="1000" data-aos-delay="600" className={styles.btn}>{t("tarot_btn")}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className={styles.services} >
          <div className="container">
            <h2 className={styles.sectionTitle}>{t('services_title')}</h2>
            <div className="flex between wrap">
              <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className={styles.service}>
                <Link href="/services/leadership" >
                    <a>
                      <img src="/images/services/leadership.png" alt="Icon" />
                      <h3>{t("service1")}</h3>
                      <p>{t("service1p")}</p>
                      <Bules />
                    </a>
                </Link>
              </div> 
              <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className={styles.service}>
                <Link href="/services/strategy">
                    <a>
                      <img src="/images/services/strategy.png" alt="Icon" />
                      <h3>{t("service2")}</h3>
                      <p>{t("service2p")}</p>
                      <Bules />
                    </a>
                </Link>
               </div>
               <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className={styles.service}>
                  <Link href="/services/sales">
                      <a>
                        <img src="/images/services/marketing.png" alt="Icon" />
                        <h3>{t("service3")}</h3>
                        <p>{t("service3p")}</p>
                        <Bules />
                      </a>
                  </Link>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="300" className={styles.service}>
                  <Link href="/services/financial">
                      <a>
                        <img src="/images/services/finance.png" alt="Icon" />
                        <h3>{t("service4")}</h3>
                        <p>{t("service4p")}</p>
                        <Bules />
                      </a>
                  </Link>
                </div>
                <div data-aos="fade-up" data-aos-duration="2500" data-aos-delay="300" className={styles.service}>
                  <Link href="/services/operational">
                      <a>
                        <img src="/images/services/operation.png" alt="Icon" />
                        <h3>{t("service5")}</h3>
                        <p>{t("service5p")}</p>
                        <Bules />
                      </a>
                  </Link>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="2000" data-aos-delay="200" className={styles.service}>
                  <Link href="/services/hr">
                      <a>
                        <img src="/images/services/rh.png" alt="Icon" />
                        <h3>{t("service6")}</h3>
                        <p>{t("service6p")}</p>
                        <Bules />
                      </a>
                  </Link>
                </div>
            </div>
          </div>
      </section>
      <section className={styles.getBusiness}>
            <div className="container">
                <div className={locale === 'ar' ? "flex wrap rtl-row" : "flex wrap"}>
                    <div className="col50 py-6">
                        <div className="flex" style={{ marginBottom: '20px' }}>
                          <span className="myHr"></span><span className={styles.blockHead}>{t('callback_title')}</span>
                        </div>
                        <h2 className={styles.getBusinessTitle}>
                            <span>{t("getbusiness_title_part1")}</span>
                            <span>{t("getbusiness_title_part2")}</span>
                        </h2>
                        <p>{t("getbusiness_content")}</p>
                        <button onClick={e => setShowModal(true)}>{t("callback_btn")}</button>
                    </div>
                    <div className="col50" style={{ position: 'relative', height: '100%' }}>
                        <div className={styles.imgCallback}>
                            <img data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400" src="/images/callback.png" alt="Callback" />
                        </div>
                    </div>
                </div>
            </div>
            <Callback show={showModal} data={modalData} close={closeModal} />
        </section>
        <section className={styles.why}>
          <div className={locale === 'ar' ? "container flex wrap rtl-row" : "container flex wrap"}>
            <div className="col50">
              <div className={styles.imgContainer}>
                  <img src="/images/business.jpg" alt="ACA" />
              </div>
            </div>
            <div className="col50">
              <span data-aos="fade-left" className="myHr single"></span>
              <h2 data-aos="fade-left" data-aos-duration="1800" >{t('why_aca')}</h2>
              <strong data-aos="fade-left" data-aos-duration="2000" >{t('why_slogan')}</strong>
              <ul data-aos="fade-up" data-aos-duration="2000">
                <li><CheckCircleIcon /> {t('why_1')}</li>
                <li><CheckCircleIcon /> {t('why_2')}</li>
                <li><CheckCircleIcon /> {t('why_3')}</li>
                <li><CheckCircleIcon /> {t('why_4')}</li>
                <li><CheckCircleIcon /> {t('why_5')}</li>
              </ul>
              <div className="counters">
                <div className="counter">
                    <img src="/images/counters/c1.png" alt="Counter" />
                    <Tricker className="count" end={150} suffix="+" duration="1" />
                    <p>{t("advice_given")}</p>
                </div>

                <div className="counter">
                    <img src="/images/counters/c2.png" alt="Counter" />
                    <Tricker className="count" end={60} suffix="+" duration="2" />
                    <p>{t("guided")}</p>
                </div>

                <div className="counter">
                    <img src="/images/counters/c3.png" alt="Counter" />
                    <Tricker className="count" end={25} suffix="+" duration="3" />
                    <p>{t("awards")}</p>
                </div> 
              </div>
            </div>
          </div>
        </section>
        <Contact /> */}
    </>
  )
}
