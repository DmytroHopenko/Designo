import React from "react";
import Image from "next/image";

import classes from "./Button.module.css";

export const OpenMenu = ({toggleMenu}: {toggleMenu: () => void}) => {
  return (
    <Image src='/assets/shared/mobile/icon-hamburger.svg' width={24} height={20} alt="Open Menu" className={`${classes.button} cursor-pointer`} onClick={toggleMenu}/>
  )
}

export const CloseMenu = ({toggleMenu}: {toggleMenu: () => void}) => {
  return(
    <Image src='/assets/shared/mobile/icon-close.svg' width={20} height={20} alt="Close Menu" className={`${classes.button} cursor-pointer`} onClick={toggleMenu}/>
  )
}