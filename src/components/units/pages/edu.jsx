import React from 'react'
import A from '../../../assets/icons/edu/alphabet (1).png'
import B from '../../../assets/icons/edu/award.png'
import C from '../../../assets/icons/edu/cooperative (1).png'

export default function Edu() {
 const edu=[
    {id:1, year:'2018-2022',clg:'S.G.Balekundri Institute of Technology',deg:`Bachelor's of Engineering`, spl:'CSE',icon:C},
    {id:2, year:'2016-2018',clg:'MGVM PU college of Science',deg:`PU`, spl:'PCMB',icon:B},
    {id:3, year:'2003-2016',clg:`St.Joseph's Convet High School`,deg:`HSC`, spl:'General-subjects',icon:A},
];


  return (  
    <div className='flex justify-center  bg-[#1F1F1F] '>
        <div className='h-auto min-h-screen p-[20px] md:p-[40px] mt-[60px]'>
             
            <div className='border-[4px] md:border-[8px] h-auto md:h-[600px] w-full max-w-[1000px]
             border-l-[#1F4C34] border-t-[#1F4C34] border-[#1F1F1F]  p-[20px] md:p-[40px] '>
                <div className='text-[32px] md:text-[52px] text-[#1F4C34] mb-[20px]'>Education</div>
                {edu.map((item)=>
               <div className='flex flex-col md:flex-row justify-around gap-2 '>
                 <div className=' h-[65px] w-[54px]  rounded-[4px] mb-4 md:mb-0  ' key={item.id}>
                    <img src={item.icon} alt='img' className={`size-[inherit]  `}/>

                </div >
                <div className=' h-auto md:h-[80px] w-full md:w-[740px] hover:bg-[#1F4C34]  text-[#E3E3E3] hover:text-[#1F1F1F]
                 rounded-[12px] flex flex-col md:flex-row  justify-around items-center mb-[30px] md:mb-[60px] p-4 '>
                    <div className='text-[18px] md:text-[24px] font-bold mb-2 md:mb-0'>{item.year}  </div>
                    <div className='text-[18px] md:text-[24px]  h-auto md:h-[60px] w-full md:w-[540px] text-center md:text-start'> {item.clg}
                        <div className='text-[16px] md:text-[20px] font-bold' > {item.deg} - {item.spl} </div> </div>


                </div>
               </div>)}
               
             </div>
        </div>

    </div>
  )
}
