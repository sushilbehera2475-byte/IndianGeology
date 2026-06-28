import React from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiRuler } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";


const Abstracts = () => {
  return (
    <div>
      <section
          class="bg-gray-300 px-16 py-16 sm:px-10 md:px-12 lg:px-14 xl:px-18"
          id="call-for-abstracts"
        >
          <div class="flex flex-col gap-10">
            <div class="flex items-center gap-3">
              <div class="w-1 h-10 bg-blue-800 rounded-t-md rounded-b-md shadow-xl"></div>
              <h2 class="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-800 undefined">
                Call for Abstracts
              </h2>
            </div>
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div class="flex flex-col lg:flex-row">
                <div class="lg:w-3/5 p-8 lg:p-10 flex flex-col gap-5">
                  <div class="text-2xl flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 text-white shadow-md">
                    <FaRegFileAlt />
                  </div>
                  <p class="text-base lg:text-lg text-gray-700 leading-relaxed">
                    Technical contributions are invited from the global
                    community of engineering geologists, dam design
                    professionals, academicians, civil and hydraulic engineers,
                    disaster managers, and policy makers. Extended abstracts not
                    exceeding 500 words are invited for publication in the
                    Workshop proceedings. Abstracts may be submitted on any
                    workshop theme.
                  </p>
                </div>
                <div class="lg:w-2/5 bg-gradient-to-br from-blue-800 to-sky-700 p-8 lg:p-10 flex flex-col gap-6 justify-center">
                  <div class="flex items-start gap-3">
                    <div class="text-xl flex items-center justify-center w-9 h-9 rounded-full bg-white/15 text-white shrink-0">
                        <CiCalendar />
                    </div>
                    <div>
                      <p class="text-blue-100 text-xs uppercase tracking-wide">
                        Deadline
                      </p>
                      <p class="text-white font-semibold">
                        30th September 2026
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="text-xl flex items-center justify-center w-9 h-9 rounded-full bg-white/15 text-white font-semibold shrink-0">
                      
                      <CiRuler />
                    </div>
                    <div>
                      <p class="text-blue-100 text-xs uppercase tracking-wide">
                        Length
                      </p>
                      <p class="text-white font-semibold">
                        500 words (extended abstract)
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="text-xl text-white flex items-center justify-center w-9 h-9 rounded-full bg-white/15 shrink-0">
                      <TiMessage />
                    </div>
                    <div>
                      <p class="text-blue-100 text-xs uppercase tracking-wide">
                        Submit to
                      </p>
                      <p class="text-white font-semibold">info@isegindia.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Abstracts
