import React from 'react'

const Footer = () => {
  return (
   <>
  <div className= 'relative w-[100%] h-[auto] mt-30'>
   <div><img className='w-[100%]' src="https://img.freepik.com/premium-photo/high-angle-view-ship-sea_1048944-3334036.jpg?w=900"/>
   <div className='absolute bg-[#002832]/80 inset-0'></div>
   </div>
   <div className='absolute top-1/5 left-1/2 -translate-x-1/2'>
   <h1 className='font-bold text-[#fff] text-[25px] mb-15 ml-17'>CARGOWAVE</h1>
   <h1 className='text-[#fff] font-bold ml-5 text-[15px] mb-20'>Home | Services | About | Contact </h1>
   <span><i class="fa-solid fa-anchor mb-20 text-[#fff] font-bold text-[25px] ml-32"></i></span>
   <p className='text-[#fff] ml-2'>&copy; 2025 CargoWave. All rights reserved.</p>
   </div>
  </div>
   </>
  )
}

export default Footer