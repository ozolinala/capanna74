import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";
import HamburgerMenu from "../components/HamburgerMenu";

const Layout = ({ children }) => {
  const router = useRouter();
  const [menuActive, setMenuActive] = useState(false);

  const currentPage = router.pathname.replace("/", "");
  const currentPageNormalized = currentPage.toLowerCase().replace(/\s+/g, "-");

  const menuItems = [
    { id: 1, label: "Menu", link: "/#menu" },
    { id: 2, label: "Bookings", link: "/bookings" },
    { id: 3, label: "Takeaway", link: "/takeaway" },
    { id: 4, label: "Our Story", link: "/our-story" },
    { id: 5, label: "Contact", link: "/contact" },
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <HamburgerMenu menuItems={menuItems} />
         
        <div className={`${styles.navLinks} ${menuActive && styles.active}`}>
          {menuItems.map((item) => (
            <div key={item.id} className={styles.navLink}>
              <Link href={item.link}>
                <p
                  className={`${styles.navLinkText} ${
                    currentPageNormalized ===
                    item.label.toLowerCase().replace(/\s+/g, "-",)
                      ? styles.active
                      : ""
                  }`}
                >
                  {currentPageNormalized ===
                    item.label.toLowerCase().replace(/\s+/g, "-") && (
                    <span className={styles.dot}> •</span>
                  )}
                  {item.label}
                </p>
              </Link>
            </div>
          ))}
          
        </div>
      </nav>
      <main>{children}</main>
      {currentPageNormalized !== "takeaway" && (
      <footer className={styles.footer}>
        <div className={styles.leftContainer}>
          <div className={styles.logoContainer}>
            <img src="/assets/capanna-grey.svg" alt="Logo" />
          </div>

          <div className={styles.addressContainer}>
            <p>Gammel Kongevej 74, København K</p>
            <p>+45 00 00 00 00 </p>
            <p>info@capannadi74.dk</p>
            <p>@capannadi74</p>
          </div>
          <div className={styles.socialMediaContainer}>
            <br />
            <p className={styles.bold}>Follow us</p>
            <img src="/assets/instagram.svg" alt="Instagram" />
            <img src="/assets/facebook.svg" alt="Facebook" />
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.logoContainer}>
            <img
              className={styles.itemInvisible}
              src="/assets/N74.svg"
              alt="N74 logo"
            />
          </div>
          <div className={styles.hoursContainer}>
            <p className={styles.bold}>Opening Hours</p>
            <p>Tuesday, Wednesday, Thursday 17:30 - 23:00</p>
            <p>Friday & Saturday 17:00 - 00:00</p>
          </div>
          <div className={styles.sisterRestaurantsContainer}>
            <br />
            <p className={styles.bold}>Other Restaurants</p>

            <a
              href="http://mangia.dk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/mangia-logo.svg"
                alt="Mangia"
                style={{ height: "1rem" }}
              />
            </a>
            <br />
            <a
              href="https://www.ristorantecircolo.dk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/circolo-logo.svg" alt="Circolo" />
            </a>
          </div>
        </div>
      </footer>
       )}
    </div>
  );
};

export default Layout;
