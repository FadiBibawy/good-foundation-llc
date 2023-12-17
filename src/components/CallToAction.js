import { Link as Scroll } from "react-scroll";

function CallToAction() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-blue-600">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-7/8">
        <div className="flex flex-col space-y-6 text-white">
          <h2 className="text-4xl font-extrabold text-center md:text-6xl">
            <span className="block">
              Constructing Foundations of excellence
            </span>
          </h2>
          <h2 className="text-2xl font-bold text-center md:text-4xl">
            <span className="block">Start contacting us today</span>
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <Scroll
            to="contact"
            className="px-10 py-3 text-xl text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50"
          >
            Contact us Now
          </Scroll>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
