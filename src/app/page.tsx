import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Demos from "./components/Demos";
import Trust from "./components/Trust";
import Process from "./components/Process";
import Footer from "./components/Footer";
 
export default function Home() {
  return (
    <> 
      <Navbar />
      <Hero /> 
      <Features />
      <Trust />
      <Demos />
      <Pricing />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}