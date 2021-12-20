import React, { useEffect, useRef } from "react";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import gsap, { Expo } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
function ContactUs() {
  const contactUs = useRef(null);
  const contactUsChild = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(contactUs.current, {
      css: { visibility: "visible" },
      duration:1
    }).fromTo(
      contactUs.current.children[0],
      { opacity: 0 },
      {
        opacity: 1,
        delay: 0.6,
        duration: 2,
        ease: Expo.easeOut,
      }
    );
  }, []);
  return (
    <div>
      <Head>
        <title>Jarabe Mexican Street Food - contact us</title>
        <meta name="description" content="chicago Jarabe Mexican Street Food" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <style jsx global>
        {`
          body {
            background: #000;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <div ref={contactUs} className={styles.contactUs}>
        <div ref={contactUsChild} className={styles.contactUs_child}>
          <div className={styles.handle_child_form}>
            <h1>We are so excited to hear from you</h1>
            <form>
              <div>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="your name is here"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="City"
                  id="City"
                  placeholder="your city here"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Addresse"
                  id="Addresse"
                  placeholder="Addresse"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="PhoneNumber"
                  id="PhoneNumber"
                  placeholder="phone number"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="Mail"
                  id="Mail"
                  placeholder="@example.com"
                />
              </div>
              <div>
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
