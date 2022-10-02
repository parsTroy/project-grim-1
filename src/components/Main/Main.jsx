import React from 'react';

const Main = () => {
  return (
    <div className='m-16 relative top-14 flex justify-center items-center text-center'>
      <div>
        <h1 className='text-6xl	font-bold underline decoration-[#f05454]'>Projects in Development</h1>
        <div className='grid grid-cols-2 mt-8'>
          <div className='p-8 m-8 mr-18 w-[600px] h-[600px] flex justify-center items-center bg-[#30475e] rounded-md'>
            untitled-project
          </div>
          <div className='p-8 m-8 ml-18 w-[600px] h-[600px] flex justify-center items-center bg-[#30475e] rounded-md'>
            untitled-project-2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
