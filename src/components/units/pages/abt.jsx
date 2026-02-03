import React from 'react'



export default function Abt() {

    return (
        <div className=' bg-[#1F1F1F]'>


            <div className='flex flex-col md:flex-row justify-center gap-6 items-center bg-[#1F1F1F] '>
                <div className='mt-[80px] md:mt-[100px] flex justify-center'>
                    <img src={require("../../../assets/images/me.jpg")}
                        alt='img' className='h-[250px] w-[250px] md:h-[500px] md:w-[450px] rounded-full md:rounded-none' />


                </div>
                <div className='h-auto w-full md:h-[600px] md:w-[700px] mt-[30px] md:mt-[150px] px-4 md:px-0 text-center md:text-left'>
                    <div className='text-[#1F4C34] text-[42px] leading-[50px] mt-2  '>
                        Hi, I’m Sonali 👋


                    </div>
                    <div className='text-[#1F4C34] text-[20px] mt-[40px]'>
                        A frontend developer based in Pune, Maharashtra,
                        currently gaining hands-on experience through a
                        remote internship at Indux Technology.
                    </div>
                    <div className='text-[#1F4C34] text-[20px] mt-[20px]'>
                        My journey began in technical support, where I spent
                        a year understanding users through emails and chats.
                        That experience shaped how I approach development
                        today—by building interfaces that are thoughtful,
                        responsive, and user-focused.

                    </div>
                    <div className='text-[#1F4C34] text-[20px] mt-[20px]'>
                        These days, I split my time between researching ideas,
                        designing solutions, writing code, and taking care of
                        my health. When work slows down, I turn to plants,
                        cooking, and quiet creative thinking.

                    </div>


                </div>


            </div>

        </div>
    )
}
