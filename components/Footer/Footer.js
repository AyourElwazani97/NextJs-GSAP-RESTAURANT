import styles from "../../styles/Home.module.scss";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_child}>
        <div className={styles.footer_detailes}>
          <div className={styles.happyClients}>
            <h3>+5K</h3>
            <p>Happy Client</p>
          </div>
          <div className={styles.happyClients}>
            <h3>+300</h3>
            <p>
              Client Command<sub>perday</sub>
            </p>
          </div>
          <div className={styles.happyClients}>
            <h3>+300</h3>
            <p>Happy Childs</p>
          </div>
        </div>
        <hr />
        <div className={styles.last_section_footer}>
          <div className={styles.ptop}>
            <Link href="/privacy-policy">
              <a>
                <p>Privacy Policy</p>
              </a>
            </Link>
            <Link href="/termofservices">
              <a>
                <p>Term of Services</p>
              </a>
            </Link>
            <Link href="/contactus">
              <a>
                <p>Contact Us</p>
              </a>
            </Link>
          </div>
          <p>©2021 Jarabe Mexican Street Food. All Rights Reserved</p>
          <p className={styles.addresse}>
            1835 W Harrison St, Chicago, IL 60612, United States
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
