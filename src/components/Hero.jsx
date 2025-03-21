import React from 'react'

const Hero = () => {
  return (
   <>
   <div className='relative'>
   <div className='relatve flex justify-center  overflow-x-hidden w-[100%] object-cover'>
   <img className='w-[25%]' src="https://img.freepik.com/free-photo/transport-logistics- concept_23-2151541931.jpg?ga=GA1.1.859484745.1727363618&semt=ais_hybrid"/>
   <img className='w-[25%]' src="https://img.freepik.com/free-photo/transport-logistics-products_23-2151541831.jpg?t=st=1742452182~exp=1742455782~hmac=961bee5829d7a7e407c8e8b08dafa7d7bd7724b4164ad86df300e40703ec7841&w=360"/>
   <img className='w-[25%]' src="https://img.freepik.com/free-photo/ai-generated-boat-picture_23-2150647945.jpg?ga=GA1.1.859484745.1727363618&semt=ais_hybrid"/>
   <img className='w-[25%]' src="https://img.freepik.com/premium-photo/close-up-passenger-airplane-taxiing-runway-summer-day_165285-1208.jpg?ga=GA1.1.859484745.1727363618&semt=ais_hybrid" />
   <div className='absolute bg-black/50 inset-0'></div>
   </div>
   <h3 className='absolute top-60 left-1/2 transform -translate-x-1/2 font-bold text-[#fff] text-[50px] text-center '>Welcome To CargoWave Transport Service</h3>
   <p className='absolute top-100 left-1/2 transform -translate-x-1/2  text-[#fff] text-[15px] text-center '>Take your business to the next level  with CargoWave new business management tools. <br /> CargoWave will open a new horizon for us.</p>
   <button className='absolute top-115 left-1/2 transform -translate-x-1/2 bg-[#ef684a] w-[200px] cursor-pointer hover:bg-[#bb553e]
   h-[45px] text-[15px] text-[#fff] font-bold rounded-[5px]'>Contact CargoWave   <i  class="fa-solid fa-check bg-[#fff] ml-3 text-[#ef684a] p-2 rounded-[3px]"></i> </button>
   </div>
   
  
   </>
  )
}

export default Hero