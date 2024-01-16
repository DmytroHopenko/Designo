import React from 'react'
import classes from './MetaContact.module.css'
import Link from 'next/link'

const MetaContact = () => {
  return (
    <section className={classes.wrap_meta_contact}>
      <div className={classes.wrap_meta_text}>
        <h1 className={classes.meta_title}>Let’s talk about your project</h1>
        <p className={classes.meta_paragraph}>
        Ready to take it to the next level? Contact us today and find out 
        how our expertise can help your business grow.
        </p>
      </div>
      <Link href='/Contact' className={classes.button}>Get in touch</Link>
    </section>
  )
}

export default MetaContact