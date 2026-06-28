import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full bg-blue-600 shadow-md fixed top-0 left-0 z-20">
      <nav className="flex items-center justify-between px-3 md:px-5 lg:px-6 xl:px-6 py-4 border-b border-blue-400 bg-blue-600 text-white relative transition-all">
        <div className="flex items-center gap-2 lg:flex lg:flex-1">
          <a href="/">
            <img className="w-12 md:w-14 lg:w-16" src={logo} alt="Logo" />
          </a>
          <div className="text-white flex flex-col justify-center">
            <h1 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold leading-tight">
              ISEG
            </h1>
            <h3 className="text-[6px] md:text-[8px] lg:text-[10px] xl:text-[12px] font-medium whitespace-nowrap">
              India Society of Engineering Geology
              <br />
              <a target="_blank" href="https://www.iaeg.org/">
                Indian National Group of IAEG
              </a>
            </h3>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 text-sm md:text-base lg:text-base xl:text-lg">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Member</a>
          <a href="">Publications</a>
          <a href="">Events</a>
          <a href="">Visit IAEG</a>

          <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
            Contact us
          </button>
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${open ? "flex" : "hidden"} absolute top-[70px] left-0 right-0 mx-3 rounded-2xl border border-blue-300/70 bg-white/95 shadow-2xl py-4 flex-col items-start gap-2 px-5 text-sm md:hidden backdrop-blur-sm`}
        >
          <a
            href="#"
            className="block w-full rounded-xl px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block w-full rounded-xl px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            About
          </a>
          <a
            href="#"
            className="block w-full rounded-xl px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Member
          </a>
          <a
            href=""
            className="block w-full rounded-xl px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Publications
          </a>
          <a
            href=""
            className="block w-full rounded-xl px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Events
          </a>
          <a
            href=""
            className="block w-full rounded-xl px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Visit IAEG
          </a>
          <button className="mt-2 w-full cursor-pointer rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Contact us
          </button>
        </div>
      </nav>
      {/* notification section */}
      <div className="w-full border-y border-orange-300/40 bg-gradient-to-r from-orange-500 via-white to-green-600 px-2 py-2 text-center shadow-sm sm:px-3 md:px-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-sm font-semibold text-slate-900 sm:flex-row sm:gap-3 sm:text-base">
          <span className="inline-flex items-center gap-2">
            ISEG Webinar-4 “Need for Earthquake Hazard Studies in India” by Dr.
            D. Srinagesh, 28 June 2026
          </span>
          <a
            href="#"
            className="rounded-full bg-slate-900 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Register Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
