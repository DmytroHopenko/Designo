import React from 'react'
import classes from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { imgSvg, navLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className={`${classes.footer} flex`}>
      <div className={classes.top}>
        <Link href="/">
          <Image 
          src="/assets/shared/desktop/logo-light.png"
          height={24}
          width={196}
          alt="Designo"
          />
        </Link>
        <div className={classes.menu_wrap}>
          <ul className={classes.menu}>
            {navLinks.map((link) => (
              <li key={link.key}><Link href={link.href} className={classes.links}>{link.title}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.bottom}>
        <p className={classes.info}>
        Designo Central Office <br />
        <span className={classes.span}>
          3886 Wellington Street <br />
          Toronto, Ontario M9C 3J5
          </span>
        </p>
        <p className={classes.info}>
        Contact Us (Central Office) <br />
        <span className={classes.mobile_span}>
        P : +1 253-863-8967 <br />
        M : contact@designo.co
        </span>
        </p>
        <div className={classes.icons_wrap}>
          {imgSvg.map((img) => (
            <Link href={img.href} key={img.key} target='_blank' rel='noreferrer'><Image src={img.src} height={24} width={24} alt={img.name}/></Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer