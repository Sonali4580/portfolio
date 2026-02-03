import React from 'react'

export default function Exper() {
   const exp=[
    {id:1, ten:"06/2024 - 01/2025", com:'Concentrix',pos:'Technical,Support'},
    {id:1, ten:"04/2025 - 06/2025", com:'TechMahindra',pos:'Technical,Support'},
    {id:1, ten:"06/2024 - 09/2025", com:'Codesage',pos:'Technical,Support'},
   ];

  return (
    <div className=''>
        <div className='bg-[#1F1F1F] px-4 md:px-8 flex justify-center items-center min-h-screen '>
            <div className='bg-[#1F4C34]  h-auto md:h-[700px] w-full max-w-[1300px] rounded-[18px] mt-[100px] md:mt-[250px] p-4 md:p-0'>
                <div className='text-[24px] md:text-[36px] font-semi-bold text-[#E3E3E3]
                 mt-[20px] md:mt-[40px] ml-[20px] md:ml-[40px]'> My Experience </div>
                 <div >
                    {exp.map((item)=>
                    <div className='flex justify-center mt-[20px] '>
                    <div className='h-auto md:h-[100px] w-full max-w-[900px] hover:bg-[#2B523B]
                     rounded-[16px] flex flex-col md:flex-row justify-around items-center text-[18px] md:text-[24px] animate-fadeIn p-4'>
                        <div key={item.id} className='mb-2 md:mb-0'>{item.ten}</div>
                        {/* to create space between have inserted div */}
                        <div className='hidden md:block'></div>
                        <div className='h-auto md:h-[80px] w-full md:w-[500px] text-center md:text-start'>
                            <div className='text-[24px] md:text-[30px] text-[#] '> {item.com}</div>
                            <div className='text-[14px] md:text-[16px] text-[#] '> {item.pos}</div>

                        </div>



                    </div>
                 </div>)}
                  
                
                 
                     
                 </div>
                 
            </div>
        </div>
    </div>
  )
}
