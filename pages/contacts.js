import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Contact from '../components/Contact';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations( locale, ['common'] ))
        }
    }
  }
  
function contacts(props) {
    const { t } = useTranslation('common');

    return (
        <>    
            <div className="head-page">
            <video type="video/mp4" src="/images/contact.mp4" controls={false} loop={true} autoPlay={true} muted={true} ></video>
                <div className="head-overlay">
                <div className="container flex end" >
                        <h2 data-aos="fade-left">{t('menu_contacts')}</h2>
                </div>
                </div>
            </div>
            <Contact />
        </>
    )
}

export default contacts
