import useReveal from "./hooks/useReveal";

import Navbar       from "./components/layout/Navbar";
import Footer       from "./components/layout/Footer";

import Hero         from "./components/sections/Hero";
import About        from "./components/sections/About";
import Skills       from "./components/sections/Skills";
import Services     from "./components/sections/Services";
import Counters     from "./components/sections/Counters";
import Portfolio    from "./components/sections/Portfolio";
import Experience   from "./components/sections/Experience";
// import Testimonials from "./components/sections/Testimonials";
import Contact      from "./components/sections/Contact";


const App = () => {
  useReveal();

  return (
    <div className="font-dm bg-bg text-[#e8edf5] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Counters />
      <Portfolio />
      <Experience />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;