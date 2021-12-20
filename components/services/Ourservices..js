import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Sine } from "gsap";
function Ourservices() {
  const services = useRef(null);
  const services_child = useRef(null);
  const service_title = useRef(null);
  const firstHandler = useRef(null);
  const secondHandler = useRef(null);
  const thirdHandler = useRef(null);
  const fourthHandler = useRef(null);
  const fifththHandler = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const size = 800;
    const windowSize = window.innerWidth < size;
    if (!windowSize) {
      const tlService = gsap.timeline({
        ease: Sine.easeOut,
        scrollTrigger: {
          trigger: services.current,
          toggleActions: "play",
          scrub: 1,
          start: "top top",
          end: "+=300%",
          pin: true,
        },
      });
      tlService
        .fromTo(
          service_title.current,
          { opacity: 0 },
          { opacity: 1, duration: 2.5 }
        )
        .to(firstHandler.current.children[0], {
          clipPath: "inset(0% 0%)",
          duration: 2.5,
        })
        .fromTo(
          firstHandler.current.children[1],
          { opacity: 0 },
          { opacity: 1, duration: 2.5 }
        )
        .to(firstHandler.current.children[0], { scale: 1.6, duration: 2.5 })
        .to(firstHandler.current, { y: -270, duration: 2.5 })
        .to(secondHandler.current.children[0], {
          clipPath: "inset(0% 0%)",
          duration: 2.5,
        })
        .fromTo(
          secondHandler.current.children[1],
          { opacity: 0 },
          { opacity: 1, color: "#FFF", duration: 2.5 }
        )
        .to(secondHandler.current.children[0], { scale: 1.6, duration: 2.5 })
        .to(secondHandler.current, { y: 250, duration: 2.5 })
        .to(thirdHandler.current.children[0], {
          clipPath: "inset(0% 0%)",
          duration: 2.5,
        })
        .fromTo(
          thirdHandler.current.children[1],
          { opacity: 0 },
          { opacity: 1, color: "#FFF", duration: 2.5 }
        )
        .to(thirdHandler.current, { y: -260 })
        .to(thirdHandler.current.children[0], { scale: 1.6, duration: 2.5 })
        .to(fourthHandler.current.children[0], {
          clipPath: "inset(0% 0%)",
          duration: 2.5,
        })
        .fromTo(
          fourthHandler.current.children[1],
          { opacity: 0 },
          { opacity: 1, duration: 2.5 }
        )
        .to(fourthHandler.current, { y: 240 })
        .to(fourthHandler.current.children[0], { scale: 1.6, duration: 2.5 })
        .to(fifththHandler.current.children[0], {
          clipPath: "inset(0% 0%)",
          duration: 2.5,
        })
        .fromTo(
          fifththHandler.current.children[1],
          { opacity: 0 },
          { opacity: 1, duration: 2.5 }
        )
        .to(fifththHandler.current.children[0], { scale: 1.6, duration: 2.5 })
        .to(fifththHandler.current, { y: -30, x: 160, duration: 2.5 });
    } else {
      return null;
    }
  }, []);
  return (
    <div ref={services} className={styles.our_services}>
      <h1 ref={service_title}>SERVICES && OPTIONS</h1>
      <div ref={services_child} className={styles.our_services_child}>
        <div ref={firstHandler} className={styles.handel_image_services}>
          <img src="/dine-in-rinco.jpg" alt="" />
          <span>Dine-in</span>
        </div>
        <div ref={secondHandler} className={styles.handel_image_services}>
          <img src="/takeawayfoodrinco.jpg" alt="" />
          <span>Take-away</span>
        </div>
        <div ref={thirdHandler} className={styles.handel_image_services}>
          <img
            src="/nocontactdelivery-rinco.jpg"
            width="350"
            height="300"
            alt=""
          />
          <span>No-contact delivery</span>
        </div>
        <div ref={fourthHandler} className={styles.handel_image_services}>
          <img src="/delivery-rinco.jpg" alt="" />
          <span>Delivery</span>
        </div>
        <div ref={fifththHandler} className={styles.handel_image_services}>
          <img
            src="/curbside-pickup-rinco.jpg"
            width="350"
            height="400"
            alt=""
          />
          <span>Curbside pickup</span>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;
