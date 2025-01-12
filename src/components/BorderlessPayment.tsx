import Illustration from '@/assets/FEMA.jpg'

import { Button } from "@/components/ui/button"


const BorderlessPayment = () => {
    return (
        <div className="bg-[#002b47] pt-20 md:pt-32 md:pb-12 pb-3 w-full">
            <div className="flex flex-col-reverse md:flex-row  justify-between md:px-10">
                <div className="flex flex-col px-3">
                    <h1 className="text-[35px] md:text-[45px] mt-5 md:mt-[50px] leading-none font-bold text-white">Do you need help after a disaster?</h1>
                    <h1 className='text-white text-[20px] font-semibold mt-3'>We can help you apply for FEMA disaster assistance and guide you to other resources to help you recover.</h1>
                    <a href="https://wa.me/2349169711302">
                    <Button variant="ghost" className="md:w-[240px] mr-20 md:mr-[200px] md:p-0 md:py-8 p-6 my-5 md:my-8 border-r-[0.5px] border-0 bg-[#c41230] text-white font-bold text-[19px] md:text-[26px] ">Apply Now<span className="material-symbols-outlined mt-[2.5px] font-extrabold">
                        chevron_right
                    </span></Button>

                    </a>
                </div>
                <div className="">
                    <img className='w-full h-[300px] md:h-full rounded-sm' src={Illustration} alt="#" />
                </div>
            </div>
        </div>
    )
}

export default BorderlessPayment