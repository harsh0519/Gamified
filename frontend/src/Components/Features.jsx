import React from 'react'
import trophy from '../assets/trophy.png'
import { featuresData } from '../Utils/Data'
const Features = () => {
  return (
    <div className='h-full md:h-screen w-full bg-black '>
         <div className='text-center pt-8 '>
            <h1 className='text-4xl text-fuchsia-400 font-semibold'>TOP FEATURES</h1>
            </div>
            <div  className='grid  flex-1 md:grid-cols-4 grid-cols-1 gap-4 gap-y-11 mx-16 mt-10'>
                {
                    featuresData && featuresData.map(item=>{
                        return(
                            <div key={item.id} className='hover:cursor-pointer flex flex-col '>
                            <div className=' bg-gradient-to-r from-[#455C64CF] to-[#455C6436] py-6 px-1  rounded-2xl flex flex-col justify-center items-center'>
                                    <img src={item.image} alt="error" className='w-32 h-[110px]'/>
                            </div>
                            <p className='text-2xl text-center mt-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-fuchsia-300 left-28'>{item.name}</p>
                            </div>
                        )
                    })
                }
                </div>
    </div>
)
}

export default Features