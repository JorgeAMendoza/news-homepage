import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.scss';
import { useEffect, useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) setShowMenu(false);
    const nextContainer = document.getElementById('__next') as HTMLElement;
    document.body.classList.remove('mobileNavActive');
    nextContainer.classList.remove('mobileNavActive');
  }, [isMobile]);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link
          href="/"
          aria-label="navigate back to homepage"
          className={styles.navLogoMobile}
        >
          <Image
            src="/images/logo.svg"
            width={45}
            height={28}
            alt="Website logo"
          />
        </Link>

        <Link
          href="/"
          aria-label="navigate back to homepage"
          className={styles.navLogo}
        >
          <Image
            src="/images/logo.svg"
            width={64}
            height={40}
            alt="Website logo"
          />
        </Link>

        <button
          aria-label="click to open navigation menu"
          aria-controls="nav-menu"
          className={styles.openMenuButton}
          onClick={() => {
            const nextContainer = document.getElementById(
              '__next'
            ) as HTMLElement;
            document.body.classList.add('mobileNavActive');
            nextContainer.classList.add('mobileNavActive');
            setShowMenu(true);
          }}
        >
          <Image
            src="/images/icon-menu.svg"
            width={40}
            height={17}
            alt="menu icon"
          />
        </button>

        <nav id="nav-menu" aria-hidden={!showMenu} className={styles.navMobile}>
          <button
            aria-label="click button to close the nav menu"
            aria-controls="nav-menu"
            onClick={() => {
              const nextContainer = document.getElementById(
                '__next'
              ) as HTMLElement;
              document.body.classList.remove('mobileNavActive');
              nextContainer.classList.remove('mobileNavActive');
              setShowMenu(false);
            }}
            className={styles.closeMenuButton}
          >
            <Image
              src="/images/icon-menu-close.svg"
              width={30}
              height={30}
              alt="close menu icon"
            />
          </button>

          <ul className={styles.navLinks}>
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

        <nav id="nav-desktop" className={styles.navDesktop}>
          <ul className={styles.navLinks}>
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
