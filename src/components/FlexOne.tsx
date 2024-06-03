import NairaCash from '@/assets/NairaCash.png';

const FlexOne = () => {

    return (
        <div>
                <div className="w-full flex flex-col-reverse md:flex-row md:justify-between px-auto">
                <div className="flex flex-col md:ml-44 md:mt-20">
                    <h1 className="text-[40px] md:text-[65px] md:mt-[150px] px-7 md:px-0 leading-none font-semibold text-center md:text-start"> Safely trade <br className='hidden md:block'/> and receive <br className='hidden md:block'/> cryptos fast</h1>
                    <h1 className=' md:mt-4 px-3 text-[16px] text-center md:text-start md:text-[16px] text-[#878787]'>Topnotch offers a safe and secure platform to easily <br /> send and receive crypto from anyone in the world. <br /> Your transactions are not limited by geographical boundaries.</h1>
                </div>
                <div className="flex md:mr-24 object-cover px-2 w-auto md:w-[750px] mt-9 md:mt-20">
                    <img src={NairaCash} alt="#" />
                </div>

            </div>
        </div>
    )
}

export default FlexOne;