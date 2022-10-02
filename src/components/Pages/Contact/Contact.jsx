import React from "react";

const Contact = () => {
  return (
    <div>
      <h4 className='ml-2'>Contact</h4>
      <form className='mt-2'>
        <div>
          <input type='text' placeholder='Name' className='w-54' />
        </div>
        <div>
          <input type='email' placeholder='Email' className='w-54' />
        </div>
        <div>
          <textarea placeholder='Message' className='w-[217px]' />
        </div>
      </form>
    </div>
  );
};

export default Contact;
