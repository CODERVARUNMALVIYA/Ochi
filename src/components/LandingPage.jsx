import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-[#F1F1F1] pt-2'>
        <div className=' textstructure mt-32 px-14'>
        {["WE Create", "eye-opening", "Presentations"].map((item,index) => {
          return  <div className=" masker ">
            <div className='w-fit flex items-center'>
              {index === 1 && (<div className=' w-[9vw] h-[5vw] relative top-1.5 rounded bg-red-400'></div>)}
          <h1 className='font-["Founders Grotesk"] leading-[6.5vw] tracking-tighter text-[7vw] font-bold uppercase'>{item}</h1>
      </div>
      </div>
    })}
           
        </div>
        <div className='border-t-[1px] px-6 border-zinc-400 mt-32 flex justify-between items-center'>
          {['For public and private companies','from the first pitch to IPO'].map((item,index)=> <p
           className='text-md font-normal tracking-tight leading-none py-5 px-20'>{item}</p>)}
           <div className='start flex items-center gap-3'>
          <div className='px-4 py-1 border-[1px] rounded-full Uppercase  border-zinc-400 capitalize text-md font-medium'>start the project</div>
          <div className='w-8 h-8 flex items-center justify-center  border-[1px] rounded-full border-zinc-400'>
            <span className='rotate-[45deg]'> <FaArrowUpLong/></span>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default LandingPage