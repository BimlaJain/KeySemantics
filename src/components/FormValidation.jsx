import React from 'react'
import { FORM_FIELDS } from '../utils/helper'
import { useState } from 'react'
import CommonButton from '../common/CommonButton';

const FormValidation = () => {
  const initialFormState = {
    name: '',
    email: '',
    company: '',
    phone: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData(initialFormState);
  };
  return (
    <div className=' bg-royalblue'>
      <div className="container xl:py-24 md:py-16 lg:py-20 py-12 relative">
        <div className='absolute top-0 left-[3%] xl:block hidden'>
          <img src="./assets/images/webp/footer-icon1.webp" alt="footer-icon" />
        </div>
        <div className='absolute bottom-1 right-[3%] xl:block hidden'>
          <img src="./assets/images/webp/footer-icon2.webp" alt="footer-icon" />
        </div>
        <h2 className='lg:text-custom-lg text-2xl font-bold text-white text-center leading-normal'>How does KeySemantics work?</h2>
        <p className='md:pt-5 pt-3 font-normal text-base lg:pb-[64px] md:pb-14 pb-11 text-white text-center'>Request a demo for your team and let us show you how KeySemantics can help your company</p>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-transparent flex-col"
          >
            {FORM_FIELDS.map((field) => (
              <div key={field.id} className="mb-2 max-w-[320px] mx-auto">
                <input
                  id={field.id}
                  type="text"
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full py-4 pl-5 mx-auto text-white bg-blurblue placeholder-voilet rounded-full focus:outline-none"
                />
              </div>
            ))}

            <p className="text-custom-xs text-center text-voilet mt-4">
              By submitting my contact information I agree to the KeySemantics Privacy Policy
            </p>
            <CommonButton classList="hover:!bg-white hover:!text-skyblue !bg-skyblue !text-white !sm:py-4 !sm:px-8 !py-3 !px-5 !mt-6 !mx-auto" NavButton=" Request a demo"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormValidation
