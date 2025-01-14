import { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from "react-router-dom";
// import { IoShieldHalf } from "react-icons/io5";
// import Upload from "../Images/upload.png";
// import { ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";
// import './Verified.css'

const Verified = () => {

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
            <button
            onClick={handlesubmit}
        type="submit"
        className="mt-6 mb-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
        </div>
    );
};

export default Verified;
