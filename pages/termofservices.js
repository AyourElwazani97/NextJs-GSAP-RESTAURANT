import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from '../components/Footer/Footer'
function TermOfServices() {
  return (
    <div>
      <Head>
        <title>Jarabe Mexican Street Food - term of services</title>
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
      <div className={styles.termofServices}>
        <h1>term of Services</h1>
        <div className={styles.termofServices_child}>
          <ul>
            <li>
              <span>Terms</span> : <br /> By accessing this web site, you are
              agreeing to be bound by these web site Terms and Conditions of
              Use, applicable laws and regulations and their compliance. If you
              disagree with any of the stated terms and conditions, you are
              prohibited from using or accessing this site. The materials
              contained in this site are secured by relevant copyright and trade
              mark law.
            </li>
            <li>
              <span>Use License</span> : <br />
              Permission is allowed to temporarily download one duplicate of the
              materials (data or programming) on ®Jarabe Mexican Street Food&#39;s site for
              individual and non-business use only. This is the just a permit of
              license and not an exchange of title, and under this permit you
              may not:
            </li>
            <div>
              <p>
                modify or copy the materials; use the materials for any
                commercial use , or for any public presentation (business or
                non-business); attempt to decompile or rebuild any product or
                material contained on ®Jarabe Mexican Street Food&#39;s site; remove any
                copyright or other restrictive documentations from the
                materials; or transfer the materials to someone else or even
                &#39;mirror&#39; the materials on other server. This permit might
                consequently be terminated if you disregard any of these
                confinements and may be ended by ®Jarabe Mexican Street Food whenever deemed.
                After permit termination or when your viewing permit is
                terminated, you must destroy any downloaded materials in your
                ownership whether in electronic or printed form
              </p>
            </div>
            <li>
              <span>Disclaimer</span> : <br />
              The materials on ®Jarabe Mexican Street Food&#39;s site are given &#39;as is&#39;. ®Natural
              Black makes no guarantees, communicated or suggested, and thus
              renounces and nullifies every single other warranties, including
              without impediment, inferred guarantees or states of
              merchantability, fitness for a specific reason, or
              non-encroachment of licensed property or other infringement of
              rights. Further, ®Jarabe Mexican Street Food does not warrant or make any
              representations concerning the precision, likely results, or
              unwavering quality of the utilization of the materials on its
              Internet site or generally identifying with such materials or on
              any destinations connected to this website.
            </li>
            <li>
              <span>Constraints</span> : <br />
              In no occasion should ®Jarabe Mexican Street Food or its suppliers subject for
              any harms (counting, without constraint, harms for loss of
              information or benefit, or because of business interference,)
              emerging out of the utilization or powerlessness to utilize the
              materials on ®Jarabe Mexican Street Food&#39;s Internet webpage, regardless of the
              possibility that ®Jarabe Mexican Street Food or a ®Jarabe Mexican Street Food approved agent
              has been told orally or in written of the likelihood of such harm.
              Since a few purviews don&#39;t permit constraints on inferred
              guarantees, or impediments of obligation for weighty or
              coincidental harms, these confinements may not make a difference
              to you.
            </li>
            <li>
              <span></span>
              :
              <br />
              The materials showing up on ®Jarabe Mexican Street Food&#39;s site could
              incorporate typographical, or photographic mistakes. ®Natural
              Black does not warrant that any of the materials on its site are
              exact, finished, or current. ®Jarabe Mexican Street Food may roll out
              improvements to the materials contained on its site whenever
              without notification. ®Jarabe Mexican Street Food does not, then again, make
              any dedication to update the materials.
            </li>
            <li>
              <span>Links</span> : <br />
              ®Jarabe Mexican Street Food has not checked on the majority of the websites or
              links connected to its website and is not in charge of the
              substance of any such connected webpage. The incorporation of any
              connection does not infer support by ®Jarabe Mexican Street Food of the site.
              Utilization of any such connected site is at the user&#39;s own risk.
            </li>
            <li>
              <span>7. Site Terms of Use Modifications</span> : <br />
              ®Jarabe Mexican Street Food may update these terms of utilization for its
              website whenever without notification. By utilizing this site you
              are consenting to be bound by the then current form of these Terms
              and Conditions of Use.
            </li>
            <li>
              <span>Governing Law</span> : <br />
              Any case identifying with ®Jarabe Mexican Street Food&#39;s site should be
              administered by the laws of the country of Morocco ®Jarabe Mexican Street Food
              State without respect to its contention of law provisions.
            </li>
          </ul>
        </div>
        <div>
          <p>General Terms and Conditions applicable to Use of a Web Site.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermOfServices;
