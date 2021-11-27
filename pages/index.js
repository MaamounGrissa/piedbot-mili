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



export async function getStaticProps({locale}) {
  return {
      props: {
          ...(await serverSideTranslations( locale, ['common'] ))
      }
  }
}

export default function Home(props) {

  const { t } = useTranslation('common');
 

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
    </>
  )
}
