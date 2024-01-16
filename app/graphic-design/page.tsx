import React from 'react'
import classes from './index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { graphicDesign } from '@/constants'
import MetaContact from '@/components/MetaContact/MetaContact'

const page = () => {
  return (
    <main className={classes.main}>
      <section className={classes.wrap_hero}>
        <h1 className={classes.hero_title}>Graphic Design</h1>
        <p className={classes.hero_paragraph}>
          We deliver eye-catching branding materials that are 
          tailored to meet your business objectives.
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
        {graphicDesign.map((graphic) => (
          <div className={classes.graphic_work} key={graphic.key}>
            <div
              className={classes.wrap_work_img}
              style={{
                background: `url('${graphic.src}') no-repeat`,
                backgroundSize: "100% 100%", // Додаємо background-size
              }}
            ></div>
            <div className={classes.wrap_work_text}>
              <span className={classes.work_title}>{graphic.title}</span>
              <p className={classes.work_detail}>{graphic.detail}</p>
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
        <div className={classes.app}>
          <h1 className={classes.design_title}>App Design</h1>
          <Link href="/app-design" className={classes.design_link}>
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