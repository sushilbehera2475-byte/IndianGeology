import React from "react";
import dams from "../assets/indiraSagarDam4.png";

const Hero = () => {
  return (
    <div>
      <div className="relative flex min-h-[21rem] items-center justify-center overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover brightness-75"
          src={dams}
          alt="Dams"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/45 to-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[20rem] w-full max-w-5xl flex-col items-center justify-center gap-4 px-4 text-center text-white">
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            International Workshop on Dams and Levees
          </h1>
          <h1 className="text-[1.25rem] font-medium leading-snug sm:text-base md:text-lg lg:text-xl">
            Celebrating 60 years of the Journal of Engineering Geology (JOEG)
            <br />
            12th & 13th December 2026 · Bhopal, Madhya Pradesh
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
