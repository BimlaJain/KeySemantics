import React from 'react'
import { formFields } from '../utils/helper'
import  { useState } from 'react'

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
    <div className='lg:py-24 md:py-16 py-12 bg-royal_blue'>
      <h2 className='lg:text-custom_lg text-2xl font-bold text-white text-center leading-normal'>How does KeySemantics work?</h2>
      <p className='md:pt-5 pt-3 font-normal text-base lg:pb-[64px] md:pb-14 pb-11 text-white text-center'>Request a demo for your team and let us show you how KeySemantics can help your company</p>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-transparent flex-col"
        >
          {formFields.map((field) => (
            <div key={field.id} className="mb-4 max-w-[320px] mx-auto">
              <input
                id={field.id}
                type="text"
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.id]}
                onChange={handleChange}
                className="w-full py-4 pl-5 mx-auto text-white bg-blur_blue placeholder-voilet rounded-full focus:outline-none"
              />
            </div>
          ))}

          <p className="text-custom_xs text-center text-voilet mt-4">
            By submitting my contact information I agree to the KeySemantics Privacy Policy
          </p>

          <button
            type="submit"
            className=" mt-6 sm:py-4 sm:px-8 py-3 px-5 flex mx-auto bg-sky_blue text-white font-bold rounded-full shadow-lg hover:opacity-90"
          >
            Request a demo
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormValidation
