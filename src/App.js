// import logo from "./logo.svg";
import "./App.css";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Services />
    </div>
  );
}

export default App;
