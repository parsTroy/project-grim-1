import React from 'react';
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';

export const Footer = () => {
  return (
    <div className='bg-[#30475e] w-[100vw] flex justify-around items-center absolute bottom-0 p-8'>
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
      <div className='grid text-center'>
        <div className='m-2 flex'>
          <h4>
            <TiSocialFacebook className='w-10 h-10' />
          </h4> 
        </div>
        <div className='m-2 flex'>
          <h4>
            <TiSocialTwitter className='w-10 h-10' />
          </h4>
        </div>
          <div className='m-2 flex'>
            <h4>
              <TiSocialYoutube className='w-10 h-10' />
            </h4>
          </div>
        </div>
    </div>
  );
};
