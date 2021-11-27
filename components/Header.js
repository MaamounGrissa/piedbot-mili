import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Meta from './Meta';
import styles from '../styles/Header.module.css';
// Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header(props) {
    const { locale, asPath} = useRouter();
    const { t } = useTranslation('common');
    const [scrolled, setScrolled] = useState(false);
    const [showLangsList, setShowLangsList] = useState(false);
    const [showMobileMenu, setShowMobileMenue] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 40;
          setScrolled(scrollCheck)
        })
    })

    return (
        <header id="header" className={scrolled ? `${styles.header} ${styles.shadow}` : styles.header}>
            <div className={styles.content}>
                <div className='container flex between'>
                    <div className={styles.logo}>
                        <Link href="/"><a><img src="/images/logo.png" alt="Logo" /> </a></Link>
                    </div>
                    <div className='right-side flex'>
                        <nav className={styles.nav}>
                            <ul className={locale === 'ar' ? styles.navRtl : ''}>
                                <li><Link href="/" ><a>{t("menu_home")}</a></Link></li>
                                <li><Link href="/mili" ><a>{t("menu_mili")}</a></Link></li>
                                <li><Link href="/contacts" ><a>{t("menu_contacts")}</a></Link></li>
                                {/* <li><Link href="/numerology" ><a>{t("numerology")}</a></Link></li>
                                <li className={styles.dropdownContainer}><a className="flex">{t("horoscope")}<KeyboardArrowDownIcon/></a>
                                    <ul className={styles.dropdown}>
                                        <li><Link href="/horoscope/horoscope-of-the_year" ><a>{t("horoscope_of_the_year")}</a></Link></li>
                                        <li><Link href="/horoscope/horoscope-of-the-month" ><a>{t("horoscope_of_the_month")}</a></Link></li>
                                        <li><Link href="/horoscope/daily-horoscope" ><a>{t("daily_horoscope")}</a></Link></li>
                                        <li><Link href="/horoscope/tomorrows_horoscope" ><a>{t("tomorrow_s_horoscope")}</a></Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/private-consultation" ><a>{t("private_consultation")}</a></Link></li> */}
                            </ul>
                        </nav>
                        <MenuIcon className="mobile-menu-toggle" onClick={() => setShowMobileMenue(true)} />
                        <div className='languages flex center' onClick={() => setShowLangsList(!showLangsList)}>
                            <div className="selected-lang"> <img src={`/images/langs/${locale === 'fr' ? 'fr' : locale === 'ar' ? 'ar' : 'en' }.png`} alt="Lang" /> </div>
                            <KeyboardArrowDownIcon className={ showLangsList ? 'rotate' : '' } />
                            <div className={ showLangsList ? "list-languages show" : "list-languages"}>
                                <ul>
                                    <li><Link href={asPath} locale="fr"><a  className="flex"><img src="/images/langs/fr.png" alt="Lang" /> <span>Français</span></a></Link></li>
                                    <li><Link href={asPath} locale="en"><a  className="flex"><img src="/images/langs/en.png" alt="Lang" /> <span>English</span></a></Link></li>
                                    <li><Link href={asPath} locale="ar"><a  className="flex"><img src="/images/langs/ar.png" alt="Lang" /> <span>عربي</span></a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={showMobileMenu ? "mobile-menu show" : "mobile-menu"}>
                <div className="flex end"><CloseIcon className="close-menu" onClick={() => setShowMobileMenue(false)} /></div>
                <ul className={locale === 'ar' ? 'rtl-ul' : ''}>
                    <li onClick={() => setShowMobileMenue(false)}><Link href="/" ><a>{t("menu_home")}</a></Link></li>
                    <li onClick={() => setShowMobileMenue(false)}><Link href="/mili" ><a>{t("menu_mili")}</a></Link></li>
                    <li onClick={() => setShowMobileMenue(false)}><Link href="/contacts" ><a>{t("menu_contacts")}</a></Link></li>
                    {/* <li onClick={() => setShowMobileMenue(false)}><Link href="/numerology" ><a>{t("numerology")}</a></Link></li>
                    <li onClick={() => setShowMobileMenue(false)} className={styles.dropdownContainer}><a className="flex">{t("horoscope")}<KeyboardArrowDownIcon/></a>
                        <ul className={showSubmenu ? `${styles.mobileDropdown} ${styles.show}` : styles.mobileDropdown}>
                            <li onClick={() => setShowMobileMenue(false)}><Link href="/horoscope/horoscope-of-the_year" ><a>{t("horoscope_of_the_year")}</a></Link></li>
                            <li onClick={() => setShowMobileMenue(false)}><Link href="/horoscope/horoscope-of-the-month" ><a>{t("horoscope_of_the_month")}</a></Link></li>
                            <li onClick={() => setShowMobileMenue(false)}><Link href="/horoscope/daily-horoscope" ><a>{t("daily_horoscope")}</a></Link></li>
                            <li onClick={() => setShowMobileMenue(false)}><Link href="/horoscope/tomorrows_horoscope" ><a>{t("tomorrow_s_horoscope")}</a></Link></li>
                        </ul>
                    </li>
                    <li onClick={() => setShowMobileMenue(false)}><Link href="/private-consultation" ><a>{t("private_consultation")}</a></Link></li> */}
                </ul>
            </div>
        </header>
    )
}

export default Header