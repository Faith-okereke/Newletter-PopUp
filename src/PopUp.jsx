import React from "react";
import sucess from "/icon-success.svg";
export default function PopUp({ setModal,email }) {
  const closeModal = () => {
    setModal(false);
    window.location.reload()
  };
  return (
    <div className="grid place-items-center min-h-screen relative">
      <div className="w-[400px] bg-white rounded-lg md:p-10   z-10 md:shadow-2xl">
        <div className="flex flex-col gap-5 mb-32 md:m-0 p-6 md:p-0">
          <img className="w-16" src={sucess} alt="" />
          <h1 className="text-4xl font-bold text-darkBlue pb-4">
            Thanks for subscribing!
          </h1>
          <p>
            A confirmation email has been sent to{" "}
            <strong>{email}</strong>
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <div className="fixed md:sticky w-[90%] bottom-6 left-1/2 md:translate-x-0 md:transform-none transform -translate-x-1/2 md:w-full flex justify-center">
  <button
    className="bg-darkBlue text-white p-3 rounded-md mt-6 mx-2 md:mx-0 hover:bg-linearGradient w-full"
    onClick={closeModal}
  >
    Dismiss message
  </button>
</div>

      </div>
    </div>
  );
}
