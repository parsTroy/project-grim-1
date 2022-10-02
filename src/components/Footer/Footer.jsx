import React from 'react';
import { 
  TiSocialFacebook, 
  TiSocialTwitter, 
  TiSocialYoutube 
} from 'react-icons/ti';
import {
  BiMailSend,
  BiInfoCircle
} from 'react-icons/bi';
import {
  MdOutlinePrivacyTip
} from 'react-icons/md';

export const Footer = () => {
  return (
    <div className='bg-[#30475e] w-[100%] h-58 flex justify-around items-center p-8'>
      <div className='ml-60 w-44 h-14 border border-[#f05454] flex justify-center items-center p-2.5 font-mono font-extrabold'>
        <h4>Grim Studios</h4>
      </div>
      <div className='w-[800px] flex justify-around items-center mr-44'>
        <div className='grid text-center'>
          <div className='m-2 flex'>
            <h4 className='flex text-center justify-center items-center'><BiMailSend className='w-10 h-10 mr-2' />Contact Us</h4> 
          </div>
          <div className='m-2 flex'>
            <h4 className='flex text-center justify-center items-center'><BiInfoCircle className='w-10 h-10 mr-2' />About Us</h4>
          </div>
          <div className='m-2 flex'>
            <h4 className='flex text-center justify-center items-center'><MdOutlinePrivacyTip className='w-10 h-10 mr-2' />Privacy &#38; Legal</h4>
          </div>
        </div>

        <div className='grid text-center'>
          <div className='m-2 flex'>
            <h4 className='flex text-center justify-center items-center'><TiSocialFacebook className='w-10 h-10 mr-2' />Facebook</h4> 
          </div>
          <div className='m-2 flex'>
            <h4 className='flex text-center justify-center items-center'><TiSocialTwitter className='w-10 h-10 mr-2' />Twitter</h4>
          </div>
          <div className='m-2 flex'>
            <h4 className='flex text-center justify-center items-center'><TiSocialYoutube className='w-10 h-10 mr-2' />Youtube</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
