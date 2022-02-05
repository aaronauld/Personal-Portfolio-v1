import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link as ScrollLink } from 'react-scroll';
import Typical from 'react-typical';
import Card from './Card';
import content from '../content';

export default function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto" style={{background: '#eae7dc',}} id='header'>
      <section className='container'>
        <div className="w-9/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between ">
          <div className="w-full md:w-6/12 sm: py-24 px-8">
            <Card />
          </div>
          <div className="text-black font-dosis text-center md:text-left">
            <h2
              className={`${
                animated ? '' : 'translate-y-10 opacity-0'
              }  transform transition duration-2000 ease-in-out font-bold text-11xl md:text-3xl hidden md:block`}
            >
              {content.header.text[0]}
              <br />
              {content.header.text[1]}
            </h2>
            <h1
              className={`${
                animated ? '' : 'translate-y-10 opacity-0 sm:hidden'
              }  transform transition duration-2000 ease-in-out font-bold text-gray-700 text-2xl md:text-lg hidden md:block`}
            >
              {content.header.text[2]}{' '}
              <Typical
                steps={content.header.typical}
                loop={Infinity}
                className="inline-block"
              />
            </h1>
            <ScrollLink to="work">
              <button className=" animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg text-white">
                {content.header.btnText[0]}
              </button>
            </ScrollLink>
          </div>
        </div>
      </section>
    </div>
  );
}
