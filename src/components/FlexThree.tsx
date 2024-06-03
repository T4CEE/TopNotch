import CustomerCare from '@/assets/customer care.png'
import Coin1 from '@/assets/coin1.png'
import Coin2 from '@/assets/coin2.png'
import Client from '@/assets/Client.png'

import { Button } from './ui/button'

const FlexThree = () => {
    return (
        <div className='relative'>
            <div className="flex flex-col-reverse md:flex-row justify-between px-auto">
                <div className=' absolute md:left-[970px] top-3 md:top-[120px] z-10'>
                    <img className=' h-[100px] md:h-[160px]' src={Coin1} alt='#' />
                </div>
                <div className=' absolute right-0 bottom-[1290px] md:bottom-[980px] z-10'>
                    <img className=' h-[160px]' src={Coin2} alt='#' />
                </div>
                <div className="flex flex-col  md:ml-48 px-3">
                    <h1 className="text-[40px] md:text-[50px] mt-7 md:mt-[100px] text-center md:text-start leading-none font-semibold">Pay Bills, Buy <br className='hidden md:block' /> Airtime and <br /> Purchase Data.</h1>
                    <div className='flex flex-row mt-4 px-4'>
                        <div className='flex mt-2'>
                            <div className=' rounded-full h-[19.5px] w-[20px] bg-[#FFF6B6] mt-2'>
                                <span className="material-symbols-outlined pb-2 text-[#FF7A00]">check_circle</span>
                            </div>
                        </div>
                        <div className='flex flex-col ml-5'>
                            <h1 className=' mt-4 text-[16px] font-bold'>Airtime Purchase</h1>
                            <h1 className=' mt-1 text-[16px] text-[#878787]'>Buy airtime (MTN, Airtel, Glo etc) directly <br /> from your BTC wallet.</h1>
                        </div>

                    </div>
                    <div className='flex flex-row px-4'>
                        <div className='flex mt-2'>
                            <div className=' rounded-full h-[19.5px] w-[20px] bg-[#E5F9FF] mt-2'>
                                <span className="material-symbols-outlined pb-2 text-[#222234]">check_circle</span>
                            </div>
                        </div>
                        <div className='flex flex-col ml-5'>
                            <h1 className=' mt-4 text-[16px] font-bold'>Data Subscription</h1>
                            <h1 className=' mt-1 text-[16px] text-[#878787]'>Buy data (Swift, Spectranet, MTN, Airtel, Glo etc) <br /> directly from your BTC wallet.</h1>
                        </div>

                    </div>
                    <div className='flex flex-row px-4'>
                        <div className='flex mt-2'>
                            <div className=' rounded-full h-[19.5px] w-[20px] bg-[#FFF6B6] mt-2'>
                                <span className="material-symbols-outlined pb-2 text-[#FF7A00]">check_circle</span>
                            </div>
                        </div>
                        <div className='flex flex-col ml-5'>
                            <h1 className=' mt-4 text-[16px] font-bold'>Airtime to cash</h1>
                            <h1 className=' mt-1 text-[16px] text-[#878787]'>Bought excess airtime? Convert it to cash <br /> with us and get your value back.</h1>
                        </div>

                    </div>
                </div>

                <div className="flex justify-end md:w-[465px] w-full md:h-[500px] mt-20">
                    <img className='w-full object-contain' src={CustomerCare} alt="#" />
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-col'>
                <div className='flex flex-col justify-center'>
                    <h1 className="text-[40px] md:text-[50px] px-3 md:px-0 mt-7 md:mt-[100px] leading-none font-semibold text-center">Get logistics and all other forms <br className='hidden md:block' /> of deliveries.</h1>
                    <h1 className=' px-3 md:px-0 mt-1 text-[16px] text-[#878787] leading-none text-center'>Topnotch offers a safe and secure platform to easily send and receive crypto from <br className='hidden md:block' /> anyone in the world. Your transactions are not limited by geographical boundaries.</h1>
                    <div className='flex justify-center'>
                        <a href="https://wa.me/2349169711302">
                            <Button variant="ghost" className=" w-[240px] md:mr-20 p-0 py-6 mt-6 md:mt-12 border-r-[0.5px] border-0 bg-black text-white font-bold text-[20px] ">Create free account<span className="material-symbols-outlined mt-[2.5px] font-extrabold">
                                chevron_right
                            </span></Button>

                        </a>

                    </div>
                </div>
                <img className='mt-10 md:my-24 h-[200px] md:h-[400px] w-full md:object-cover' src={Client} alt='#' />

            </div>
        </div>
    )
}

export default FlexThree
