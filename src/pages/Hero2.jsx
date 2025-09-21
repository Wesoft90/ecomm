import React, { useState } from 'react';

import lamb from '../assets/2025-lamborghini-revuelto-4k-c9-1920x1080.jpg';
import merc from '../assets/Mercedes AMG GT4 (1920x1080).jpg';
import ocean from '../assets/sunrise-in-australia-ocean-5k-ob-1920x1080.jpg';
import waterfall  from '../assets/waterfall-in-icealnd-7m-1920x1080.jpg';
import bugatti from '../assets/bugatti-brouillard-mr-1920x1080.jpg';

const Hero2 = () => {
  
  const [index, setIndex] = useState(0);
  const images = [lamb, merc, ocean, waterfall, bugatti];

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };


return (
<div id="controls-carousel" className="relative w-full" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
   
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div className="block duration-700 ease-in-out" data-carousel-item>
            <img src={lamb} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 2 --> */}
        <div className="block duration-700 ease-in-out" data-carousel-item="active">
            <img src={merc} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 3 --> */}
        <div className="block duration-700 ease-in-out" data-carousel-item>
            <img src={ocean} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 4 --> */}
        <div className="block duration-700 ease-in-out" data-carousel-item>
            <img src={waterfall} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 5 --> */}
        <div className="block duration-700 ease-in-out" data-carousel-item>
            <img src={bugatti} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>

    {/* <!-- Slider controls --> */}
    
  <button onClick={prevSlide}
    type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button onClick={nextSlide}
     type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

  )}

export default Hero2;
