"use client";

import Link from "next/link";
import Image from "next/image";
import classes from "./Header.module.css";
import { navLinks } from "@/constants";
import { CloseMenu, OpenMenu } from "./Button";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, isMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    isMenuOpen(!menuOpen);
    document.body.classList.toggle("lock_scroll");
    scrollTop();
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <header
      className={`${classes.header} flex justify-between items-center`}
    >
      <Link href="/" onClick={scrollTop}>
        <Image
          src="/assets/shared/desktop/logo-dark.png"
          height={24}
          width={196}
          alt="Designo"
        />
      </Link>
      <nav className={`${classes.menu_wrap} ${menuOpen ? classes.active : ""}`}>
        <ul className={`${classes.menu} flex`}>
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className={classes.link}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {menuOpen ? (
        <CloseMenu toggleMenu={toggleMenu} />
      ) : (
        <OpenMenu toggleMenu={toggleMenu} />
      )}
    </header>
  );
};

export default Header;
