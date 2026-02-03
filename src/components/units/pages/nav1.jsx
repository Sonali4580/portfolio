import React from 'react'

export default function Nav1() {
    return (

        
        <div className='h-screen sticky top-0 bg-[#1F1F1F]'>
           
            <div className=''>
                <div className='flex justify-center ' >

                <p className='text-[80px] font-semibold text-[#1F4C34] animate-fadeIn mt-[50px]'>
                    Sonali Irannavar

                </p>
            </div>
            <div className='h-[400px] flex justify-center  '>
                <img src={require("../../../assets/images/me.jpg")} alt="How I Look"
                    className='h-[400px] w-[300px] ' />

            </div>
            <div className='  flex justify-center '>
                <div className='h-[200px] w-[800px]'>
                    <p className='text-[60px] font-semibold text-center
                      text-[#1F4C34] animate-fadeIn '>Frontend Developer crafting intuitive experiences</p>
                </div>

            </div>
            
            </div>
            
        </div>
    )

        
        
}
