import { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const emailEndPoint = process.env.REACT_APP_SEND_EMAIL_ENDPOINT

  // useEffect(() => {
  //   // Check if user is authenticated
  //   checkAuthentication();
  // }, []);

  // const checkAuthentication = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://us-central1-good-foundation-llc.cloudfunctions.net/oauthCallback" // Replace with your OAuth Cloud Function URL
  //     );

  //     if (response.status === 200) {
  //       console.log("authenticateeeeeeeeddddddddddd!!")
  //       setIsAuthenticated(true);
  //     }
  //   } catch (error) {
  //     console.error("Authentication check failed:", error);
  //   }
  // };

  const handleSendMessage = async () => {
    try {
      setError(null)
      setSuccess(false)

      console.log('handleSendMessage triggered');

      if (!name || !message || (!email && !phone)) {
        setError("Please fill in the required fields.");
        return;
      }

      setError(null);
      console.log(emailEndPoint);
      await axios.post(emailEndPoint, {
        name,
        email,
        phone,
        message
      }, { headers: { 'Content-Type': 'application/json' } }
      );

      // Show success message
      setSuccess(true);

      // Clear form fields or show a success message
      setName("");
      setEmail("");
      setPhone(""); // Clear phone input
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error (e.g., show an error message to the user)
      setError("Error sending message. Please try again.");

    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCloseMessage = () => {
    setError(null);
    setSuccess(false);
  };

  return (
    <div className="w-full py-10" id="contact">
      <div className="relative flex flex-col mx-auto space-y-5 md:w-4/4">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase mb-3">
            Contact Us
          </h6>
          <h2 className="text-4xl font-bold text-center">
            <span className="block">
              Do you have any questions? Reach out to us.
            </span>
          </h2>
          {/* <p className="text-center text-gray-600">
            It features multiple CSS components based on the Tailwind CSS design
            system
          </p> */}
        </div>
        <div className="flex flex-col align-items-center p-0 space-x-0 space-y-5 bg-gray-100 rounded-lg md:space-y-0 md:space-x-5 md:flex-row">
          <div className="container my-5 mx-auto md:px-6">
            <section className="mb-3 text-center">
              <div className="mx-auto max-w-[700px] md:px-3">
                {/* <h2 class="mb-12 text-3xl font-bold">Contact us</h2> */}
                <form>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="inputText peer block min-h-[auto] w-full rounded border border-solid border-gray-500 bg-transparent py-[0.5rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90"
                      placeholder="Name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                        name
                          ? "-translate-y-[0.5rem] scale-[0.8] text-primary "
                          : ""
                      }`}
                      htmlFor="exampleInput90"
                    >
                      Name
                    </label>
                  </div>

                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      class=" inputText peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent py-[0.5rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91"
                      placeholder="Email address"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                        email
                          ? "-translate-y-[0.5rem] scale-[0.8] text-primary "
                          : ""
                      }`}
                      for="exampleInput91"
                    >
                      Email address
                    </label>
                  </div>

                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="number"
                      class=" inputText peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent py-[0.5rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="phone"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                        phone
                          ? "-translate-y-[0.5rem] scale-[0.8] text-primary "
                          : ""
                      }`}
                      for="phone"
                    >
                      Phone Number
                    </label>
                  </div>

                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      class=" inputText peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent py-[0.5rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="messageControlTextarea1"
                      rows="4"
                      placeholder="Your message"
                      value={message}
                      onChange={handleMessageChange}
                    ></textarea>
                    <label
                      for="messageControlTextarea1"
                      class={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                        message
                          ? "-translate-y-[0.5rem] scale-[0.8] text-primary "
                          : ""
                      }`}
                    >
                      Message
                    </label>
                  </div>

                  {/* Display error message */}
                  {error && (
                    <div className="text-sm flex justify-between text-red-600 bg-red-200 pl-1 rounded mb-1">
                      <span className="pr-2">{error}</span>
                      <button
                        onClick={handleCloseMessage}
                        className="text-red-800 font-bold bg-red-100 rounded closeButton"
                      >
                        X
                      </button>
                    </div>
                  )}

                  {/* Display success message */}
                  {success && (
                    <div className="text-sm text-green-600 bg-green-200 p-2 rounded flex justify-between">
                      <span className="pr-2">
                        Thank you for your message.
                        We will contact you shortly!
                      </span>
                      <button
                        onClick={handleCloseMessage}
                        className="text-green-800 font-bold"
                      >
                        X
                      </button>
                    </div>
                  )}
                  {/* <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                    <input
                      class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck96"
                      checked
                    />
                    <label
                      class="inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="exampleCheck96"
                    >
                      Send me a copy of this message
                    </label>
                  </div> */}
                  <button
                    type="button"
                    onClick={handleSendMessage}
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    // class="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    class="mb-6 inline-block w-full rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Send
                  </button>
                </form>
              </div>
            </section>
          </div>

          <div
            className="flex flex-col items-start overflow-hidden bg-white border rounded-lg md:w-1/3"
            style={{ minWidth: "fit-content" }}
          >
            <div className="w-full p-10 space-y-5 text-center">
              <span className="px-5 py-1 text-sm text-blue-600 uppercase bg-blue-100 rounded-full">
                Contact Info
              </span>
              {/* <h2 className="space-x-2 text-6xl">
                <span className="font-extrabold">$9</span>
                <small className="text-lg text-gray-400">per month</small>
              </h2> */}
            </div>
            <div className="flex flex-col w-full h-full px-7 py-4 space-y-5 bg-gray-100 border-t">
              <a
                className="px-2 py-3 flex flex-col  text-lg text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50"
                href="Tel: 727-439-9986 "
              >
                <FontAwesomeIcon icon={faPhone} size="xl" className="mb-3" />
                <p style={{ width: "100%", margin: "0" }}>727-439-9986</p>
              </a>
              <a
                className="px-2 py-3 flex flex-col text-lg text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50"
                href="mailto:goodfoundationllc@gmail.com"
                // style={{ marginTop: '50px' }}
              >
                <FontAwesomeIcon icon={faEnvelope} size="xl" className="mb-3" />
                <p style={{ width: "100%", margin: "0" }}>
                  goodfoundationllc@gmail.com
                </p>
              </a>
              <div
                className="px-1 py-3 flex flex-col text-lg text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50"
                href="mailto:goodfoundationllc@gmail.com"
                // style={{ marginTop: '50px' }}
              >
                <FontAwesomeIcon
                  icon={faBusinessTime}
                  size="xl"
                  className="mb-3"
                />
                <p style={{ width: "100%", margin: "0" }}>
                  Mon-Fri: 9:00AM - 5:00PM <br></br> Sat-Sun: 10:00AM - 1:00PM
                </p>{" "}
              </div>
              {/* <div className="space-y-5">
                <h6 className="uppercase">What&apos;s Included</h6>
                <ul className="leading-10 list-disc list-inside">
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Everything in Hobby</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Custom Domain Name</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Analytics</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Publishing Status</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Custom Favicon</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Custom Meta Tags</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Live Site Preview</span>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
