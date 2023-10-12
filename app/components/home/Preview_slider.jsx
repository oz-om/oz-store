"use client";

import { useRef } from "react";

export default function PreviewSlider() {
  const previewWrapper = useRef();
  function handelSlide(e) {
    const allSlides = Array.from(previewWrapper.current.querySelectorAll(".product_intro"));
    let current = allSlides.find((element) => element.classList.contains("current"));

    if (e.currentTarget.id == "next") {
      if (!current.nextElementSibling) {
        allSlides[0].classList.add("current", "left-0");
        allSlides[0].classList.remove("left-full");
      } else {
        current.nextElementSibling.classList.add("current", "left-0");
        current.nextElementSibling.classList.remove("left-full");
      }
    } else {
      if (!current.previousElementSibling) {
        allSlides[allSlides.length - 1].classList.add("current", "left-0");
        allSlides[allSlides.length - 1].classList.remove("left-full");
      } else {
        current.previousElementSibling.classList.add("current", "left-0");
        current.previousElementSibling.classList.remove("left-full");
      }
    }

    current.classList.remove("current", "left-0");
    current.classList.add("left-full");
  }

  return (
    <div className='main_preview relative flex-[2]'>
      <div ref={previewWrapper} className='preview h-[50vh] relative w-full rounded-md overflow-hidden'>
        <div className='product_intro h-full w-full absolute transition-[left] duration-300 py-3 px-6 bg-[url("https://telegra.ph/file/3c58a143dc9ea2555dd1a.png")] bg-contain bg-no-repeat bg-right-bottom left-0 current'>
          <h1 className='text-slate-100 text-4xl font-extrabold leading-relaxed max-w-xs'>This is a Title for the product</h1>
          <span className='text-slate-500 max-w-sm mt-3 block'>this a small description for this product</span>
          <div className='product_theme absolute w-full h-full top-0 left-0 -z-[1]  bg-gradient-to-b from-slate-400 to-transparent'></div>
          <a href='/' className='ml-16 mt-16 block bg-sky-900 w-28 py-2 text-center rounded-md text-sky-300'>
            explore
          </a>
        </div>

        <div className='product_intro h-full w-full absolute transition-[left] duration-300 py-3 px-6 bg-[url("https://telegra.ph/file/f1885619e92335a920a2c.png")] bg-contain bg-no-repeat bg-right-bottom left-full'>
          <h1 className='text-slate-100 text-4xl font-extrabold leading-relaxed max-w-xs'>This is a Title for the product</h1>
          <span className='text-slate-500 max-w-sm mt-3 block'>this a small description for this product</span>
          <div className='product_theme absolute w-full h-full top-0 left-0 -z-[1]  bg-gradient-to-b from-slate-400 to-transparent'></div>
          <a href='' className='ml-16 mt-16 block bg-sky-900 w-28 py-2 text-center rounded-md text-sky-300'>
            explore
          </a>
        </div>

        <div className='product_intro h-full w-full absolute transition-[left] duration-300 py-3 px-6 bg-[url("https://telegra.ph/file/24c3139e02826265dcae5.png")] bg-contain bg-no-repeat bg-right-bottom left-full'>
          <h1 className='text-slate-100 text-4xl font-extrabold leading-relaxed max-w-xs'>This is a Title for the product</h1>
          <span className='text-slate-500 max-w-sm mt-3 block'>this a small description for this product</span>
          <div className='product_theme absolute w-full h-full top-0 left-0 -z-[1]  bg-gradient-to-b from-slate-400 to-transparent'></div>
          <a href='/' className='ml-16 mt-16 block bg-sky-900 w-28 py-2 text-center rounded-md text-sky-300'>
            explore
          </a>
        </div>
      </div>
      <div onClick={handelSlide} id='back' className='go_back absolute flex items-center rounded-full justify-center left-2 top-1/2 bottom-1/2 cursor-pointer bg-sky-400/10 w-6 h-6 '>
        <i className='bx bxs-send bx-rotate-180 text-sky-900'></i>
      </div>
      <div onClick={handelSlide} id='next' className='next absolute flex items-center rounded-full justify-center right-2 top-1/2 bottom-1/2 cursor-pointer  bg-sky-400/10 w-6 h-6 '>
        <i className='bx bxs-send text-sky-900'></i>
      </div>
    </div>
  );
}
