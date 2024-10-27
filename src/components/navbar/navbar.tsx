
import Link from 'next/link';
import React from 'react';
import Menu from '../menu/menu';
import style from '../../app/styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbartitle}>
        <Link href='/' className={style.navbarlink}>jumani&aposs</Link>
      </div>

      <div className={`${style.navbarlinks} hidden md:flex gap-4 flex-1`}>
        <Link href={"/"} className={style.navbarlink}>Home</Link>
        <Link href={"/about"} className={style.navbarlink}>About</Link>
        <Link href={"/contact"} className={style.navbarlink}>Contact</Link>
      </div>

      <div className={style.menu}>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;