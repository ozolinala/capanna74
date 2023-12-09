import Link from 'next/link';
import React from 'react';
import styles from '../styles/Layout.module.css'; // Import a separate CSS module

const Layout = ({ currentPage, children }) => {
  const menuItems = [
    { id: 1, label: 'Menu', link: '/menu' },
    { id: 2, label: 'Takeaway', link: '/takeaway' },
    { id: 3, label: 'Our Story', link: '/our-story' },
    { id: 4, label: 'Contact', link: '/contact' },
  ];

  return (
    <div className={styles.container}>
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        {menuItems.map((item) => (
          <div key={item.id} className={styles.navLink}>
            <Link href={item.link}>
              <p className={currentPage === item.label.toLowerCase() ? styles.active : ''}>
                {item.label}
                {currentPage === item.label.toLowerCase() && <span className={styles.dot}> •</span>}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.bookTableButton}>
        <Link href="/bookings">
          <p>Book a Table</p>
        </Link>
      </div>
    </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;