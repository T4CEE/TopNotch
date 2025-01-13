import NTAS from '@/assets/NTAS.png'
import FemaLogo from '@/assets/fema logo.png'
import {Link} from 'react-router-dom'

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <div className='bg-[#005288]'>
            <div className='bg-gray-100 px-4 md:px-16 py-6 '>
                <div className='flex md:justify-end gap-x-2'>
                    <div><h1 className='font-bold text-[17px]'>Connect to FEMA</h1></div>
                    <div className='flex gap-x-1 text-[25px] ml-3'>

                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/FEMA/?ref=bookmarks'><FaFacebook /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/fema'><AiFillInstagram /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://x.com/fema'><FaSquareXTwitter /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/fema'><IoLogoYoutube /></a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between pt-5 mt-1 md:mt-4 md:px-[100px]">
                <div className='flex text-white font-semibold px-4 mb-2 md:mb-0'>
                    <div> <img className='bg-white rounded-full w-[65px] h-[50px] md:h-[60px] md:w-[60px]' src={FemaLogo} alt='fema logo' /></div>
                    <div className=' flex flex-col ml-2 md:ml-4'>
                        <h1 className='text-[20px]'>DisasterAssistance.gov</h1>
                        <h1 className='text-[15px] md:mt-3'>An official website of the U.S. Department of Homeland Security</h1>
                    </div>
                </div>
                <div className='flex flex-row-2 gap-x-4 md:gap-x-20 px-3 md:pl-8 text-[#C0C2C4]'>
                <div className="flex flex-col leading-loose">
                    <h1> Accountability </h1>
                    <h1> Inspector General </h1>
                    <h1> USA.gov Business </h1>
                    <h1> Ready.gov</h1>
                    <h1> Office of Civil Rights - Accesibility</h1>
                    <h1> FEMA.gov</h1>

                </div>
                <div className="flex flex-col leading-loose">
                    <Link to="/about">
                    <h1> About Us </h1>
                    </Link>
                    <h1> Privacy </h1>
                    <h1> No FEAR Act </h1>
                    <h1> SAM.gov - Assistance</h1>
                    <h1> DHS.gov</h1>
                </div>
              

                </div>
            </div>
            <div className="flex justify-start ml-3 md:ml-0 md:justify-end pb-5 mt-4 md:mt-0 md:px-24 h-[100px]">

                <img src={NTAS} alt='#'/>
            </div>
        </div>
    )
}

export default Footer
