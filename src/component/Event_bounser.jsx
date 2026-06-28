import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoEye } from "react-icons/go";


const Event_bounser = () => {
  return (
    <div>
       <section
          class="main-container top-spacing bottom-spacing px-16 py-16 sm:px-10 md:px-12 lg:px-14 xl:px-18"
          id="brochure"
        >
          <div class="flex flex-col gap-10">
            <div class="flex items-center gap-3">
              <div class="w-1 h-10 bg-blue-800 rounded-t-md rounded-b-md shadow-xl"></div>
              <h2 class="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-800 undefined">
                Event Brochure
              </h2>
            </div>
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-2/5 relative overflow-hidden bg-gradient-to-br from-blue-800 to-sky-600 min-h-64 flex flex-col items-center justify-center gap-4 p-8">
                  <div class=" text-3xl text-white flex items-center justify-center w-20 h-20 rounded-2xl bg-white/15 shadow-lg">
                    <FaRegFileAlt />
                  </div>
                  <p class="text-white font-semibold text-center leading-snug">
                    International Workshop on Dams and Levees
                  </p>
                  <span class=" inline-flex items-center gap-1.5 bg-white/90 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                    <FaRegFileAlt  className='text-red-800'/>
                    PDF · First Circular
                  </span>
                </div>
                <div class="md:w-3/5 p-8 lg:p-10 flex flex-col justify-center gap-6">
                  <div class="flex flex-col gap-3">
                    <span class="inline-block w-fit px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                      Official Publication · ISEG × IAEG Commission-43
                    </span>
                    <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 leading-snug">
                      Download the Full Brochure
                    </h2>
                    <p class="text-gray-600 text-base leading-relaxed">
                      Get the complete First Circular for the International
                      Workshop on Dams and Levees — workshop themes, key dates,
                      the call for abstracts, venue details, and the field
                      excursion itinerary, all in one document.
                    </p>
                  </div>
                  <div class="flex flex-wrap gap-3">
                    <a
                      href="https://drive.google.com/file/d/1L10VygvARtWsYJJT2KxwhT7kb8fqskh_/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                    >
                      <GoEye />

                      View Brochure
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&amp;id=1L10VygvARtWsYJJT2KxwhT7kb8fqskh_"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200"
                    >
                      <MdOutlineFileDownload className='text-xl' />

                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Event_bounser
