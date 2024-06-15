'use client'

import Image, { StaticImageData } from "next/image";

export interface SlideData {
  title: string;
  subtitle?: string;
  src: StaticImageData;
  alt: string;
}

export interface SlideShowProps {
  slides: SlideData[];
}

const SlideShow = (slides: SlideShowProps) => {

  return (
    <div className="w-full h-80 overflow-hidden relative">
      {slides.slides.map((value, index) => (
        <div key={index} className="w-full h-full relative">
          <Image src={value.src} alt={value.alt} className="w-full h-full object-cover object-center"/>
          <div className="absolute inset-0 bg-[#C45E0044]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#141515] to-[#001D3400]"></div>
          <div className="absolute inset-x-0 text-center z-10 text-slate-100 top-1/2 -translate-y-1/2">
            <h2 className="text-5xl">{value.title}</h2>
            {value.subtitle && (
              <div className=" text-lg mt-3 text-slate-200">{value.subtitle}</div>
            )}
          </div>
        </div>
      ))} 
      <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <div className="w-2 h-2 mx-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 mx-2 rounded-full bg-white opacity-20"></div>
        <div className="w-2 h-2 mx-2 rounded-full bg-white opacity-20"></div>
      </div>
    </div>
  );
}

export default SlideShow;