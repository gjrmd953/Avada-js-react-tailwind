import React from 'react'
import Container from './Container'
import MountainImg from "../assets/mountain.png"
import SnowImg from "../assets/snow.png"
import WaterImg from "../assets/water.png"
import SkateboardingImg from "../assets/skateboarding.png"
import JetskiingImg from "../assets/jetskiing.png"
import IceImg from "../assets/ice.png"

const Img = () => {
  return (
    <div>
        <Container>
            <div className="flex justify-between">
                <div className="w-30%">
                    <img src={SkateboardingImg} alt="" />
                    <h3 className='font-IBP font-bold text-[30px] text-[#FF9600] text-center mt-[21px] mb-[90px]'>
                        Skateboarding
                    </h3>
                </div>
                <div className="w-30%">
                    <img src={SnowImg} alt="" />
                    <h3 className='font-IBP font-bold text-[30px] text-[#A69393] text-center mt-[21px] mb-[90px]'>
                       Snow Sports
                    </h3>
                </div>
                <div className="w-30%">
                    <img src={WaterImg} alt="" />
                    <h3 className='font-IBP font-bold text-[30px] text-[#1E1C1C] text-center mt-[21px] mb-[90px]'>
                        Surfing
                    </h3>
                </div>
            </div>


            <div className="flex justify-between">
                <div className="w-30%">
                    <img src={MountainImg} alt="" />
                    <h3 className='font-IBP font-bold text-[30px] text-[#F5F2F2] text-center mt-[21px] mb-[90px]'>
                        Mountain Biking
                    </h3>
                </div>
                <div className="w-30%">
                    <img src={JetskiingImg} alt="" />
                    <h3 className='font-IBP font-bold text-[30px] text-[#161414] text-center mt-[21px] mb-[90px]'>
                       Jet Skiing
                    </h3>
                </div>
                <div className="w-30%">
                    <img src={IceImg} alt="" />
                    <h3 className='font-IBP font-bold text-[30px] text-[#F5F2F2] text-center mt-[21px] mb-[90px]'>
                        Ice Climbing
                    </h3>
                </div>
            </div>

            <div className="">
                <h2 className='font-AL text-[160px] text-[#000000] text-center mb-[271px]'>
                    Extreme Sports
                </h2>
            </div>
        </Container>
    </div>
  )
}

export default Img