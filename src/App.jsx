import { useState } from "react";
import bigImageMobile from "/illustration-sign-up-mobile.svg";
import bigImageDesktop from "/illustration-sign-up-desktop.svg";
import sucess from "/icon-success.svg";
import "./App.css";
import "./index.css";
import PopUp from "./PopUp";
function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };
  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailRegex.test(email) && email !== "";
    setError(!isValid);
    return isValid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false); // Stop loading
        setModal(true); // Show modal after loading is done
      }, 2000);
    }
  };
  return (
    <div className="">
      {modal && <PopUp setModal={setModal} email={email}/>}

      {!modal && (
        <>
          <div className="bg-white rounded-xl md:pl-12 px-0 pt-0 pb-8 md:py-3 md:pr-3 md:shadow-2xl flex md:flex-row flex-col justify-center gap-24">
            <img
              className="w-full md:hidden block"
              src={bigImageMobile}
              alt=""
            />
            <div className="flex flex-col md:pt-10 p-8">
              <h1 className="text-4xl font-bold text-darkBlue pb-4">
                Stay Updated!
              </h1>
              <p className="pb-5">
                Join 60,000+ product managers receiving monthly <br /> updates
                on:
              </p>
              <div className="flex flex-col gap-3 pb-6">
                <div className="flex justify-start items-center gap-4">
                  <img className="w-6" src={sucess} alt="" />
                  <p>Product discovery and building what matters</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <img className="w-6" src={sucess} alt="" />
                  <p>Measuring to ensure updates are a success</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <img className="w-6" src={sucess} alt="" />
                  <p>And much more!</p>
                </div>
              </div>
              <form onSubmit={submitForm} className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <label className="font-bold text-darkBlue" htmlFor="">
                    {" "}
                    Email address
                  </label>
                  {error && (
                    <p className="text-tomato text-xs font-bold">
                      Valid Email required
                    </p>
                  )}
                </div>

                <input
                  className={` p-3 rounded-md ${error ? `error` : `noError`}`}
                  type="text"
                  name="email"
                  value={email || ""}
                  placeholder="email@company.com"
                  onChange={handleChange}
                  required={false}
                />
                <button
                  className="bg-darkBlue text-white p-3 rounded-md mt-3 hover:bg-linearGradient"
                  type="submit"
                >
                  {!loading
                    ? ` Subscribe to monthly newsletter`
                    : "Subscribing..."}
                </button>
              </form>
            </div>

            <img
              className="lg:w-80 md:w-72 hidden md:block"
              src={bigImageDesktop}
              alt=""
            />
          </div>
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://www.frontendmentor.io/profile/Faith-okereke">Okereke FAith</a>.
          </div>
        </>
      )}
    </div>
  );
}

export default App;
