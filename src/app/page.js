import Image from "next/image";
import styles from "./page.module.css";
import Hero2 from "./components/Hero2";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import TrustTestimonials from "./components/TrustTestimonials";
import TrustIndicators from "./components/TrustIndicators";
import Contact from "./components/Contact";
// import Services from "./components/Services";

export default function Home() {
  return (
   <>
                <Hero2 />
                {/* <TrustIndicators /> */}
               
                <About />
                <Process/>
                <TrustTestimonials />
                <Services />
                <Contact/>
   </>
  );
}
