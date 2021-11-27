import React from 'react';
import Header from './Header';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Meta from './Meta';

const Layout = ({children}) => {
    return (
        <>
            <Meta />
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
