import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href="/" passHref>
          home/logo
        </Link>{' '}
        <Link href="/bookings" passHref>
          BOOK A TABLE
        </Link>
        <Link href="/menu" passHref>
          MENU
        </Link>
        <Link href="/takeaway" passHref>
          TAKEAWAY
        </Link>
        <Link href="/our-story" passHref>
          OUR STORY
        </Link>
        <Link href="/contact" >
          CONTACT
        </Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;