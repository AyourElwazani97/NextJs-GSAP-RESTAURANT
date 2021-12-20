import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import SplitText from "../../utils/split3.min.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Sine } from "gsap";
function Ourstory() {
  const titleStory = useRef();
  const ourstory = useRef();
  const paraOurstory = useRef();
  const fixed_Year = useRef(null);
  const twenyOne = useRef(null);
  const twenyTwo = useRef(null);
  const twenyThree = useRef(null);
  const YearsContent = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);
  useEffect(() => {
    gsap.set(paraOurstory.current, { perspective: 400 });
    const spliTitle = new SplitText(titleStory.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParentTitle = new SplitText(titleStory.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    const tl = gsap.timeline({
      ease: Sine.easeOut,
      scrollTrigger: {
        trigger: ourstory.current,
        toggleActions: "play",
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      },
    });
    tl.to(spliTitle.lines, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 2,
    })
      .to(YearsContent.current, {
        opacity: 1,
        x: window.innerWidth > 600 ? 200 : 0,
        duration: 2.5,
        scale: window.innerWidth > 600 ? 1.2 : 1,
      })
      .to(twenyOne.current, { y: 500, duration: 2 })
      .fromTo(twenyTwo.current, { opacity: 0 }, { opacity: 1, duration: 2 })
      .fromTo(
        twenyTwo.current,
        { y: 0, opacity: 1 },
        { y: 500, opacity: 0, duration: 2 }
      )
      .fromTo(twenyThree.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);
  return (
    <section className={styles.ourStorySectyion} ref={ourstory}>
      <div className={styles._ourStory}>
        <h1 ref={titleStory}>Our Story</h1>
        <div className={styles.ourStory_child}>
          <div ref={YearsContent} className={styles.ourStory_Magic_Years}>
            <div ref={fixed_Year}>
              <h1>20</h1>
            </div>
            <div className={styles.handle_all_Years_content}>
              <div className={styles.handle_all_Years_content_child}>
                <div ref={twenyOne} className={styles.content_magic_years}>
                  <h2>19</h2>
                  <div>
                    <img src="/story1.jpg" alt="" />
                  </div>
                </div>
                <div ref={twenyTwo} className={styles.content_magic_years}>
                  <h2>20</h2>
                  <div>
                    <img src="/story2.jpg" alt="" />
                  </div>
                </div>
                <div ref={twenyThree} className={styles.content_magic_years}>
                  <h2>21</h2>
                  <div>
                    <img src="/story3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Ourstory;
