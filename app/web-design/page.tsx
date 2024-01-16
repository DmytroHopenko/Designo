import React from "react";
import Image from "next/image";
import classes from "./index.module.css";
import MetaContact from "@/components/MetaContact/MetaContact";
import { webDesign } from "@/constants";
import Link from "next/link";

const page = () => {
  return (
    <main className={classes.main}>
      <section className={classes.wrap_hero}>
        <h1 className={classes.hero_title}>Web Design</h1>
        <p className={classes.hero_paragraph}>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
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
        {webDesign.map((web) => (
          <div className={classes.web_work} key={web.key}>
            <div
              className={classes.wrap_work_img}
              style={{
                background: `url('${web.src}') no-repeat`,
                backgroundSize: "100% 100%", // Додаємо background-size
              }}
            ></div>
            <div className={classes.wrap_work_text}>
              <span className={classes.work_title}>{web.title}</span>
              <p className={classes.work_detail}>{web.detail}</p>
            </div>
          </div>
        ))}
      </section>
      <section className={classes.wrap_design}>
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
  );
};

export default page;
