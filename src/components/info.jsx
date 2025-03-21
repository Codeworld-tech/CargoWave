import React from 'react'

const Info = ( props ) => {
  return (
    <>
    <div className='flex items-center  justify-between w-[100%] pr-20 pl-20'style={{flexDirection: props.direction ? 'row-reverse' : 'row'}}>
     <div className='w-[50%]'>
        <button className='mb-5 bg-[#ef684a] font-bold rounded-[8px] text-[#fff] w-[140px] h-[35px] text-[13px] p-1'>About CargoWave</button>
        <h1 className='font-bold text-[#002832] text-[30px]' >We'll keep your items <br /> damage free</h1>
        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore unde harum <br /> repellat ea? Amet eius suscipit incidunt officia ullam recusandae enim animi <br /> aut fugit at magni, vel omnis necessitatibus eum?</p>
        <div className=' w-[550px] h-[120px] rounded-[5px] border-s-5  bg-[#fff] '>
         <ul className='text-[#002832] font-bold p-5'>
          <li> <i class="fa-solid fa-share text-[#ef684a] ml-5 mr-3"></i>Best Transport.</li>
          <li> <i class="fa-solid fa-share text-[#ef684a] ml-5 mr-3"></i> Save and Comfort.</li>
          <li> <i class="fa-solid fa-share text-[#ef684a] ml-5 mr-3"></i> In 2025 No.01 CargoWave. </li>
         </ul>
        </div>
        <div className='flex gap-10'>
            <button className='mt-5 bg-[#002832] w-[150px] cursor-pointer hover:bg-[#bb553e]
   h-[45px] text-[15px] text-[#fff] font-bold rounded-[5px]'>Contact Us <i  class="fa-solid fa-check bg-[#fff] ml-3 text-[#ef684a] p-2 rounded-[3px]"></i> </button>
            <button className='mt-5 bg-[#fff] w-[150px] cursor-pointer
   h-[45px] text-[15px] text-[#002832] font-bold rounded-[5px]' ><i class="fa-solid fa-phone text-[#ef684a] mr-5 text-[20px] "></i>Questions ?</button>
        </div>
     </div>
     <div className='w-[50%]'>
        <img className='w-[600px] h-[600px] object-contain' src={props.image}/></div>
    </div>
    </>
  )
}

export default Info