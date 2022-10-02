import React from 'react';

const Contact = () => {
  return (
    <div className='h-[800px] m-16 relative top-14 grid justify-center items-center text-center'>
      <h4 className='-mt-72 -mb-48'>Contact Us</h4>
      <form className='-mt-96'>
        <div className='mb-4'>
          <input type='text' placeholder='Name' className='w-72 p-2 bg-[#30475e]' />
        </div>
        <div className='mb-4'>
          <input type='email' placeholder='Email' className='w-72 p-2 bg-[#30475e]' />
        </div>
        <div className='mb-4'>
          <textarea placeholder='Message' className='w-[288px] p-2 bg-[#30475e]' />
        </div>
      </form>
    </div>
  );
};

export default Contact;
