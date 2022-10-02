import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#30475e] w-[100vw] flex justify-around items-center absolute bottom-0">
      <div>
        <h4>Contact</h4>
      </div>
      <div className="grid text-center">
        <div className="m-2">
          <h4>Facebook</h4> 
        </div>
        <div className="m-2">
          <h4>Twitter</h4> 
        </div>
          <div className="m-2">
            <h4>Youtube</h4> 
          </div>
        </div>
    </div>
  );
};
