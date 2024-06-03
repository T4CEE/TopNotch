import Illustration from '@/assets/Illustration.png'

import { Button } from "@/components/ui/button"


const BorderlessPayment = () => {
    return (
        <div className="bg-[#0D0D2B] pt-20 md:pt-40 px-7 md:px-14 pb-3 md:pb-36 w-full">
            <div className="flex flex-col-reverse md:flex-row  justify-between md:px-10">
                <div className="flex flex-col">
                    <h1 className="text-[26px] md:text-[65px] mt-8 md:mt-[150px] leading-none font-bold text-white">Borderless <br /> payments for commerce in <br /> Africa</h1>
                    <a href="https://wa.me/2349169711302">
                    <Button variant="ghost" className="md:w-[340px] mr-20 md:p-0 md:py-8 p-6 my-8 border-r-[0.5px] border-0 bg-[#FDEA02] text-black font-bold text-[19px] md:text-[26px] ">Create free account<span className="material-symbols-outlined mt-[2.5px] font-extrabold">
                        chevron_right
                    </span></Button>

                    </a>
                </div>
                <div className="flex md:mr-24">
                    <img src={Illustration} alt="#" />
                </div>
            </div>
        </div>
    )
}

export default BorderlessPayment