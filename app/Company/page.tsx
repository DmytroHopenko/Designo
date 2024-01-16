import React from "react";
import classes from "./index.module.css";
import Image from "next/image";
import MetaContact from "@/components/MetaContact/MetaContact";
import { locationDetail } from "@/constants";
import Link from "next/link";

const page = () => {
  return (
    <main className={classes.main}>
      <section className={classes.wrap_hero}>
        <div className={classes.wrap_hero_text}>
          <h1 className={classes.hero_title}>About Us</h1>
          <p className={classes.hero_paragraph}>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We've partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We're always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
        <div className={classes.wrap_hero_img}></div>
      </section>
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        height={594}
        width={1006}
        alt="Pattern"
        className={classes.pattern1}
      />
      <section className={classes.wrap_world_talent}>
        <div className={classes.wrap_world_talent_img}></div>
        <div className={classes.wrap_world_talent_text}>
          <h1 className={classes.world_talent_title}>World-class talent</h1>
          <p className={classes.world_talent_paragraph}>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. <br />
            <br /> Our team is multi-disciplinary and we are not merely
            interested in form — content and meaning are just as important. We
            give great importance to craftsmanship, service, and prompt
            delivery. Clients have always been impressed with our high-quality
            outcomes that encapsulates their brand's story and mission.
          </p>
        </div>
      </section>
      <section className={classes.wrap_location}>
        {locationDetail.map((location) => (
          <div className={classes.location} key={location.key}>
            <Image
              src="/assets/shared/desktop/bg-pattern-small-circle.svg"
              height={202}
              width={202}
              alt="Pattern"
              className={classes.location_pattern}
            />
            <Image
              src={location.src}
              height={202}
              width={202}
              alt={location.title}
              className="relative z-10"
            />
            <span className={classes.location_title}>{location.title}</span>
            <Link href={location.href} className={classes.location_button}>
              See Location
            </Link>
          </div>
        ))}
      </section>
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        height={594}
        width={1006}
        alt="Pattern"
        className={classes.pattern2}
      />
      <section className={classes.wrap_real_deal}>
        <div className={classes.wrap_real_deal_text}>
          <h1 className={classes.real_deal_title}>The real deal</h1>
          <p className={classes.real_deal_paragraph}>
            As strategic partners in our clients' businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success. <br /><br />
            We are visual storytellers in appealing and captivating ways. By combining
            business and marketing strategies, we inspire audiences to take
            action and drive real results.
          </p>
        </div>
        <div className={classes.wrap_real_deal_img}></div>
      </section>
      <MetaContact />
    </main>
  );
};

export default page;
