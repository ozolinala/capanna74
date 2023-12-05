import Link from 'next/link';
import React from 'react';
import styles from '../styles/Layout.module.css'; // Import a separate CSS module

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.leftNav}>
          <Link href="/" passHref>
            <div className={styles.redText}>CAPANNA47</div>
          </Link>
          <Link href="/bookings" passHref>
            <p>BOOK A TABLE</p>
          </Link>
        </div>
        <div className={styles.rightNav}>
          <Link href="/menu" passHref>
            <p>MENU</p>
          </Link>
          <Link href="/takeaway" passHref>
            <p>TAKEAWAY</p>
          </Link>
          <Link href="/our-story" passHref>
            <p>OUR STORY</p>
          </Link>
          <Link href="/contact" passHref>
            <p>CONTACT</p>
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;