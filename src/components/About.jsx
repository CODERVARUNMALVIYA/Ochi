import React from 'react'

const About = () => {
  return (
    <div className='w-full  bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl'>
        <h1 className=' font-["Neue_Montreal"] text-[3.5vw] px-12 pt-24 leading-[4vw] tracking-tight'>
            Ochi is a strategic partner for fast-growing tech<br/> businesses that need to raise funds, sell products,
            <br/> explain complex ideas, and hire great people.</h1>
            <div className='w-full px-20 py-12 mt-[3vw] bg-[#CDEA68] border-t-2 border-b-2 border-zinc-500 flex justify-between items-center'>
                 <div className='-mt-[15vw] text-md font-["Neue_Montreal"]'><h1>What you can expect:</h1></div>
                 <div className='-mt-[2vw] font-["Neue_Montreal"] text-md'>
                    <h1> We create tailored presentations to help <br/> you persuade your colleagues, clients, or <br/> investors. Whether it's live or digital,<br/>  delivered for one or a hundred people.<br/> <br/> 

                        We believe the mix of strategy and <br/> design (with a bit of coffee) is what<br/>  makes your message clear, convincing,<br/>  and captivating</h1>
                       </div>
                 <div className='mr-20'>
                    <h1>S: <br />
                    Instagram <br />
                    Behance <br />
                    Facebook <br />
                    Linkedin</h1>
                 </div>
            </div>
            <div className='w-full p-12 flex gap-10  '>
              <div className='w-1/2 '>
              <h1 className='text-6xl font-["Neue_Montreal"]'>Our approach:</h1>
              <button className='px-10 py-3 uppercase bg-slate-900 mt-5 flex items-center  gap-5 rounded-full text-white'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                
              </button>
              </div>
              <div className='w-1/2 h-[70vh] '>
              <img className='rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
              </div>

            </div>
    </div>

  )
}

export default About