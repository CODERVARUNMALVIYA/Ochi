import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-10 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
        
        <div className='text  border-t-2 border-b-2 mt-[80px] border-zinc-500 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeat:Infinity , duration:10}} className='text-[#F1F1F1] font-bold uppercase -mb-18 -mt-14 text-[23vw] leading-none'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeat:Infinity , duration:10}} className='text-[#F1F1F1] font-bold uppercase -mb-18 -mt-14 text-[23vw] leading-none'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeat:Infinity , duration:10}} className='text-[#F1F1F1] font-bold uppercase -mb-18 -mt-14 text-[23vw] leading-none'>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee