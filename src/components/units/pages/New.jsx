import React, { useState } from 'react'

export default function NewBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full h-16  bg-[#1F1F1F] fixed z-[50]  flex items-center justify-between p-[8px]'>
      <div className=' size-[48px]  bg-[#FFFFFF]  rounded-[24px]
             ml-[10px]  flex items-center justify-between'>
        <div className='ml-[8px]'><img src={require("../../../assets/icons/global-shipping.png")}
          alt='icon' /></div></div>
      <div className='hidden md:flex flex-1 h-16 items-center justify-center text-[#FFFFFF] text-sm md:text-base font-bold px-2'>
        <div onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className='  hover:bg-[#FFFFFF] hover:text-[#1F1F1F] rounded-[4px] p-[4px] md:p-[6px] mx-1'>About</div>
        <div onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })} className='hover:bg-[#FFFFFF] hover:text-[#1F1F1F] rounded-[4px] p-[4px] md:p-[6px] mx-1' >Experience </div>
        <div onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })} className='hover:bg-[#FFFFFF] hover:text-[#1F1F1F] rounded-[4px] p-[4px] md:p-[6px] mx-1' >Education</div>
        <div onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className='hover:bg-[#FFFFFF] hover:text-[#1F1F1F] rounded-[4px] p-[4px] md:p-[6px] mx-1' >Projects </div>
        <div onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} className='hover:bg-[#FFFFFF] hover:text-[#1F1F1F] rounded-[4px] p-[4px] md:p-[6px] mx-1'>Skills</div>

      </div>
      <div className='md:hidden flex items-center'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none'>
          <div className='w-6 h-6 flex flex-col justify-center items-center'>
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-[#1F1F1F] flex flex-col items-center py-4 z-40'>
          <div onClick={() => { document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className='text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1F1F1F] rounded-[4px] p-2 my-1 w-full text-center'>About</div>
          <div onClick={() => { document.getElementById('experience').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className='text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1F1F1F] rounded-[4px] p-2 my-1 w-full text-center'>Experience</div>
          <div onClick={() => { document.getElementById('education').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className='text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1F1F1F] rounded-[4px] p-2 my-1 w-full text-center'>Education</div>
          <div onClick={() => { document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className='text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1F1F1F] rounded-[4px] p-2 my-1 w-full text-center'>Projects</div>
          <div onClick={() => { document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }} className='text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1F1F1F] rounded-[4px] p-2 my-1 w-full text-center'>Skills</div>
          <div className='flex justify-around w-full mt-4'>
            <div className='h-[40px] w-[50px] hover:bg-[#C6C6C6] rounded-[24px] flex justify-center items-center'>
              <a href="tel:+918095154990" target="_blank" rel="noopener noreferrer">
                <img src={require("../../../assets/icons/Call.png")} alt="call" className='flex justify-center' />
              </a>
            </div>
            <div className='h-[40px] w-[50px] hover:bg-[#C6C6C6] rounded-[24px] flex justify-center items-center'>
              <a href="mailto:sonaliirannavar45@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={require("../../../assets/icons/email.png")} alt="email" className='flex justify-center' />
              </a>
            </div>
            <div className='h-[40px] w-[50px] hover:bg-[#C6C6C6] rounded-[24px] flex justify-center items-center'>
              <a href="https://www.linkedin.com/in/sonali-irannavar/" target="_blank" rel="noopener noreferrer">
                <img src={require("../../../assets/icons/linkedin-big-logo.png")} alt="linkedin" className='ml-[8px]' />
              </a>
            </div>
          </div>
        </div>
      )}
      <div className='hidden md:flex h-[52px] w-auto md:w-[300px] bg-[#FFFFFF] rounded-[24px]
          items-center justify-around text-base font-bold px-2'>

        <div className='h-[40px] w-[50px] hover:bg-[#C6C6C6]
                 rounded-[24px] flex justify-center items-center ml-[4px]'>

          <a href="tel:+918095154990" target="_blank"
            rel="noopener noreferrer"> <img src={require("../../../assets/icons/Call.png")}
              alt=" call" className='flex justify-center' /></a></div>


        <div className='h-[40px] w-[50px] hover:bg-[#C6C6C6]
                 rounded-[24px] flex justify-center items-center'>
          <a href="mailto:sonaliirannavar45@gmail.com" target="_blank"
            rel="noopener noreferrer"><img src={require("../../../assets/icons/email.png")}
              alt="email" className='flex justify-center' /> </a></div>



        <div className='h-[40px] w-[50px] hover:bg-[#C6C6C6]
                 rounded-[24px] flex justify-center items-center'>
          <a href="https://www.linkedin.com/in/sonali-irannavar/" target="_blank"
            rel="noopener noreferrer">
            <img src={require("../../../assets/icons/linkedin-big-logo.png")}
              alt="linkedin" className='ml-[8px]' /></a></div>

      </div>
    </div>
  )
}
