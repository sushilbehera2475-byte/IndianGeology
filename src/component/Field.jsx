import React from "react";
import dam1 from "../assets/indiraSagarDam4.png";
import dam2 from "../assets/indiraSagarDam5.png";

const Field = () => {
  return (
    <div>
      <section
        className="px-16 py-16 sm:px-10 md:px-12 lg:px-14 xl:px-18"
        id="field"
      >
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <div className="w-1 h-10 bg-blue-800 rounded-t-md rounded-b-md shadow-xl"></div>
            <h2 className="text-xl md:text-3xl lg:text-4xl text-blue-800 font-semibold undefined">
              Field Excursion
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            The event will be dovetailed with a Field Excursion on 13th December
            2026 to the 1000 MW Indira Sagar Power Station, 520 MW Omkareshwar
            Power Station, and 600 MW Floating Solar Project in Central India.
          </p>
          <div className=" bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="grid grid-cols-2">
              <img
                className="w-full h-56 object-cover"
                src={dam1}
                alt="Indira Sagar Dam"
              />
              <img
                className="w-full h-56 object-cover"
                src={dam2}
                alt="Omkareshwar Dam"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col gap-4">
              <span className="inline-block w-fit px-3 py-1 text-lg font-semibold bg-blue-100 text-xs text-blue-800 rounded-full">
                SITE 1
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl text-blue-800 font-semibold undefined">
                1000 MW Indira Sagar Power Station, Khandwa District, Madhya
                Pradesh
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                The Indira Sagar Project is a multipurpose river valley project
                on the Narmada River near Punasa in Khandwa District, Madhya
                Pradesh. The foundation stone was laid on 23 October 1984 by
                Indira Gandhi. Owned and operated by NHDC Ltd., the project
                comprises a 653 m long and 92 m high dam and a powerhouse
                equipped with eight 125 MW Francis turbines, giving an installed
                capacity of 1000 MW. Water is conveyed through 8 m diameter
                penstocks to generate a design energy of 1,423 MU annually. The
                project also provides irrigation benefits to about 1.23 lakh
                hectares of agricultural land. The dam features 12 main and 8
                alternate spillway blocks fitted with 20 radial gates (20 m × 17
                m), while the powerhouse discharges through an 850 m long
                tailrace channel. Completed at a cost of ₹4,355.57 crore, the
                project is one of the largest multipurpose developments in the
                Narmada basin.
              </p>
            </div>
          </div>
          <div className=" bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gradient-to-r from-blue-800 to-sky-600 p-8 flex flex-col items-center justify-center gap-3 text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg">
                  <span className="text-blue-800 font-bold">2</span>
                </div>
                <span className="inline-block w-fit px-3 py-1 text-xs font-semibold bg-white/15 rounded-full uppercase text-white tracking-wider">
                  SITE 2
                </span>
              </div>
              <div className="md:w-2/3 p-8 lg:p-12 flex flex-col gap-4">
                <h3 className="text-lg md:text-2xl lg:text-3xl text-blue-800 font-semibold undefined">
                  520 MW Omkareshwar Power Station & 600 MW Floating Solar
                  Project, Madhya Pradesh
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  The Omkareshwar Project, located on the Narmada River
                  downstream of the Indira Sagar Project in Madhya Pradesh,
                  comprises a 520 MW (8 × 65 MW) hydropower station and an 88 MW
                  floating solar project. Commissioned in November 2007, the
                  project was completed in 43 months, five months ahead of
                  schedule, and is designed to generate 1,167 million units of
                  electricity annually. The project features a 949 m long, 53 m
                  high concrete gravity dam and a 570 m long ogee spillway with
                  23 radial gates. The reservoir also forms part of the 600 MW
                  Omkareshwar Floating Solar Park, one of the world's largest
                  floating solar developments. The total project cost was
                  ₹12,224.73 crore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Field;
