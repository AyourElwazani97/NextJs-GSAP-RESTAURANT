import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import SplitText from "../../utils/split3.min.js";
import gsap from "gsap";
import { Sine } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image1 from "../../public/image1.jpeg";
import Image2 from "../../public/mexican-food.jpg";
import overflay from "../../public/overlay5.jpg";
import hoverEffect from "hover-effect";
function Hero() {
  const title = useRef();
  const hero_firstImg = useRef(null);
  const subTitle = useRef();
  const hero = useRef();
  const hero_child = useRef();
  const openingText = useRef(null);
  const firstHeroImg = useRef(null);
  const lastHeroImg = useRef(null);
  useEffect(() => {
    const CSSRulePlug = require("gsap/CSSRulePlugin");
    const CSSRule = require("gsap/CSSPlugin");
    const { CSSRulePlugin } = CSSRulePlug;
    const { CSSPlugin } = CSSRule;
    gsap.registerPlugin(ScrollTrigger, CSSPlugin, CSSRulePlugin);
    const ruleBefore = CSSRulePlugin.getRule(".hero::before");
    const ruleAfter = CSSRulePlugin.getRule(".hero::after");
    //image overlay
    const Hovering = new hoverEffect({
      parent: hero_firstImg.current,
      intensity: 0.2,
      image1: Image1,
      image2: Image2,
      displacementImage: overflay,
      easeind: Sine.easeOut,
    });
    //title reveals
    const split = new SplitText(title.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText(title.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    //bring images to life with scrolltrigger
    const split2 = new SplitText(subTitle.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent2 = new SplitText(subTitle.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    const tl = gsap.timeline({
      ease: Sine.easeOut,
    });
    tl.fromTo(
      ruleBefore,
      {
        cssRule: {
          content: "",
          position: "absolute",
          background: "#FFF",
          width: "0%",
        },
      },
      {
        cssRule: {
          content: "",
          position: "absolute",
          background: "#FFF",
          width: "100%",
        },
        duration: window.innerWidth > 800 ? 2 : 0,
      }
    )
      .fromTo(
        ruleAfter,
        {
          cssRule: {
            content: "",
            position: "absolute",
            background: "#000",
            width: "0%",
          },
        },
        {
          cssRule: {
            content: "",
            position: "absolute",
            background: "#000",
            width: "100%",
          },
          duration: window.innerWidth > 800 ? 2 : 0,
        }
      )
      .fromTo(
        split.lines,
        { y: 1000, opacity: 0 },
        {
          duration: window.innerWidth > 800 ? 2 : 0,
          delay: 0.2,
          y: 0,
          opacity: 1,
          stagger: 0.1,
        }
      )
      .fromTo(
        hero_firstImg.current,
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: window.innerWidth > 800 ? 2 : 0,
        }
      )
      .to(split2.lines, {
        duration: window.innerWidth > 800 ? 2 : 0,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        fontSize: "100px",
      })
      .to(hero_firstImg.current.children[0], {
        scale: 1.6,
        duration: window.innerWidth > 800 ? 2 : 0,
      })
      .fromTo(
        openingText.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: window.innerWidth > 800 ? 2 : 0,
        }
      )
      .fromTo(
        firstHeroImg.current,
        { x: 0, clipPath: "inset(50% 20%)" },
        {
          x: window.innerWidth > 800 ? -50 : 0,
          clipPath: " inset(0%)",
          duration: window.innerWidth > 800 ? 2 : 0,
        }
      )
      .to(firstHeroImg.current.children[0], { scale: 1.2 })
      .to(firstHeroImg.current, { y: window.innerWidth > 800 ? -100 : 0 })
      .fromTo(
        lastHeroImg.current,
        { x: 0, clipPath: "inset(50% 20%)" },
        {
          x: window.innerWidth > 800 ? 50 : 0,
          clipPath: " inset(0%)",
          duration: window.innerWidth > 800 ? 2 : 0,
        }
      )
      .to(lastHeroImg.current.children[0], { scale: 1.2 })
      .to(lastHeroImg.current, { y: window.innerWidth > 800 ? 130 : 0 });
  }, []);
  return (
    <section ref={hero} className="hero">
      <div className={styles._hero}>
        <h1 ref={title}>M... Street Food</h1>
        <div ref={hero_child} className={`${styles._hero_child}`}>
          <div ref={firstHeroImg} className={styles.first_child_hero_img}>
            <img src="/rinco6.jpg" alt="" />
          </div>
          <div ref={hero_firstImg} className={styles.firstImage_Hero}></div>
          <div className={styles.image_hero_text}>
            <h2 ref={subTitle}>Mexico...</h2>
          </div>
          <div ref={lastHeroImg} className={styles.last_child_hero_img}>
            <img src="/rinco9.jpg" alt="" />
          </div>
        </div>
        <div ref={openingText} className={styles.opening_etxt}>
          <p>
            Open at 10:30 4712 S Pulaski Rd, Chicago <br /> Identifies as
            women-owned{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
