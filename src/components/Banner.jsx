import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='relative'>
        <div><img className='mb-30 w-[100%]' src="https://img.freepik.com/premium-photo/transportation-logistics_37416-109.jpg?uid=R178072155&ga=GA1.1.859484745.1727363618&semt=ais_keywords_boost" />
        <div className='absolute bg-[#002832]/50 inset-0'></div>
        <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2'>
        <div className='bg-[#002832] w-[600px] h-auto text-center p-10 rounded-[15px]'>
            <h1 className='font-bold text-[#fff] text-[30px] mb-10'>CargoWave</h1>
            <p className='text-[#fff] mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore adipisci assumenda. Ad natus laborum atque, voluptatibus facilis cumque molestiae perspiciatis laudantium ipsa animi temporibus id error est et dolorum.</p>
            <button className='bg-[#ef684a] w-[150px] text-[17px] text-[#fff] font-bold h-[40px] rounded-[5px] cursor-pointer hover:bg-[#b9533c]'>Location<i class="fa-solid fa-location-crosshairs text-[#fff] ml-6 text-[22px]"></i></button>
            
        </div>
        </div>
        </div>
      
    </div>
    </>
  )
}

export default Banner