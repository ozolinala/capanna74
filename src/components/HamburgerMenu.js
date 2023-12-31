import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import styles from "../styles/HamburgerMenu.module.css";

const HamburgerMenu = ({ menuItems }) => {
 const [isOpen, setIsOpen] = useState(false);
 const [menuItemsClass, setMenuItemsClass] = useState(styles.links);
 const linksRef = useRef(null);

 useEffect(() => {
   if (isOpen) {
     setMenuItemsClass(styles.links);
   } else {
     setMenuItemsClass(styles.links + " " + styles.inactive);
   }
 }, [isOpen]);

 const handleAnimationEnd = () => {
  if (!isOpen) {
    setMenuItemsClass(styles.links);
  }
 };

 return (
   <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
     <button className={`${styles.button} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)}>
       <span className={styles.line}></span>
       <span className={styles.line}></span>
       <span className={styles.buttonText}>Menu</span>
     </button>
     {isOpen && (
       <div className={menuItemsClass} onAnimationEnd={handleAnimationEnd} ref={linksRef}>
         {menuItems.map((item) => (
           <Link key={item.id} href={item.link}>
             <p>{item.label}</p>
           </Link>
         ))}
       </div>
     )}
   </div>
 );
};

export default HamburgerMenu;