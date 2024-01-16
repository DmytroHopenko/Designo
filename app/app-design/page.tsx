import React from 'react'
import classes from './index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { appDesign } from '@/constants'
import MetaContact from '@/components/MetaContact/MetaContact'

const page = () => {
  return (
    <main className={classes.main}>
      <section className={classes.wrap_hero}>
        <h1 className={classes.hero_title}>App Design</h1>
        <p className={classes.hero_paragraph}>
          Our mobile designs bring intuitive digital solutions
          to your customers right at their fingertips.
        </p>
      </section>
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        height={594}
        width={1006}
        alt="Pattern"
        className={classes.pattern1}
      />
      <section className={classes.wrap_works}>
        {appDesign.map((app) => (
          <div className={classes.app_work} key={app.key}>
            <div
              className={classes.wrap_work_img}
              style={{
                background: `url('${app.src}') no-repeat`,
                backgroundSize: "100% 100%", // Додаємо background-size
              }}
            ></div>
            <div className={classes.wrap_work_text}>
              <span className={classes.work_title}>{app.title}</span>
              <p className={classes.work_detail}>{app.detail}</p>
            </div>
          </div>
        ))}
      </section>
      <section className={classes.wrap_design}>
        <div className={classes.web}>
          <h1 className={classes.design_title}>Web Design</h1>
          <Link href="/web-design" className={classes.design_link}>
            View projects{" "}
            <Image
              className={classes.arrow_right}
              src="/assets/shared/desktop/icon-right-arrow.svg"
              height={8}
              width={4}
              alt="arrow"
            />
          </Link>
        </div>
        <div className={classes.graphic}>
          <h1 className={classes.design_title}>Graphic Design</h1>
          <Link href="/graphic-design" className={classes.design_link}>
            View projects{" "}
            <Image
              className={classes.arrow_right}
              src="/assets/shared/desktop/icon-right-arrow.svg"
              height={8}
              width={4}
              alt="arrow"
            />
          </Link>
        </div>
      </section>
      <MetaContact />
    </main>
  )
}

export default page