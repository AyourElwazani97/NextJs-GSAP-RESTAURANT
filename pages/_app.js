import { useEffect, useRef } from "react";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  const costumCursur = useRef(null);
  const Checkers = () => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        costumCursur.current.style.transform = "scale(1.6)";
        costumCursur.current.style.border = "10px solid #FFF";
      });
      img.addEventListener("mouseleave", () => {
        costumCursur.current.style.transform = "scale(1)";
        costumCursur.current.style.border = "2px solid #FFF";
      });
    });
  };
  useEffect(() => {
    Checkers();
    costumCursur.current.style.display = "none";
    document.addEventListener("mousemove", (e) => {
      costumCursur.current.style.display = "block";
      const X = e.clientX;
      const Y = e.clientY;
      costumCursur.current.style.left = `${X}px`;
      costumCursur.current.style.top = `${Y}px`;
    });
  }, []);
  /* const ImageHovering = () => {
    ===> getBoundingClientRect
    const getImage = document.getElementById("delta");
    if (getImage) {
      getImage.addEventListener("mouseenter", (e) => {
        const x = e.clientX;
        const y = e.clientY;
      });
      getImage.addEventListener("mouseleave", (e) => {
        getImage.style.transform = "scale(1)";
      });
    } else {
      return null;
    }
  };
  useEffect(() => {
    ImageHovering();
  }, []); */
  return (
    <>
      <Component {...pageProps} />
      <div className="costumCursur" ref={costumCursur}></div>
    </>
  );
}

export default MyApp;
