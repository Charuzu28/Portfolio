import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const ContactForm = () => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_f63miqc',
      'template_b0on3tj',
      formRef.current,
      'LMIsjHetTRDMYrPmf'
    )
    .then(() => {
      formRef.current.reset();
      alert('Message Sent');
    }).catch((err) =>{
      console.error('Email send error',err);
      alert('Email error occured!');
    })
  }
  return (
    <div className='flex-1 py-8 px-6 bg-white rounded-xl shadow-md mx-auto w-full max-w-2xl'>
        <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-3'>
            <div className='flex flex-row gap-3'>
            <input 
            type="text" 
            name='name' 
            placeholder='Name' 
            required className='w-full placeholder:text-gray-400 border rounded px-3 py-2 border-gray-200 bg-white'/>
            <input 
            type="email" 
            name='email' 
            placeholder='E-mail' 
            required 
            className='w-full placeholder:text-gray-400 border rounded px-3 py-2 border-gray-200 bg-white'/>
            </div>
            <input 
            type="text" 
            name='subject' 
            placeholder='Subject' 
            required 
            className='w-full placeholder:text-gray-400 px-3 border border-gray-200 rounded py-2 bg-white'/>
            <textarea 
            name="message" 
            type='text' 
            placeholder='Message'
            rows={5} 
            required 
            className='w-full resize-y placeholder:text-gray-400 border rounded px-3 py-2 border-gray-200 bg-white'></textarea>

            <button 
            type='submit' 
            className='bg-black rounded hover:bg-gray-700 inline-flex justify-center items-center gap-3 py-3 px-4 cursor-pointer text-sm font-medium text-white transition-colors active:scale-[0.99]'>
              Submit <FaArrowRightLong className='size-4' />
            </button>
        </form>
    </div>
  )
}

export default ContactForm