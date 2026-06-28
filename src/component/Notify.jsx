import React from "react";
import { RiFileList3Line } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

const Notify = () => {
  return (
    <div>
      <section
        className="bg-gray-300 px-16 py-16 sm:px-10 md:px-12 lg:px-14 xl:px-18" id="venue">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <div className="w-1 h-10 bg-blue-800 rounded-t-md rounded-b-md shadow-xl"></div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-800 undefined">
              The Venue
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-800 to-sky-600 p-10 flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/15">
                  <RiFileList3Line className="text-2xl text-white"/>

                </div>
                <h3 className="text-white text-xl font-semibold leading-snug">
                  Kushabhau Thakre International Convention Center
                </h3>
                <p className="text-blue-100 text-sm flex items-center gap-1.5">
                  <CiLocationOn  />

                  Bhopal, Madhya Pradesh
                </p>
              </div>
              <div className="md:w-3/5 p-8 lg:p-10 flex flex-col justify-center gap-4">
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  The International Workshop on Dams and Levees shall be held at
                  the Kushabhau Thakre International Convention Center, Bhopal,
                  Madhya Pradesh, a leading convention venue in Central India.
                  The workshop will be conducted in hybrid mode, enabling
                  participation both in-person and online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notify;
