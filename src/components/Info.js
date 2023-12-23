import { Link as Scroll } from "react-scroll";
import Carousel from "./Carousel";

const Info = () => {
  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="flex flex-col pt-10 mt-10 mx-auto md:w-3/5" id="info">
      <h1 className="text-5xl font-extrabold text-center">
        <span className="block">Good Foundation Group</span>
        <span className="block text-blue-600 text-3xl mt-3">In Florida</span>
      </h1>
      <p className="mt-10 text-center text-gray-600">
        At Good Foundation Construction* LLC, we believe there is more to value
        than just the lowest price. That&apos;s why we provide our clients with
        the highest quality product for the most economical price.
        <br />
        <br />
        As a full-service contractor, we provide the complete range of
        construction services to diverse industries, including commercial,
        industrial, institutional, and medical. We can either work with your
        existing plans or provide you with the comprehensive design/build
        solutions.
      </p>
      <div className="flex items-center justify-center space-x-5 pt-16">
        <Scroll
          to="contact"
          className="px-10 py-3 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-500"
        >
          Contact Us
        </Scroll>
      </div>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Info;
