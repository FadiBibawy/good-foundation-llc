import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Logoimg from "../images/GFLogo.png";

const Navbar = () => {
  const [showMenu, setMenuVisibility] = useState(false);
  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <header className="flex items-center justify-between space-x-3 text-gray-800">
      <Link to="/" className="text-2xl font-bold">
        <img src={Logoimg} alt="Logo" width="200"></img>
      </Link>

      <button className="md:hidden" onClick={toggleMenu}>
        {!showMenu ? (
          <Bars3Icon className="w-8 h-8" />
        ) : (
          <XMarkIcon className="w-8 h-8" />
        )}
      </button>

      <div
        className={[
          "items-center justify-center md:flex-row md:flex md:relative md:bg-transparent md:shadow-none md:top-0 md:backdrop-blur-none md:space-x-3",
          showMenu
            ? "absolute z-50 flex flex-col py-5 space-x-0 rounded shadow-xl md:py-0 left-8 right-8 bg-white top-24 space-y-3 md:space-y-0 px-5"
            : "hidden",
        ].join(" ")}
      >
        <nav className="flex flex-col w-full space-x-0 space-y-3 text-center md:space-y-0 md:space-x-3 md:flex-row">
          <Scroll
            to="services"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            // scroll={false}
            className="px-5 py-2 rounded hover:bg-gray-100"
          >
            <strong>Services</strong>
          </Scroll>
        </nav>
        <nav className="flex flex-col w-full space-x-0 space-y-3 text-center md:space-y-0 md:space-x-3 md:flex-row">
          <Scroll
            to="projects"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            // scroll={false}
            className="px-5 py-2 rounded hover:bg-gray-100"
          >
            <strong>Projects</strong>
          </Scroll>
        </nav>
        <Scroll
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="w-full px-5 py-2 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-500"
          scroll={false}
        >
          Contact us
        </Scroll>
      </div>
    </header>
  );
};

export default Navbar;
