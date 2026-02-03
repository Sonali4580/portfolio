import React from 'react'
import S1 from '../../../assets/images/skill/html.png'
import S2 from '../../../assets/images/skill/css-3.png'
import S3 from '../../../assets/images/skill/java-script.png'
import S4 from '../../../assets/images/skill/physics.png'
import S5  from '../../../assets/images/skill/git.png'
import S6 from '../../../assets/images/skill/github.png'
import S7 from '../../../assets/images/skill/icons8-tailwind-css-512 (1).png'
import S8 from '../../../assets/images/skill/typescript.png'
import S9 from '../../../assets/images/skill/icons8-redux-512.png'
import S10 from '../../../assets/images/skill/ant-design-svgrepo-com.svg'
import S11 from '../../../assets/images/skill/mui.png'



export default function Skills() {
    const ski=[
        {id:1,text:'HTML',img:S1},
        {id:2,text:'CSS',img:S2},
        {id:3,text:'JS',img:S3},
        {id:4,text:'REACT',img:S4},
        {id:5,text:'GIT',img:S5},
        {id:6,text:'GITHUB',img:S6},
        {id:7,text:'TAILWIND',img:S7},
        {id:8,text:'TS',img:S8},
        {id:9,text:'REDUX',img:S9},
        {id:10,text:'ANTD',img:S10},
        {id:11,text:' MUI',img:S11}
        
    ];
    

  return (
    <div className='min-h-screen flex  bg-[#1F1F1F] '>
        <div className='m-auto  w-full max-w-[1000px] mt-11 px-4'>
            <div className=' flex justify-center  '>
            <div className='h-auto md:h-[80px] w-full md:w-[800px]   flex  justify-center '>
                <div className='text-[32px] md:text-[54px] text-[#E3E3E3] text-center'>What I work with</div></div>
        </div>

        <div className='mt-[20px]  h-auto md:h-[100%] w-full bg-[#1F4C34] flex flex-wrap items-center justify-around rounded-[12px] p-4 '>
             {ski.map((item)=>
            <div key={item.id} className='h-[150px] md:h-[180px] w-full sm:w-[45%] md:w-[250px] hover:bg-[#2B523B]  flex flex-col gap-[10px] justify-center items-center  rounded-[12px] mb-4 '>
                <img  src={item.img} alt='' className='h-[100px] md:h-[130px] w-[120px] md:w-[150px] '/>
                <div className='font-bold text-center'>{item.text}</div>
            </div>)}
        </div>
       
        </div>
        

    </div>
  )
}
