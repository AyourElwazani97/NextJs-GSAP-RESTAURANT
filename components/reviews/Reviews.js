import React from "react";
import styles from "../../styles/Home.module.scss";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Sine } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Reviews() {
  const reviewsParent = useRef(null);
  const reviewsChild = useRef(null);
  const each_rev_one = useRef(null);
  const firstNumber = useRef(null);
  const SecondNumber = useRef(null);
  const ThirdNumber = useRef(null);
  const FourthNumber = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (window.innerWidth > 800) {
      firstNumber.current.style.opacity = 0;
      SecondNumber.current.style.opacity = 0;
      ThirdNumber.current.style.opacity = 0;
      FourthNumber.current.style.opacity = 0;
      const tl = gsap.timeline({
        ease: Sine.easeOut,
        scrollTrigger: {
          trigger: reviewsParent.current,
          toggleActions: "play reverse restart",
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });
      tl.to(firstNumber.current, { opacity: 1 })
        .fromTo(
          reviewsChild.current.children[0],
          { opacity: 0, skewX: "0deg", skewY: "0deg" },
          {
            opacity: 1,
            skewX: ".2deg",
            skewY: "5deg",
            x: -600,
            background: "#FFF",
          }
        )
        .to(firstNumber.current, { opacity: 0 })
        .to(SecondNumber.current, { opacity: 1 })
        .fromTo(
          reviewsChild.current.children[1],
          { opacity: 0, skewX: "0deg", skewY: "0deg" },
          {
            opacity: 1,
            skewX: ".2deg",
            skewY: "5deg",
            x: -600,
            background: "#FFF",
          }
        )
        .to(SecondNumber.current, { opacity: 0 })
        .to(ThirdNumber.current, { opacity: 1 })
        .fromTo(
          reviewsChild.current.children[2],
          { opacity: 0, skewX: "0deg", skewY: "0deg" },
          {
            opacity: 1,
            skewX: ".2deg",
            skewY: "5deg",
            x: -600,
            background: "#FFF",
          }
        )
        .to(ThirdNumber.current, { opacity: 0 })
        .to(FourthNumber.current, { opacity: 1 })
        .fromTo(
          reviewsChild.current.children[3],
          { opacity: 0, skewX: "0deg", skewY: "0deg" },
          {
            opacity: 1,
            skewX: ".2deg",
            skewY: "5deg",
            x: -600,
            background: "#FFF",
          }
        );
    } else {
      return null;
    }
  }, []);
  return (
    <div ref={reviewsParent} className={styles.reviews_parent}>
      <div className={styles.handle_numbers}>
        <h1 ref={firstNumber}>1</h1>
        <h1 ref={SecondNumber}>2</h1>
        <h1 ref={ThirdNumber}>3</h1>
        <h1 ref={FourthNumber}>4</h1>
      </div>
      <div ref={reviewsChild} className={styles.reviews_child}>
        <div className={styles.each_rev_child}>
          <h2>LADYGAGA</h2>
          <div>
            <img
              src="/nocontactdelivery-rinco.jpg"
              width="200"
              height="300"
              alt=""
            />
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. ad amet,
              nemo dolor nihil corporis minus ea quas voluptates corrupti.
            </p>
          </div>
        </div>
        <div className={styles.each_rev_child}>
          <h2>Name</h2>
          <div>
            <img
              src="/nocontactdelivery-rinco.jpg"
              width="200"
              height="300"
              alt=""
            />
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. ad amet,
              nemo dolor nihil corporis minus ea quas voluptates corrupti.
            </p>
          </div>
        </div>
        <div ref={each_rev_one} className={styles.each_rev_child}>
          <h2>NameAA</h2>
          <div>
            <img
              src="/nocontactdelivery-rinco.jpg"
              width="200"
              height="300"
              alt=""
            />
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. ad amet,
              nemo dolor nihil corporis minus ea quas voluptates corrupti.
            </p>
          </div>
        </div>
        <div className={styles.each_rev_child}>
          <h2>Name</h2>
          <div>
            <img
              src="/nocontactdelivery-rinco.jpg"
              width="200"
              height="300"
              alt=""
            />
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. ad amet,
              nemo dolor nihil corporis minus ea quas voluptates corrupti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
