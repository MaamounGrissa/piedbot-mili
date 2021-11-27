import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container flex between wrap">
                <div className="col3">
                    <Link href="/"><img src="/images/logo.png" alt="Logo" /></Link>
                </div>
                <div className="col3">
                    <p>&copy; {new Date().getFullYear()} NIO VOYANCE - All Rights Reserved.</p>
                    <p>Created By <a href="https://anytime4anywhere.com" target="_blanc" rel="noreferrer noopener" > Anytime & Anywhere</a></p>
                </div>
                <div className="col3">
                    <div className="socials flex end">
                        <a href="https://www.facebook.com/niovoyance/" 
                            target="_blanc" rel="noreferrer noopener" > 
                            <img src='/images/socials/facebook.png' alt='Facebook' />
                        </a>
                        <a href="https://www.instagram.com/niovoyance/" 
                            target="_blanc" rel="noreferrer noopener" > 
                            <img src='/images/socials/instagram.png' alt='Instagram' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
