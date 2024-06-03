import Cards from '@/assets/cards.png'
import Amazon from '@/assets/Amazon.png'
import Steam from '@/assets/steam.jpeg'
import Walmart from '@/assets/download.jpeg'
import Itunes from '@/assets/itunes.jpeg'
import Xbox from '@/assets/xbox.jpeg'
import Ebay from '@/assets/ebay.jpeg'
import { Button } from "@/components/ui/button"

const FlexTwo = () => {
    return (
        <div className=' relative'>
            <div className="block md:hidden flex-col md:flex-row justify-between px-auto">
                <div className=" justify-center md:mr-24 w-[380px] md:w-[650px] mt-12 ml-5 md:ml-20 z-20">
                    <img className='z-20' src={Cards} alt="#" />
                </div>
                <a href="https://wa.me/2349169711302">

                    <div className="flex flex-col mt-7 md:mr-56 ">
                        <h1 className="text-[40px] md:text-[50px] text-center md:text-start md:mt-[100px] leading-none font-semibold"> Buy & Sell Giftcards</h1>
                        <h1 className=' mt-4 text-center text-[16px] text-[#878787]'>Topnotch offers a safe and secure platform <br className='hidden md:block' /> to easily send and receive crypto from anyone in the world. <br /> Your transactions are not limited by geographical boundaries.</h1>

                        <img src={Amazon} alt="#" />
                        <img src={Walmart} alt="#" />
                        <img className='mb-9' src={Steam} alt="#" />
                        <img className='mb-9' src={Itunes} alt="#" />
                        <img src={Xbox} alt="#" />
                        <img src={Ebay} alt="#" />
                        <a href="https://wa.me/2349169711302">
                            <Button variant="ghost" className=" md:w-[240px] md:mr-20 p-5 md:p-o  mx-20 mx:mx-0 py-6 mt-6 md:mt-12 border-r-[0.5px] border-0 bg-black text-white font-bold md: text-[20px] ">Create free account<span className="material-symbols-outlined mt-[2.5px] font-extrabold">
                                chevron_right
                            </span></Button>
                        </a>
                    </div>
                </a>
            </div>
            <div className='hidden md:block'>
                <h1 className="text-[40px] md:text-[50px] text-center md:text-center md:mt-[50px] leading-none font-semibold"> Buy & Sell Giftcards</h1>
                <h1 className=' mt-4 mb-20 text-center text-[16px] text-[#878787]'>Topnotch offers a safe and secure platform <br className='hidden md:block' /> to easily send and receive crypto from anyone in the world. <br /> Your transactions are not limited by geographical boundaries.</h1>

                <div className='flex flex-row justify-evenly px-auto'>
                    <div className="flex flex-col">
                        <a href="https://wa.me/2349169711302">
                            <img src={Amazon} alt="#" />
                            <img src={Walmart} alt="#" />

                        </a>
                    </div>
                    <div className="flex-col">
                        <a href="https://wa.me/2349169711302" >
                            <img className='mb-9' src={Steam} alt="#" />
                            <img className='mb-9 mt-20' src={Itunes} alt="#" />

                        </a>
                    </div>
                    <div className="flex-col">
                        <a href="https://wa.me/2349169711302">
                            <img src={Xbox} alt="#" />
                            <img className='mt-20' src={Ebay} alt="#" />

                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FlexTwo
