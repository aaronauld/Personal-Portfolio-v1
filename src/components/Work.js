import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';

export default function Work() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis md: px-14 lg: px-24"
      id="work"
      style={{background: '#eae7dc',}}
    >
      <h1 className='text-5xl text-center font-bold font-dosis'>
          My Work
      </h1>
      <section className='min-h-min container'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-3 items-center text-center sm:mt-0'>
          <a className='flex-col m-10' target='blank' href='https://github.com/aaronauld/Meditation-Tracker'>
            <img className='object-fill w-64 m-5 shadow-xl rounded-xl' src='/assets/meditation.png' />
            <text className='font-dosis'>Building a full stack meditation tracking project utilising the MERN stack</text>
          </a>
          <a className='flex-col m-6' target='blank' href='https://github.com/aaronauld/pimaclassification'>
            <img className='object-fill m-5 shadow-xl rounded-xl' src='/assets/knn.png' />
            <text className='font-dosis'>Classifying the presence of diabetes from scratch using analytics</text>
          </a>
          <a className='flex-col m-6' target='blank' href='https://github.com/aaronauld/Website'>
            <img className='w-72 m-5 shadow-xl rounded-xl' src='/assets/web2.png' />
            <text className='font-dosis'>Using React and Tailwind to create an adaptive personal portfolio website</text>
          </a>
        </div>
      </section>
      <ScrollLink to="stack">
        <button onclick="smoothScroll(document.getElementById('stack'))" className=" animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg text-white">
        {content.header.btnText[1]}
        </button>
      </ScrollLink>
    </div>
  );
}