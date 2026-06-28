import React from 'react'
import logo1 from '../assets/logo.png'
import logo2 from '../assets/iaeg-logo.png'

const Organizers = () => {
  return (
    <div>
      <section className='bg-gray-300 px-16 py-16 sm:px-10 md:px-12 lg:px-14 xl:px-18'>
        <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-3'>
                <div className='w-1 h-10 bg-blue-800 rounded undefine'></div>
                <h1 className='text-xl sm:text-2xl lg:text-4xl font-bold text-blue-800'>Organising Bodies</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
                <div className='bg-white flex flex-col items-center rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 gap-3'>
                    <div className='w-26 h-26 flex items-center justify-center'>
                        <img className='w-fit h-14' src={logo1} alt="iseg logo" />
                    </div>
                    <h3 className='text-lg font-semibold text-gray-800 leading-snug'>Indian Society of Engineering Geology (ISEG)</h3>
                    <p className='text-gray-700 pb-7'>The Indian National Group of the International Association for Engineering Geology and the Environment (IAEG), established 15th October 1965.</p>
                </div>
                <div className='bg-white flex flex-col items-center rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 gap-3'>
                    <div className='w-26 h-26 flex items-center justify-center'>
                        <img className='h-14 object-contain' src={logo2} alt="iseg logo" />
                    </div>
                    <h3 className='text-lg font-semibold text-gray-800 leading-snug'>IAEG Commission-43 — Dams and Levees Commission (DLC)</h3>
                    <p className='text-gray-700 pb-7'>Set up in October 2025 under the presidentship of Dr. Visty Dalal (USA). Dr. V.K. Sharma, Former Deputy Director General, GSI, is the Indian representative of the Commission.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Organizers
