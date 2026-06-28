import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { MdOutlineForwardToInbox } from "react-icons/md";



const Event_detail = () => {
  return (
    <div>
       <section
          className="bg-gray-400 main-container top-spacing bottom-spacing px-16 py-16 sm:px-10 md:px-12 lg:px-14 xl:px-18"
          id="details"
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 bg-blue-800 rounded-t-md rounded-b-md shadow-xl"></div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-800 undefined">
                Event Details
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Upcoming — First Circular
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white text-gray-600 border border-gray-200 text-xs font-medium px-3 py-1.5 rounded-full">
                ISEG × IAEG Commission-43
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white text-gray-600 border border-gray-200 text-xs font-medium px-3 py-1.5 rounded-full">
                60 Years of JoEG
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-800 to-sky-600"></span>
                <div className="flex items-center gap-3">
                  <div className=" text-xl text-white flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md shrink-0">
                    <CiCalendar />

                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Dates
                  </h3>
                </div>
                <div className="text-gray-800 text-base font-medium leading-snug">
                  12th &amp; 13th December 2026
                </div>
              </div>
              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-800 to-sky-600"></span>
                <div className="flex items-center gap-3">
                  <div className="text-xl text-white flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md shrink-0">
                    <MdOutlineLocationOn />

                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Venue
                  </h3>
                </div>
                <div className="text-gray-800 text-base font-medium leading-snug">
                  Kushabhau Thakre International Convention Center, Bhopal,
                  Madhya Pradesh
                </div>
              </div>
              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-800 to-sky-600"></span>
                <div className="flex items-center gap-3">
                  <div className="text-xl text-white flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md shrink-0">
                    <TbWorld />

                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Mode
                  </h3>
                </div>
                <div className="text-gray-800 text-base font-medium leading-snug">
                  Hybrid
                </div>
              </div>
              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-800 to-sky-600"></span>
                <div className="flex items-center gap-3">
                  <div className="text-xl text-white flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md shrink-0">
                    <MdOutlineForwardToInbox />

                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Abstract Submission
                  </h3>
                </div>
                <div className="text-gray-800 text-base font-medium leading-snug">
                  Closes 30th September 2026 — info@isegindia.org
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Event_detail
