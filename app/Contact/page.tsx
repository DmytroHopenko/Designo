"use client";
import React, { useState, useEffect } from "react";
import classes from "./index.module.css";
import Image from "next/image";
import { locationDetail } from "@/constants";
import Link from "next/link";

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const page = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const ErrorSvg = () => (
    <Image
      src="/assets/contact/desktop/icon-error.svg"
      height={20}
      width={20}
      alt="Error"
      className={classes.error_svg}
    />
  );

  useEffect(() => {
    if (isFormSubmitted) {
      validateForm();
    }
  }, [isFormSubmitted, name, email, phone, message]);

  const validateForm = (): void => {
    let errors: Errors = {};

    if (!name) {
      errors.name = `Can't be empty`;
    }

    if (!email) {
      errors.email = `Can't be empty`;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = `Email is invalid`;
    }

    if (!phone) {
      errors.phone = `Can't be empty`;
    }

    if (!message) {
      errors.message = `Can't be empty`;
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = (): void => {
    setIsFormSubmitted(true);
    if (isFormValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors!");
    }
  };

  return (
    <main className={classes.main}>
      <section className={classes.wrap_form}>
        <div className={classes.wrap_form_text}>
          <h1 className={classes.form_title}>Contact Us</h1>
          <p className={classes.form_paragraph}>
            Ready to take it to the next level? Let's talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that's relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className={classes.form}>
          <div className={classes.wrap_input}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              className={classes.input}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className={classes.error}>
                {errors.name} <ErrorSvg />
              </p>
            )}
          </div>
          <div className={classes.wrap_input}>
            <input
              type="text"
              placeholder="Email Adress"
              value={email}
              className={classes.input}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className={classes.error}>
                {errors.email} <ErrorSvg />
              </p>
            )}
          </div>
          <div className={classes.wrap_input}>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              className={classes.input}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && (
              <p className={classes.error}>
                {errors.phone} <ErrorSvg />
              </p>
            )}
          </div>
          <div className={classes.wrap_input}>
            <textarea
              placeholder="Your Message"
              value={message}
              className={classes.message_input}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && (
              <p className={classes.error}>
                {errors.message} <ErrorSvg />
              </p>
            )}
          </div>
          <button
            className={classes.submit_button}
            onClick={handleSubmit}
          >
            Submit
          </button>
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
        className={classes.pattern1}
        height={594}
        width={1006}
        alt="Pattern"
      />
    </main>
  );
};

export default page;
