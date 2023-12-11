import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css'; 

const Layout = ({ children }) => {
  const router = useRouter();

  // Extract the pathname from the router object
  const currentPage = router.pathname.replace('/', ''); 
  console.log("current page",currentPage)
  
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
            <p className={`${styles.navLinkText} ${currentPage === item.label.toLowerCase() ? styles.active : ''}`}>
                  {currentPage === item.label.toLowerCase() && <span className={styles.dot}> •</span>}
                  {item.label}
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