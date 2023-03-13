import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { socials } from "../constants";

function Socials() {
  return (
    <footer className='socials'>
      <div className='flex flex-col justify-evenly items-center p-10'>
        <div>
          <div className='socials-container'>
            <span className='text-gray-500'>
              Copyright © 2023 RGR THT. All rights reserved.
            </span>
          </div>
          <div className='justify-evenly p-10'>
            <div className='flex flex-rowjustify-between spacing-x-5'>
              <div className='p-2 spacing-x-5'>
                <SocialIcon
                  url='https://instagram.com/theartintheraw'
                  fgColor='gray'
                  bgColor='transparent'
                />
              </div>
              <div className='p-2 spacing-x-5'>
                <SocialIcon
                  url='https://linkedin.com/in/artintheraw'
                  fgColor='gray'
                  bgColor='transparent'
                />
              </div>
              <div className='p-2 spacing-x-5'>
                <SocialIcon
                  url='https://twitter.com/theartintheraw'
                  fgColor='gray'
                  bgColor='transparent'
                />
              </div>
              <div className='p-2 spacing-x-5'>
                <SocialIcon
                  url='https://github.com/theartintheraw'
                  fgColor='gray'
                  bgColor='transparent'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Socials;
