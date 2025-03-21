import React from 'react'

const Cards = (props) => {
  return (
    <>
    
       <div className=' rounded-[10px] bg-[#f2f2f2]  border-[2px] border-solid border-[#002832] w-[350px] p-5 h-[470px] rounded-10px text-center'>
        <img className='  w-[100%] h-[250px] rounded-[7px] mb-5' src={props.image}/>
       <h1 className=' mb-5 font-bold text-[#002832] text-[20px]'>CargoWave</h1>
        <p className='text-[15px] text-[#002832] mb-5'>CargoWave - Fast, reliable transport booking and logistics service</p>
        <button className='rounded-[6px] cursor-pointer hover:bg-[#002832] bg-[#ef684a] font-bold text-[#fff] w-[100%] h-[40px] mb-5'>Booking </button>
      
        </div> 
    
    </>
  )
}

export default Cards