import Image from 'next/image';
import Link from 'next/link';
import Style from './navbar.module.scss';
import { useState } from 'react';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={Style.navbar}>
      <div className={Style.navbarContainer}>
        <Link href="/" aria-label="navigate back to homepage">
          <Image
            src="/images/logo.svg"
            width={45}
            height={28}
            alt="Website logo"
          />
        </Link>

        <button
          aria-label="click to open navigation menu"
          aria-controls="nav-menu"
          className={Style.openMenuButton}
          onClick={() => setShowMenu(true)}
        >
          <Image
            src="/images/icon-menu.svg"
            width={40}
            height={17}
            alt="menu icon"
          />
        </button>

        <nav id="nav-menu" aria-hidden={!showMenu} className={Style.nav}>
          <button
            aria-label="click button to close the nav menu"
            aria-controls="nav-menu"
            onClick={() => setShowMenu(false)}
            className={Style.closeMenuButton}
          >
            <Image
              src="/images/icon-menu-close.svg"
              width={30}
              height={30}
              alt="close menu icon"
            />
          </button>

          <ul className={Style.navLinks}>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="new">New</a>
            </li>
            <li>
              <a href="popular">Popular</a>
            </li>
            <li>
              <a href="trending">Trending</a>
            </li>
            <li>
              <a href="categories">Categories</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
