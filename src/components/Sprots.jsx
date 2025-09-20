import React from 'react'
import Container from './Container'

const Sprots = () => {
    return (
        <div className='mb-[98px] bg-[#22647A]'>
            <button className='p-[2px] border-2 border-[#0000001A] ml-4 hover:text-[#ffff] hover:bg-[#034b63] duration-100 ease-in-out cursor-pointer rounded-[5px] text-[18px] font-IBP'>
                Sports Activities Section
            </button>

            <Container>
                <div className="flex">
                    <div className="w-[45%]">
                        <h3 className='font-YEL text-[#FF9600] mt-[120px] mb-[20px]'>
                            Live The Excitement
                        </h3>
                        <h2 className='font-IBP font-bold text-[54px] text-[#F1DDDD] mb-[34px]'>
                            Extreme Sports
                            Activities
                        </h2>
                        <hr className="w-[80px] h-[2px] bg-[#F0E7E7] mb-[143px] border-0" />
                    </div>
                    <div className="w-[55%]">
                        <p className='font-IBP text-[#F4EEEE] mt-[195px] mb-[234px] ml-[50px] mr-[50px]'>
                            Dolor sit amet consectetur adipiscing elit sed con eiusmod tempor incididunt
                            labore etys dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus
                            ipsum dolore commodo viverra maecenas.
                        </p>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Sprots