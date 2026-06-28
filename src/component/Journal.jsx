import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";



const Journal = () => {
  return (
    <div>
      <section
          className="main-container top-spacing bottom-spacing bg-white rounded-xl mt-8 px-16 py-16 sm:px-10 md:px-12 lg:px-14 xl:px-18"
          id="journal-jubilee"
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 bg-blue-800 rounded-t-md rounded-b-md shadow-xl"></div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-800 undefined">
                60 Years of the Journal of Engineering Geology
              </h2>
            </div>
            <p className="tracking-wider text-base lg:text-xl">
              The ISEG's flagship journal, "Journal of Engineering Geology," was
              launched in 1966 and has since been published regularly. The
              bi-annual journal remains India's only publication exclusively
              dedicated to engineering geology. To date, 58 issues have been
              released, with the intent to continue publishing more informative
              articles meeting the requirements of a changing field of
              investigation.
            </p>
            <p className="tracking-wider text-base lg:text-xl">
              The JoEG now carries a DOI (Digital Object Identifier) on its
              articles and is visible across the years of its publication on the
              ISEG website. The celebration paves the way for JoEG to continue
              its journey toward its Platinum year in 2042.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center gap-3">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md">
                 <IoBookOutline className='text-xl text-white'/>

                </div>
                <h3 className="text-2xl font-bold text-gray-800">1966</h3>
                <p className="text-gray-500 text-sm uppercase tracking-wide">
                  First Issue
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center gap-3">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md">
                  <FiFileText className='text-xl text-white'/>

                </div>
                <h3 className="text-2xl font-bold text-gray-800">58</h3>
                <p className="text-gray-500 text-sm uppercase tracking-wide">
                  Issues to Date
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center gap-3">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md">
                  <IoDiamondOutline className='text-xl text-white'/>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">2042</h3>
                <p className="text-gray-500 text-sm uppercase tracking-wide">
                  Platinum Year
                </p>
              </div>
            </div>
            <div className="relative flex justify-between items-center px-4 lg:px-12 py-6">
              <div className="absolute left-4 right-4 lg:left-12 lg:right-12 top-1/2 h-0.5 bg-gradient-to-r from-blue-800 via-sky-500 to-blue-800 -translate-y-1/2"></div>
              <div className="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 ring-4 ring-blue-50"></div>
                <p className="font-bold text-blue-800">1966</p>
                <p className="text-xs text-gray-500 text-center max-w-[7rem]">
                  First Issue Published
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 ring-4 ring-blue-50"></div>
                <p className="font-bold text-blue-800">2026</p>
                <p className="text-xs text-gray-500 text-center max-w-[7rem]">
                  60th Year Celebrated
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 ring-4 ring-blue-50"></div>
                <p className="font-bold text-blue-800">2042</p>
                <p className="text-xs text-gray-500 text-center max-w-[7rem]">
                  Platinum Year
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 rounded-xl p-8 flex flex-col gap-3 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-quote text-blue-300"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              </svg>
              <p className="text-gray-700 text-base lg:text-lg italic leading-relaxed">
                The commemoration of 60 years of the Journal, as a sequel to 60
                years of the Society in 2025, forms an integral part of this
                event. The celebration will feature a "Commemorative Special
                Issue" — an assorted collection of articles from stalwarts in
                the field of Engineering Geology.
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Journal
