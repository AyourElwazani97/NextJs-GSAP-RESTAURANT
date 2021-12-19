import Head from "next/head";
import Gallery from "../components/gallery/Gallery";
//import Gallery from "../components/gallery/Gallery";
import Hero from "../components/hero/Hero";
import Ourstory from "../components/ourstory/Ourstory";
import Ourservices from "../components/services/Ourservices.";
import Footer from '../components/Footer/Footer'
import Reviews from "../components/reviews/Reviews";
export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="El Rincon De Mexico chicago food" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>
        {`
          body {
            overflow-x: hidden;
          }
        `}
      </style>
      <div>
        <Hero />
      </div>
      <div>
        <Ourstory />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Ourservices/>
      </div>
      <div>
        <Reviews/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
