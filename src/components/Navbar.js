import React from 'react';

export default function Navbar() {
    return (
          <div style={{background: '#393E41',}} className='max-w-7xl mx-auto ml-auto text-white fixed inset-x-0 z-50'>
              <div className='relative flex justify-between items-center'>
                <a href='#' class="ml-6 hover:text-gray-600 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </a>

                <div className='flex space-x-9 px-4'>
                    <a href='#work' class="py-1 px-3 m-4 font-bold hover:text-gray-600 duration-300">
                        Projects
                    </a>
                    
                    <a href='#stack' class="py-1 px-3 m-4 font-bold hover:text-gray-600 duration-300">
                        Stacks
                    </a>
                </div>
              </div>
          </div>
    );
  }