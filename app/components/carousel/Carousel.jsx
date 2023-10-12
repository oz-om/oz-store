"use client";

import { useEffect, useRef, useState } from "react";

export default function Carousel({ children }) {
  const carousel = useRef();
  const slider = useRef();
  const [allSlides, setAllSlides] = useState(4);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    setAllSlides(slider.current.childElementCount);
    slider.current.style.width = `${allSlides * 100}%`;
  }, []);
  function nextSlide() {
    if (direction == "prev") {
      slider.current.prepend(slider.current.lastElementChild);
      setDirection("next");
    }
    carousel.current.style.justifyContent = "flex-start";
    slider.current.style.transform = `translate(-${(1 / allSlides) * 100}%)`;
  }

  function prevSlide() {
    if (direction == "next") {
      slider.current.appendChild(slider.current.firstElementChild);
    }
    setDirection("prev");
    carousel.current.style.justifyContent = "flex-end";
    slider.current.style.transform = `translate(${(1 / allSlides) * 100}%)`;
  }

  function changeSlide() {
    if (direction == "next") {
      slider.current.appendChild(slider.current.firstElementChild);
    } else {
      slider.current.prepend(slider.current.lastElementChild);
    }
    slider.current.style.transition = "none";
    slider.current.style.transform = "translate(0)";
    setTimeout(() => {
      slider.current.style.transition = "all 500ms cubic-bezier(0.4, 0, 0.2, 1)";
    });
  }

  return (
    <div className='carousel_wrapper relative max-w-2xl mx-auto'>
      <div ref={carousel} className='carousel mr-auto ml-auto flex justify-start overflow-hidden'>
        <div ref={slider} onTransitionEnd={changeSlide} className='slides flex shrink-0 w-screen transition-[transform] duration-500 bg-sky-900'>
          {children}
        </div>
      </div>
      <div className='thumbnails h-14 flex justify-center gap-y-2 mt-4'>{children}</div>
      <div className='controls  absolute top-1/2 -translate-y-1/2 w-full flex justify-between'>
        <button onClick={prevSlide} className=' grid place-content-center w-7 h-7 rounded-full bg-sky-700/25'>
          <i className='bx bxs-left-arrow text-xl text-sky-500'></i>
        </button>
        <button onClick={nextSlide} className=' grid place-content-center w-7 h-7 rounded-full bg-sky-700/25'>
          <i className='bx bxs-right-arrow text-xl text-sky-500'></i>
        </button>
      </div>
    </div>
  );
}
