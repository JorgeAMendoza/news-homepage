import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <Link href="/" aria-label="navigate back to homepage">
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
      >
        <Image
          src="/images/icon-menu.svg"
          width={40}
          height={17}
          alt="menu icon"
        />
      </button>
      <nav id="nav-menu" aria-hidden="true">
        <button
          aria-label="click button to close the nav menu"
          aria-controls="nav-menu"
        >
          <Image
            src="/images/icon-menu-close.svg"
            width={30}
            height={30}
            alt="close menu icon"
          />
        </button>

        <ul>
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
  );
};

export default NavBar;
