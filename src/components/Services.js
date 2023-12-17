import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompassDrafting,
  faScrewdriverWrench,
  faPaintRoller,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="w-full py-10" id="services">
      <div className="relative flex flex-col w-3/4 mx-auto space-y-5">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase mb-5">
            Our Services
          </h6>
          <h2 className="text-4xl font-bold text-center">
            <span className="block">A better way to build your Project</span>
          </h2>
          <p className="text-center text-gray-600 mt-5">
            Your vision for a personalized space is our inspiration. We
            collaborate closely with you, incorporating your ideas and
            preferences into every design decision. With our expertise and your
            unique vision, we create spaces that transcend the ordinary,
            offering a one-of-a-kind experience.
          </p>
        </div>
        <div className="flex flex-col py-10 space-x-0 space-y-10 md:space-y-0 md:space-x-5 md:flex-row">
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full">
              <FontAwesomeIcon
                icon={faCompassDrafting}
                size="xl"
                style={{ color: "#ced4de" }}
              />
            </div>
            <h3 className="text-lg font-bold">Interior Renovation</h3>
            <p className="text-center text-gray-400">
              Elevate your space with carefully curated finishes, from resilient
              flooring to exquisite wall treatments. Our architectural expertise
              ensures not just visual allure but durability tailored to y
              space&apos;s unique demands.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                size="xl"
                style={{ color: "#e6e9ef" }}
              />
            </div>

            <h3 className="text-lg font-bold">Remodeling</h3>
            <p className="text-center text-gray-400">
              Transform your space with our remodeling prowess. From residenti
              rejuvenation to commercial reinventi our architects seamlessly
              marry desiy innovation with structural integrity, breathing new
              life into every project.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full">
              <FontAwesomeIcon
                icon={faPaintRoller}
                size="xl"
                style={{ color: "#e6e9ef" }}
              />
            </div>
            <h3 className="text-lg font-bold">Interior Design</h3>
            <p className="text-center text-gray-400">
              a truly unique and personalized space. Embracing the art of
              personalization, we go beyond mere construction to curate an
              environment that resonates with your individual style and
              preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
