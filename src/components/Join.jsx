import React from 'react'
import Container from './Container'
import JoinLeftImg from "../assets/joinleft.png"
import JoinRightImg from "../assets/joinright.png"
import JoinIcon from "../assets/joinicon.png"

const Join = () => {
    return (
        <div className=''>
            <Container>
                <div className="flex justify-between">
                    <div className="w-[55%]">
                        <h4 className='font-YEL text-[30px] text-[#14B9F1] mt-[20px] mb-[16px]'>
                            Feel  The Excitement
                        </h4>
                        <h2 className='font-IBP font-bold text-[54px] text-[#000000] mb-[29px]'>
                            Join Us And Embark On New Adventures
                        </h2>
                        <hr className="w-[80px] h-[2px] bg-[#000000] mb-[48px] border-0" />
                        <p className='font-IBP text-[18px] text-[#000000] mb-[35px] mr-[124px]'>
                            Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus commodo viverra sed ipsum maecenas.
                        </p>
                        <p className='font-IBP text-[18px] text-[#000000] mb-[46px] ml-[23px] mr-[162px]'>
                            Unde omnis iste natus error sit voluptatem dolore
                            Eaque ipsa quae ab illo inventore veritatis quasi que
                            Accusantium dolore que laudantium totamrem periam
                        </p>
                        <div className="">
                            <h3 className='px-[41px] py-[20px] font-IBP font-bold text-[18px] text-[#000000] bg-[#14B9F1] hover:text-white hover:bg-[#FF9600] w-fit cursor-pointer '>
                                Discover More
                            </h3>
                        </div>
                    </div>

                    <div className=" w-[45%] flex justify-between">
                        <div className="mb-[110px]">
                            <img className='w-[274px]' src={JoinLeftImg} alt="" />
                        </div>

                        <div className="">
                            <img className='w-[237px] items-center mt-[50px]' src={JoinRightImg} alt="" />
                        </div>
                    </div>

                </div>

                <div className="mb-[40px]">
                    <div className="flex space-x-10">
                        <div className="w-1/4 bg-[#F4F2BF] text-center py-[32px] relative">
                            <img className='ml-[60px]' src={JoinIcon} alt="" />
                            <h2 className='font-IBP font-bold text-[80px] text-[#000000] mb-[2px]'>
                                10+
                            </h2>
                            <p className='font-IBP text-[18px] text-[#000000]'>
                                Sports Activities
                            </p>
                            <img className='ml-[230px]' src={JoinIcon} alt="" />
                        </div>

                        <div className="w-1/4 bg-[#F4F2BF] text-center py-[32px] relative">
                            <img className='ml-[60px]' src={JoinIcon} alt="" />
                            <h2 className='font-IBP font-bold text-[80px] text-[#000000] mb-[2px]'>
                                 3k+
                            </h2>
                            <p className='font-IBP text-[18px] text-[#000000]'>
                                Registered Enthusiasts
                            </p>
                            <img className='ml-[230px]' src={JoinIcon} alt="" />
                        </div>

                        <div className="w-1/4 bg-[#F4F2BF] text-center py-[32px] relative">
                            <img className='ml-[60px]' src={JoinIcon} alt="" />
                            <h2 className='font-IBP font-bold text-[80px] text-[#000000] mb-[2px]'>
                                15+
                            </h2>
                            <p className='font-IBP text-[18px] text-[#000000]'>
                                Years of Experience
                            </p>
                            <img className='ml-[230px]' src={JoinIcon} alt="" />
                        </div>

                        <div className="w-1/4 bg-[#F4F2BF] text-center py-[32px] relative">
                            <img className='ml-[60px]' src={JoinIcon} alt="" />
                            <h2 className='font-IBP font-bold text-[80px] text-[#000000] mb-[2px]'>
                               9.5
                            </h2>
                            <p className='font-IBP text-[18px] text-[#000000]'>
                                SAverage Rating
                            </p>
                            <img className='ml-[230px]' src={JoinIcon} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Join