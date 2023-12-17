// import logo from "./logo.svg";
import "./App.css";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Info />
        <Services />
        <Contact />
      </div>
      <Testimonial />
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}

export default App;
