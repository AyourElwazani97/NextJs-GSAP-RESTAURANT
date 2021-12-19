import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from '../components/Footer/Footer'
function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Jarabe Mexican Street Food - privacy policy</title>
        <meta name="description" content="chicago Jarabe Mexican Street Food" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <style jsx global>
        {`
          body {
            background: #000;
          }
        `}
      </style>
      <div className={styles.privacyPolicy}>
        <h1>privacyPolicy</h1>
        <div>
          <p>
            Your privacy is critical to us. Likewise, we have built up this
            Policy with the end goal you should see how we gather,
            <br />
            utilize, impart and reveal and make utilization of individual data.
            The following blueprints our privacy policy.
          </p>
        </div>
        <div className={styles.privacyPolicy_child}>
          <ul>
            <li>
              Before or at the time of collecting personal information, we will
              identify the purposes for which information is being collected.
            </li>
            <li>
              We will gather and utilization of individual data singularly with
              the target of satisfying those reasons indicated by us and for
              other good purposes, unless we get the assent of the individual
              concerned or as required by law.
            </li>
            <li>
              We will just hold individual data the length of essential for the
              satisfaction of those reasons.
            </li>
            <li>
              We will gather individual data by legal and reasonable means and,
              where fitting, with the information or assent of the individual
              concerned.
            </li>
            <li>
              Personal information ought to be important to the reasons for
              which it is to be utilized, and, to the degree essential for those
              reasons, ought to be exact, finished, and updated.
            </li>
            <li>
              We will protect individual data by security shields against
              misfortune or burglary, and also unapproved access, divulgence,
              duplicating, use or alteration.
            </li>
            <li>
              We will promptly provide customers with access to our policies and
              procedures for the administration of individual data.
            </li>
          </ul>
        </div>
        <div>
          <p>
            We are focused on leading our business as per these standards with a
            specific end goal to guarantee that the privacy of individual data
            is secure and maintained.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
