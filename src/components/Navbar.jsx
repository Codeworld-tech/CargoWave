import React from 'react'

const Navbar = () => {
  return (
   <>
   <div className='bg-[#002832] w-[100%] h-[80px] flex justify-between items-center p-10'>
    <h1 className='text-[#fff] font-bold text-[23px] cursor-pointer'><span className='text-[#ef684a]'>C</span>argo<span className='text-[#ef684a]'>W</span>ave</h1>
     <ul className='font-bold flex gap-15 text-[#fff]'>
      <li className='hover:text-[#ef684a] cursor-pointer'>Home</li>
      <li className='hover:text-[#ef684a] cursor-pointer'>Services</li>
      <li className='hover:text-[#ef684a] cursor-pointer'>About</li>
      <li className='hover:text-[#ef684a] cursor-pointer'>Contact</li>
     </ul>
     <div className='flex gap-5'>
      <button className='bg-[#ef684a] w-[100px] h-[40px] cursor-pointer text-[#fff] hover:bg-[#f15635] font-bold rounded-[7px] transition delay-150 duration-300 ease-in-out hover:-translate-x-1 hover:scale-110'>Sign Up</button>
      <button  className='bg-[#ef684a] w-[100px] h-[40px] cursor-pointer text-[#fff] hover:bg-[#f15635]  font-bold rounded-[7px] transition delay-150 duration-300 ease-in-out hover:-translate-x-1 hover:scale-110'>Login</button>
     </div>
   </div>
   </>
  )
}

export default Navbar