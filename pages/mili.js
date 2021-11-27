import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//import { useRouter } from 'next/router';
//import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations( locale, ['common'] ))
        }
    }
}

const mili = (props) => {
    //const { locale } = useRouter();
    //const { t } = useTranslation('common');

    return (
        <>    
            {/* <div className="head-page">
                <Image src="/images/aca.jpg" alt="ACA" layout="fill" objectFit="cover" />
                <div className="head-overlay">
                   <div className="container flex end" >
                        <h2 data-aos="fade-left">{t('name_company')}</h2>
                   </div>
                </div>
            </div>
            <div className={locale === 'ar' ? "page-content rtl" : "page-content"}>
                <div className={locale === 'ar' ? "container flex wrap rtl-row" : "container flex wrap"}>
                    <div className="col50">
                        <p><strong>{t('short_name')}</strong>&nbsp;{t('aca')}</p>
                    </div>
                    <div className="col50" >
                        <Image className="about-img" data-aos="flip-right" src="/images/about.jpg" alt="about" layout="responsive" objectFit="cover" width={400} height={200} />
                    </div>
                </div>
                <div className="container">
                    <h3>{t('our_services')}</h3>
                    <p>{t('services')}</p>
                    <h3>{t('links')}</h3>
                    <ul>
                        <li><Link href="/services/leadership" ><a>{t("service1")}</a></Link></li>
                        <li><Link href="/services/strategy" ><a>{t("service2")}</a></Link></li>
                        <li><Link href="/services/sales" ><a>{t("service3")}</a></Link></li>
                        <li><Link href="/services/financial" ><a>{t("service4")}</a></Link></li>
                        <li><Link href="/services/operational" ><a>{t("service5")}</a></Link></li>
                        <li><Link href="/services/hr" ><a>{t("service6")}</a></Link></li>
                    </ul>
                </div>
            </div> */}
        </>
    )
}

export default aca
