import React, { useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Register = () => {
  const [isegMember, setIsegMember] = useState(false);
  const [iaegMember, setIaegMember] = useState(false);
  const [wegMember, setWegMember] = useState(false);
  const [yegMember, setYegMember] = useState(false);

  return (
    <div>
      <section className="bg-gray-300 px-16 py-16 sm:px-10 md:px-12 lg:px-14 xl:px-18">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-10 bg-blue-800 rounded"></div>
            <h1 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-blue-800">Register Your Interest</h1>
          </div>
          <div className="bg-white rounded-2xl ">
            <div className="bg-gradient-to-r from-blue-800 to-sky-600 rounded-t-2xl p-10 text-white h-30 flex flex-col justify-center">
              <h1 className="text-lg sm:text-2xl lg:text-2xl font-semibold">Workshop Registration</h1>
              <p className="">
                Register your interest in the International Workshop on Dams and
                Levees.
              </p>
            </div>
            <div className="px-8 py-8">
              <form action="" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-6">
                  <div>
                    <label htmlFor="title" className="font-medium">
                      Title
                      <span className="text-red-800">*</span>
                    </label>
                    <select
                      id="title"
                      name="title"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white"
                    >
                      <option value="Mr." selected="">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Dr.">Dr.</option>
                      <option value="Prof.">Prof.</option>
                      <option value="Shri">Shri</option>
                      <option value="Smt.">Smt.</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className="font-medium">
                        Name
                        <span className="text-red-800">*</span>
                    </label>
                    <input id="name" type="text"
                    name="name" required
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"/>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organisation" className="font-medium">
                        Organisation
                        <span className="text-red-800">*</span>
                    </label>
                    <input id="organisation" type="text" name="organisation name"
                    required placeholder="Enter the organisation
                     " className="w-full border border-gray-300 px-4 py-2.5 rounded-lg text-sm" />
                  </div>
                  <div>
                    <label htmlFor="Designation" className="font-medium">
                        Designation
                        <span>*</span>
                    </label>
                    <input id="Designation" type="text" name="organisation name"
                    required placeholder="Enter the Designation" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"/>

                  </div>
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium">MEMBERSHIP DETAILS</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="border border-gray-300 bg-gray-300 rounded-lg p-4">
                        <div className="flex justify-between p-2 sm:p-1">
                            <span className=" font-medium text-gray-800">Are you an ISEG member?</span>
                            <div>
                                <button id="yes" onClick={() => setIsegMember(true)} className={`rounded-l h-8 w-14 font-medium transition ${isegMember ? "bg-blue-700 text-white" : "bg-white text-black"}`}>Yes</button>
                                <button id="no" onClick={() => setIsegMember(false)} className={`rounded-r h-8 w-14 font-medium transition ${!isegMember ? "bg-blue-700 text-white" : "bg-white text-black"}`}>No</button>
                            </div>
                            
                        </div>
                        {isegMember && <input type="text" name="detail" required 
                        placeholder="Enter your ISEG membership ID"
                         className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm"/>}
                    </div>
                    <div className="border border-gray-300 bg-gray-300 rounded-lg p-4">
                        <div className="flex justify-between p-2 sm:p-1">
                            <span className="font-medium text-gray-800">Are you an IAEG member?</span>
                            <div className=" rounded-2xl bg-white">
                                <button onClick={() => setIaegMember(true)} className={`rounded-l h-8 w-14 font-medium transition ${iaegMember ? "bg-blue-700 text-white" : "bg-white text-black"}`}>Yes</button>
                                <button onClick={() => setIaegMember(false)} className={`rounded-r h-8 w-14 font-medium transition ${!iaegMember ? "bg-blue-700 text-white" : "bg-white text-black"}`}>No</button>
                            </div>
                            
                        </div>
                        {iaegMember && <input type="text" name="detail" required 
                        placeholder="Enter your IAEG membership ID"
                         className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm"/>}
                    </div>
                    <div className="border border-gray-300 bg-gray-300 rounded-lg p-4">
                        <div className="flex justify-between p-2 sm:p-1">
                            <span className="font-medium text-gray-800">Are you a WEG member?</span>
                            <div>
                                <button onClick={() => setWegMember(true)} className={`rounded-l h-8 w-14 font-medium transition ${wegMember ? "bg-blue-700 text-white" : "bg-white text-black"}`}>Yes</button>
                                <button onClick={() => setWegMember(false)} className={`rounded-r h-8 w-14 font-medium transition ${!wegMember ? "bg-blue-700 text-white" : "bg-white text-black"}`}>No</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="border border-gray-300 bg-gray-300 rounded-lg p-4">
                        <div className="flex justify-between p-2 sm:p-1">
                            <span className="font-medium text-gray-800">Are you a YEG member?</span>
                            <div>
                                <button onClick={() => setYegMember(true)} className={`rounded-l h-8 w-14 font-medium transition ${yegMember ? "bg-blue-700 text-white" : "bg-white text-black"}`}>Yes</button>
                                <button onClick={() => setYegMember(false)} className={`rounded-r h-8 w-14 font-medium transition ${!yegMember ? "bg-blue-700 text-white" : "bg-white text-black"}`}>No</button>
                            </div>
                        </div>
                        
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-800 to-sky-600 rounded-xl p-7
                 w-full h-5 text-white  flex items-center justify-center">Submit Registration  <span><MdOutlineArrowRightAlt className="text-xl text-white" />
                 </span></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
