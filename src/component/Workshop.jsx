import React from 'react'

const Workshop = () => {
  return (
    <div>
      <section
          className="main-container top-spacing bottom-spacing px-16 py-16 sm:px-10 md:px-12 lg:px-14 xl:px-18"
          id="themes"
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 bg-blue-800 rounded-t-md rounded-b-md shadow-xl"></div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-800 undefined">
                Workshop Themes
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-800 to-sky-600"></span>
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md text-white font-bold text-lg shrink-0">
                  01
                </div>
                <p className="text-gray-800 text-base font-medium leading-relaxed">
                  Dam construction challenges in different geological
                  environments
                </p>
              </div>
              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-800 to-sky-600"></span>
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md text-white font-bold text-lg shrink-0">
                  02
                </div>
                <p className="text-gray-800 text-base font-medium leading-relaxed">
                  Geo-hazard risks and mitigation strategies (focus on dams and
                  levees)
                </p>
              </div>
              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-800 to-sky-600"></span>
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md text-white font-bold text-lg shrink-0">
                  03
                </div>
                <p className="text-gray-800 text-base font-medium leading-relaxed">
                  Monitoring and long-term safety management
                </p>
              </div>
              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-800 to-sky-600"></span>
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md text-white font-bold text-lg shrink-0">
                  04
                </div>
                <p className="text-gray-800 text-base font-medium leading-relaxed">
                  Emergency Action Plan for dams
                </p>
              </div>
              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-blue-800 to-sky-600"></span>
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 to-sky-600 shadow-md text-white font-bold text-lg shrink-0">
                  05
                </div>
                <p className="text-gray-800 text-base font-medium leading-relaxed">
                  Geo-education on engineering geosciences, technical writing
                  and editing of engineering geology reports
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Workshop
