import {Link} from 'react-router-dom'

const Faq = () => {
  return (
    <div className="text-black mt-[120px] px-4 md:px-28">
                <div className=' w-full md:w-[800px] xl:w-[900px]'>
            <div>
              <h1 className=' leading-8 md:leading-[70px] font-bold text-[30px] xl:text-[67px]'> Frequently Asked Questions (FAQs)</h1>
              <h1 className='mt-2 '>
              Got questions? This page offers a list of frequently asked questions where you may be able to find answers. Just click on a question to see the answer. If you can’t find the answer you're looking for, please 
              <Link className=' text-blue-600 ml-1 underline' to="/contact-us">
              Contact Us.
              </Link>
              </h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'> Common Tech Questions</h1>
            </div>
            <div className="ml-3 mt-3">
                <ul className=" list-disc list-outside ml-3">
                  <li className=" font-bold">For help with your application or information in your account, or to make updates:</li>
                </ul>
              </div>
                <h1 className="mt-2">
                  Call the FEMA Helpline: 1-800-621-3362, 7 a.m. to 10 p.m. (in your time zone), 7 days a week. Hours may be longer during high disaster activity. If you use a video relay service (VRS), captioned telephone (CTS), or other service, give FEMA your number for that service.
                     </h1>
                <h1 className="mt-2">
                The Helpline can’t answer questions about how to create or sign in to your account or questions about other technical problems on the site.
                     </h1>
            <div className="ml-3 mt-3">
                <ul className=" list-disc list-outside ml-3">
                  <li className=" font-bold">For help with other technical questions or site errors:</li>
                </ul>
              </div>
                <h1 className="mt-2">
                Call the Internet Help Desk: 1-800-745-0243, 7 a.m. to 10 p.m. (in your time zone), 7 days a week. Hours may be longer during high disaster activity.
                     </h1>
                <h1 className="mt-2">
                The Help Desk can’t answer questions about how to create or sign in to your account, or questions about your application or information in your account.
                     </h1>

              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'> Why do I keep getting an error message and have to start my application over again?</h1>
              
              <h1 className='mt-2 '>
              You must keep a constant link to the internet when you apply. If it cuts off, that may stop your session and mean you need to log in again or start your application over.
              </h1>
              <h1 className='mt-2 '>
              You should try to check your internet strength before you start.
              </h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'> What is a secure access code and why do I need one?</h1>
              
              <h1 className='mt-2 '>
              A secure access code is a way to prove you’re the person asking for access to an account. It’s a 6-number code the system sends out and you can only use it once.
              </h1>
              <h1 className='mt-2 '>
              But you’ll only need one if the email address in your application doesn’t match the one in your Login.gov account.
              </h1>
              <h1 className='mt-2 '>
              To skip this step next time, update the email address in your application to match the one in your account. You must get a new code each time you sign in if the email addresses don’t match.
              </h1>
              <h1 className='mt-2 '>
              You can select how you want to get the code –  by text, email, or voice call. We pull the phone number(s) and email address from your application. The code will change each time you get a new one.
              </h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'> Do I need a secure access code to get updates when I call the FEMA Helpline?</h1>
              <h1 className='mt-2 '>
              No. When you call the FEMA Helpline, we use other information to confirm your identity. The agent must confirm your identity before they can give you information.
              </h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>Before You Apply</h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>When can I apply for assistance?</h1>
              <h1 className='mt-2 '>
              To apply for assistance, the president must make a major disaster declaration for your state. The declaration must also name the county or place you live in for Individual Assistance.
              </h1>
              <h1 className='mt-2 '>
              To find out if your area is declared:
              </h1>
              <div className="ml-3 mt-3">
                <ul className=" list-disc list-outside ml-3">
                  <li> Click Apply Now on the Home page or Get Assistance menu and, when asked for your location, enter your ZIP Code or city and state, then click Next.</li>
                  <li>
                  On the disaster selection screen, choose your disaster, then click Next.
                  </li>
                  <li>
                  On the Select Your Area screen, click the field to get the drop-down list, choose your area, then click Next.
                  </li>
                  <li>
                  If your area is declared, you will move on in the process. If not, you will get a message that it’s not declared, but you may click Next to move on and apply anyway.
                  </li>
                </ul>
              </div>
              <h1 className='mt-2 '>
              The assistance for each disaster may vary.
              </h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>FEMA COVID-19 Funeral Assistance</h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>The COVID-19 national emergency ended on May 11, 2023. But this date does not affect the application period for COVID-19 Funeral Assistance or related expenses if you qualify.</h1>
              <h1 className='mt-2 '>
              FEMA will provide COVID-19 funeral assistance until September 30, 2025. This is the date set by Congress in the American Rescue Plan Act of 2021.
              </h1>
              <h1 className='mt-2 '>
              The Application Period for COVID-19 Funeral Assistance is now open. To apply, and for ALL other questions and concerns about this program, call 1-844-684-6333, Monday through Friday, 9 a.m. to 9 p.m. ET. Do not call the normal FEMA Helpline for help with this program.
              </h1>
              <h1 className='mt-2 '>
              If you use a video relay service (VRS), captioned telephone (CTS), or other service, give FEMA your number for that service.
              </h1>
              <h1 className='mt-2 '>
              You must apply by phone for COVID-19 Funeral Assistance. FEMA will not accept online applications. Before you call, visit the COVID-19 Funeral Assistance page for more details.
              </h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>What if my county isn't declared?</h1>
              <h1 className='mt-2 '>
              Do you have damage from a disaster but your county or area isn’t declared for Individual Assistance?
              </h1>
              <h1 className='mt-2 '>
              Sometimes other areas are added to the declaration later. You can come back and check to find out if your area has been added. You can also visit FEMA's Disaster Declarations page.
              </h1>
              <h1 className='mt-2 '>
              You may also contact your state emergency management agency to find out if other help is available.
              </h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>What should I expect when I answer the questionnaire?</h1>
              <h1 className='mt-2 '>
              Answering the questionnaire should only take a few minutes. The types of questions will vary. Most relate directly to disasters, while others use your answers to suggest other types of assistance you may qualify for.
              </h1>
              <h1 className='mt-2 '>
              You don’t have to answer all of the questions, but you’ll get a better list of results if you do. And it’s anonymous, so we don’t save your answers or share them with any federal agency.
              </h1>
              <h1 className='mt-2 '>
              The questionnaire helps to narrow down your search for possible assistance. If you choose to answer it, your answers do not guarantee that you qualify for assistance. It’s only intended as a reference.
              </h1>
              <h1 className='mt-2 '>
              To apply for assistance other than FEMA’s, you’ll need to follow the instructions provided for each program. This may require going to another agency’s website.
              </h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>Can I apply for FEMA assistance if I have insurance?</h1>
              <h1 className='mt-2 '>
              Maybe. If there's a delay in your settlement, more than 30 days from the date you filed your claim, you may apply for assistance from FEMA. You'll need to explain the reason.
              </h1>
              <h1 className='mt-2 '>
              You must provide proof that you filed the claim. If you filed online or over the phone, you must provide the claim number, the date you applied, and an estimate of how long it may take to get your settlement.
              </h1>
              <h1 className='mt-2 '>
              Any funds you then get from FEMA will be an advance and must be repaid when you get your settlement.
              </h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>Can I apply for FEMA assistance if I have insurance?</h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>The COVID-19 national emergency ended on May 11, 2023. But this date does not affect the application period for COVID-19 Funeral Assistance or related expenses if you qualify.</h1>
              <h1 className='mt-2 '>
              FEMA will provide COVID-19 funeral assistance until September 30, 2025. This is the date set by Congress in the American Rescue Plan Act of 2021.
              </h1>
              <h1 className='mt-2 '>
              To apply for COVID-19 Funeral Assistance, and for ALL other questions and concerns about this program, call 1-844-684-6333, Monday through Friday, 9 a.m. to 9 p.m. ET. Do not call the normal FEMA Helpline for help with this program.
              </h1>
              <h1 className='mt-2 '>
              If you use a video relay service (VRS), captioned telephone (CTS), or other service, give FEMA your number for that service.
              </h1>
              <h1 className='mt-2 '>
              You must apply by phone. FEMA will not accept online applications. Before you call, visit the COVID-19 Funeral Assistance page for more details.
              </h1>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>What if I have questions about Early Application?</h1>
              <h1 className='mt-2 '>
              If you have questions about Early Application, you can call the FEMA Helpline, 7 a.m. to 10 p.m. (in your time zone), 7 days a week. Hours may be longer during high disaster activity.
              </h1>
              <div className="ml-3 mt-3">
                <ul className=" list-disc list-outside ml-3">
                  <li> 1-800-621-3362</li>
                  <li>
                  If you use a video relay service (VRS), captioned telephone (CTS), or other service, give FEMA your number for that service.
                  </li>
                </ul>
              </div>
              <h1 className='text-[25px] mt-3 xl:mt-7 font-semibold'>What if my county isn’t declared?</h1>
              <h1 className='mt-2 '>
              If the disaster declaration doesn’t name your county or area for Individual Assistance, your state emergency management agency or office may be able to offer other help.
              </h1>
              <h1 className='mt-2 '>
              But your area could also be added to the declaration later. So you can always come back to check again to find out if it’s been added.
              </h1>
              <h1 className='mt-2 '>
              You can also review your state site or FEMA's Disaster Declarations page.
              </h1>

            <h1 className='mt-3 font-semibold text-[18px] text-[#FF0033] mb-9'>
            Last Updated: 01/08/2025
            </h1>
            
          </div>
    </div>
  )
}

export default Faq