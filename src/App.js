// import logo from "./logo.svg";
import "./App.css";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  const OPTIONS = {};
  const SLIDE_COUNT = 27;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <div className="App">
        <Navbar />
        <Info />
        <Services />
        <Carousel slides={SLIDES} options={OPTIONS} />

        <Contact />
      </div>
      <Testimonial />
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}

export default App;
