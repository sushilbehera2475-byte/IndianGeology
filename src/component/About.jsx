import React from 'react'

const About = () => {
  return (
    <div>
       <section
          className="main-container top-spacing bottom-spacing px-16 py-16 sm:px-10 md:px-12 lg:px-14 xl:px-18"
          id="about"
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 bg-blue-800 rounded-t-md rounded-b-md shadow-xl"></div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-800 undefined">
                About the Workshop
              </h2>
            </div>
            <div className="flex flex-wrap divide-x divide-gray-200 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100">
              <div className="flex-1 min-w-[8rem] px-6 py-5 text-center">
                <p className="text-2xl lg:text-3xl font-bold text-blue-800">
                  1965
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                  ISEG Established
                </p>
              </div>
              <div className="flex-1 min-w-[8rem] px-6 py-5 text-center">
                <p className="text-2xl lg:text-3xl font-bold text-blue-800">
                  60
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                  Years of JoEG
                </p>
              </div>
              <div className="flex-1 min-w-[8rem] px-6 py-5 text-center">
                <p className="text-2xl lg:text-3xl font-bold text-blue-800">
                  Comm-43
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                  IAEG Dams & Levees
                </p>
              </div>
            </div>
            <p className="tracking-wider text-base lg:text-xl">
              The Indian Society of Engineering Geology (ISEG), the Indian
              National Group of the International Association for Engineering
              Geology and the Environment (IAEG), was established on 15th
              October 1965. ISEG, through its global linkages, actively
              contributes to international cooperation and professional
              development in the field of Engineering Geology.
            </p>
            <p className="tracking-wider text-base lg:text-xl">
              To mark the 60th year of publication of the Journal of Engineering
              Geology, ISEG in association with IAEG Commission 43 is jointly
              organising this International Workshop on Dams and Levees. The Dam
              and Levees Commission-43 (DLC) of the IAEG was set up in October
              2025, under the presidentship of Dr. Visty Dalal from the United
              States of America, with representatives across the globe. Dr. V.K.
              Sharma, Former Deputy Director General, GSI, is the Indian
              representative of the Commission.
            </p>
            <p className="tracking-wider text-base lg:text-xl">
              The Commission aims to advance best practices in dam and levee
              engineering while fostering global collaboration among engineering
              geologists. Its mission is to strengthen professional knowledge
              and public safety by building a cross-institutional and
              cross-disciplinary network connecting geologists, geotechnical
              engineers, academics, and practitioners across government,
              private, and professional societies.
            </p>
            <p className="tracking-wider text-base lg:text-xl">
              The International Workshop on Dams and Levees will address the
              feasibility, construction, and post-construction challenges of dam
              projects across diverse geological terrains.
            </p>
          </div>
        </section>
      
    </div>
  )
}

export default About
