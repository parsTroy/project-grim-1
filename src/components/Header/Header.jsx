import React from 'react';
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';

const Header = () => {
  return (
      <div className='bg-[#30475e] w-[100vw] h-24 flex justify-around items-center fixed'>
          <div className='w-44 h-14 border flex justify-center items-center p-2.5 font-mono font-extrabold'>
            <h4>Grim Studios</h4>
          </div>
          <div className='flex'>
            <div className='m-2'>
              <h4>
                <TiSocialFacebook className='w-10 h-10' />
              </h4> 
            </div>
            <div className='m-2'>
              <h4>
                <TiSocialTwitter className='w-10 h-10' />
              </h4> 
            </div>
            <div className='m-2'>
              <h4>
                <TiSocialYoutube className='w-10 h-10' />
              </h4> 
            </div>
          </div>
      </div>
    );
};

export default Header;
