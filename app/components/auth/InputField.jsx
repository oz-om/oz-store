"use client";
export default function InputField({ type, placeholder, icon }) {
  function onFocusHandel(e) {
    let input = e.target;
    input.previousElementSibling.classList.add("-top-7");
    input.previousElementSibling.classList.remove("top-2");
  }
  function onBlurHandel(e) {
    let input = e.target;
    if (input.value.trim().length === 0) {
      input.previousElementSibling.classList.add("top-2");
      input.previousElementSibling.classList.remove("-top-7");
    }
  }

  return (
    <div className='flex mb-7 gap-x-2 items-center'>
      <i className={"bx text-2xl text-sky-500 " + icon}></i>
      <div className='field relative w-full border h-10 rounded-md bg-white'>
        <label className='label absolute left-3 text-sky-900/50 cursor-text top-2 transition-[top] '>{placeholder}</label>
        <input type={type} onFocus={onFocusHandel} onBlur={onBlurHandel} className='bg-transparent absolute w-full h-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' />
      </div>
    </div>
  );
}
