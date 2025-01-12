import BlackLogo from '@/assets/topnotchlogoblack.png'

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <div className='bg-[#005288]'>
            <div className='bg-gray-100 px-16 py-6 '>
                <div className='flex gap-x-2'>
                    <div><h1 className='font-bold text-[17px]'>Connect to FEMA</h1></div>
                    <div className='flex gap-x-1 text-[25px] ml-3'>

                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/FEMA/?ref=bookmarks'><FaFacebook /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/fema'><AiFillInstagram /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://x.com/fema'><FaSquareXTwitter /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/fema'><IoLogoYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-24 md:mt-0 md:px-[200px]">
                <div className='flex flex-row-2 gap-x-9 md:gap-x-48 px-8'>
                <div className="flex flex-col leading-loose">
                    <h1 className="font-bold text-3xl mb-6"> Product </h1>
                    <h1> Bitcoin </h1>
                    <h1> Refill </h1>
                    <h1> Digital Assets </h1>
                    <h1> Patricia Card</h1>
                    <h1> Hank</h1>
                    <h1> Patricia Business</h1>

                </div>
                <div className="flex flex-col leading-loose">
                    <h1 className="font-bold text-3xl mb-6"> Company </h1>
                    <h1> About Us </h1>
                    <h1> Careers </h1>
                    <h1> Rates </h1>
                    <h1> Mobile</h1>
                </div>

                </div>
                <div className='flex flex-row-2 gap-x-9 md:gap-x-48 px-8'>
                <div className="flex flex-col leading-loose">
                    <h1 className="font-bold text-3xl mb-6"> Learn </h1>
                    <h1> Blog </h1>
                    <h1> Learning Portal </h1>
                    <h1> Help Center </h1>
                </div>
                <div className="flex flex-col leading-loose">
                    <h1 className="font-bold text-3xl mb-6"> Legal </h1>
                    <h1> Privacy </h1>
                    <h1> Anti-Money Laundering <br className='block md:hidden'/>Policy </h1>
                    <h1> Terms Of Service </h1>
                    <h1 className="font-bold text-3xl "> Community </h1>
                    <h1> Covid-19 </h1>
                </div>
                </div>
            </div>
            <div className="flex justify-start ml-2 md:ml-0 md:justify-end md:px-24 h-[100px] mb-3 md:mb-10">

                <img src={BlackLogo} alt='#'/>
            </div>
        </div>
    )
}

export default Footer
