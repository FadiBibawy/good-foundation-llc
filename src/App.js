// import logo from "./logo.svg";
import "./App.css";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
