import React from 'react'

const Back = () => {
  return (
   <>
   <div className='w-[100%] pr-25 pl-25 pt-20'>
    <div className='pl-10 bg-[#fff] w-[100%] h-[410px] rounded-[13px] flex justify-between'>
        <div className='mt-20'>
        <button className='bg-[#ef684a] font-bold text-[#fff] w-[130px] h-[35px] rounded-[6px] hover:bg-[#002832] cursor-pointer mb-5'>Services</button>
         <h1 className='text-[#002832] font-bold text-[25px] mb-5'>CargoWave</h1>
         <p className='text-[#002832] text-[15px] mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Provident veniam alias illo labore soluta voluptatum quo <br /> voluptas repellat ea excepturi maxime illum architecto <br /> tempora, omnis ipsa debitis ullam. Modi, quam.</p>
         <span className='text-[yellow] hover:text-[#002832] cursor-pointer'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
        </div>
        <div>
        <img className='w-[600px] h-[500px] object-contain' src="https://www.transparentpng.com/thumb/truck/front-view-white-truck-png-clipart-Br0Jc1.png"/>
        </div>
    </div>
   </div>
   </>
  )
}

export default Back