import Link from 'next/link'
import Image from 'next/image'
import classes from './index.module.css'
import { reasonSelect } from '@/constants'
import MetaContact from '@/components/MetaContact/MetaContact'

export default function Home() {
  return (
    <main className={classes.main}>
      <Image src='/assets/shared/desktop/bg-pattern-leaf.svg' width={1006} height={594} alt='Pattern' className={classes.pattern1}/>
      <section className={classes.hero}>
        <div className={classes.wrap_info}>
        <h1 className={classes.hero_title}>
          Award-winning custom<br />
          designs and digital<br />
          branding solutions
        </h1>
        <p className={classes.hero_paragraph_white}>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <Link href="/Company" className={classes.button}>Learn More</Link>
        </div>
        <Image className={classes.background_hero} src="/assets/home/desktop/bg-pattern-hero-home.svg" height={640} width={640} alt='Background'/>
        <Image className={classes.foreground_hero} src="/assets/home/desktop/image-hero-phone.png" height={559} width={265} alt='Phone'/>
      </section>
      <section className={classes.wrap_design}>
        <div className={classes.web}>
          <h1 className={classes.design_title}>Web design</h1>
          <Link className={classes.design_link} href='/web-design'>View project <Image className={classes.arrow_right} src='/assets/shared/desktop/icon-right-arrow.svg' height={8} width={4} alt='arrow'/></Link>
        </div>
        <div className={classes.app}>
        <h1 className={classes.design_title}>App design</h1>
          <Link className={classes.design_link} href='/app-design'>View project <Image className={classes.arrow_right} src='/assets/shared/desktop/icon-right-arrow.svg' height={8} width={4} alt='arrow'/></Link>
        </div>
        <div className={classes.graphic}>
        <h1 className={classes.design_title}>Graphic design</h1>
          <Link className={classes.design_link} href='/graphic-design'>View project <Image className={classes.arrow_right} src='/assets/shared/desktop/icon-right-arrow.svg' height={8} width={4} alt='arrow'/></Link>
        </div>
      </section>
      <section className={classes.wrap_reason}>
        {reasonSelect.map((reason) => (
          <div className={classes.reason} key={reason.key}>
            <div className={classes.reason_img_wrap}>
              <Image src={reason.src}  height={202} width={202} alt={reason.title} className='relative z-10'/>
              <Image src='/assets/shared/desktop/bg-pattern-small-circle.svg' height={202} width={202} alt='Circle' className={classes.small_circle}/>
            </div>
            <div className={classes.reason_text_wrap}>
            <span className={classes.reason_title}>{reason.title}</span>
            <p className={classes.reason_details}>{reason.text}</p>
            </div>
          </div>
        ))}
      </section>
      <Image src='/assets/shared/desktop/bg-pattern-leaf.svg' height={594} width={1006} alt='Pattern' className={classes.pattern2}/>
      <MetaContact />
    </main>
  )
}
