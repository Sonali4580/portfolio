import React from 'react'

export default function Projects() {
function tranf(e){

    e.currentTarget.style.transform=" translate(-150px ,-90px) scale(.3) rotateY(180deg)";


 }

  return (
    <div className=' h-screen bg-[#1F1F1F]'>

        <div className='text-[#1F4C34] text-4xl md:text-6xl lg:text-7xl font-bold p-8 md:p-12 lg:p-16'>
            Projects
        </div>
<div className='w-full flex justify-center relative perspective-[1000px] mb-32 md:mb-40 lg:mb-48'>
    <div onClick={tranf}  id='bb' className='  class="animate-flip-horizontal-fwd"
  h-48 w-80 md:h-72 md:w-96 lg:h-80 lg:w-96 m-auto rounded-[14px]
 bg-[blue] relative [backface-visibility:hidden] flex z-[18]  '>
    <img src={require("../../../assets/images/Capture.PNG")} alt='' className='h-48 w-80 md:h-72 md:w-96 lg:h-80 lg:w-96 rounded-[14px]'/>




 </div><div   className='  h-48 w-80 md:h-72 md:w-96 lg:h-80 lg:w-96  rounded-[14px] hover:bg-[#2B523B]
 bg-[#1F4C34] absolute flex justify-center items-center  z-[0]'><div className='text-3xl md:text-5xl lg:text-6xl  hover:text-[#1F1F1F] '>
    <a href='https://sonalirannavar.netlify.app/'> Preview</a></div></div>
 
 
 </div>
 </div>

 
 
 
    
  )
}
