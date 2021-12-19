import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Expo } from "gsap";
import { useInView } from "react-intersection-observer";
gsap.registerPlugin(ScrollTrigger);
function Gallery() {
  const mainGallery = useRef(null);
  const green_panel = useRef(null);
  const greenPanelTitle = useRef(null);
  const greenPanle_ImageHandler = useRef(null);
  const greenPanelSubTitle = useRef(null);
  const images = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    //horizontal scroll
    if (window.innerWidth > 620) {
      const sections = gsap.utils.toArray(".panel");
      return gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".wrappingIT",
          pin: true,
          start: "top top",
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            inertia: false,
            duration: { min: 2, max: 2 },
          },
          end: () => "+=" + document.querySelector(".wrappingIT").offsetWidth,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 620) {
      const tl = gsap.timeline({
        ease: Expo.easeOut,
        delay: 0.6,
        duration: 1,
        scrollTrigger: {
          trigger: mainGallery.current,
          start: "top 100%",
          scrub: 1,
        },
      });
      tl.to(greenPanle_ImageHandler.current, {
        scale: 1.2,
      })
        .to(greenPanle_ImageHandler.current.children[0], { scale: 1.6 })
        .to(greenPanelTitle.current, {
          x: -20,
          color: "transparent",
          webkitTextStroke: "4px #FFF",
          zIndex: 9,
        });
    }
  }, []);
  const MainMexico = useRef(null);
  useEffect(() => {
    const tls = gsap.timeline({
      ease: Expo.easeOut,
      scrollTrigger: {
        trigger: MainMexico.current,
        start: "top",
        end: "+=300%",
      },
    });
    tls
      .fromTo(
        images.current.children[0],
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: -100,
        }
      )
      .fromTo(
        images.current.children[3],
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: 160,
        }
      )
      .fromTo(
        images.current.children[2],
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: -20,
        }
      )
      .fromTo(
        images.current.children[4],
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: 130,
        }
      )
      .fromTo(
        images.current.children[1],
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: -100,
        }
      )
      .fromTo(
        images.current.children[5],
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: 100,
        }
      );
  }, []);
  return (
    <div ref={mainGallery} className="wrappingIT">
      <div ref={green_panel} className="panel green">
        <span className="greenPanelTitle" ref={greenPanelTitle}>
          F**ing
        </span>
        <div ref={greenPanle_ImageHandler} className="greenPanle_ImageHandler">
          <img src="/mexican-food.jpg" alt="" />
        </div>
        <span ref={greenPanelSubTitle} className="greenPanelSubTitle">
          DELICIOUS
        </span>
      </div>
      {/* animating second panel */}
      <div ref={MainMexico} className="panel white">
        <h1>MEXiCAN FOOD, iT&apos;S AUTHENTiC</h1>
        <div ref={images} className="whitePannelGrid">
          <img
            src="/image2.jpg"
            width="200"
            height="300"
            alt="restaurant chicago el rincon de mexico"
          />
          <img
            src="/rinco.jpg"
            width="200"
            height="300"
            alt="restaurant chicago el rincon de mexico"
          />
          <img
            src="/rinco1.jpg"
            width="200"
            height="300"
            alt="restaurant chicago el rincon de mexico"
          />
          <img
            src="/rinco2.jpg"
            width="200"
            height="300"
            alt="restaurant chicago el rincon de mexico"
          />
          <img
            src="/rinco3.jpg"
            width="200"
            height="350"
            alt="restaurant chicago el rincon de mexico"
          />
          <img
            src="/rinco4.jpg"
            width="200"
            height="300"
            alt="restaurant chicago el rincon de mexico"
          />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
