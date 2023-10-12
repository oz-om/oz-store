"use client";

import Image from "next/image";

export default function Product_item({ name, price, picture }) {
  function openPreview() {
    document.querySelector("dialog").setAttribute("open", "true");
  }

  return (
    <div className='top_rated_product bg-white rounded-md overflow-hidden'>
      <div className='product_picture group/product h-60 relative'>
        <Image fill={true} loading='lazy' src={picture} alt={name} />
        <div className='on_hover_details absolute h-full w-full bg-sky-800/40 backdrop-blur-sm -top-full left-0 transition-[top] group-hover/product:top-0'>
          <div className='price flex ml-4 mr-4 gap-px py-1'>
            <span className='current_price block w-full border-r border-solid border-sky-600 text-yellow-300'>{price}$</span>
            <span className='older_price block w-full text-right border-l border-solid border-sky-600 line-through text-sky-500'>380$</span>
          </div>
          <div className='rating py-3 flex items-center justify-around'>
            <i className='bx bxs-star text-yellow-400'></i>
            <i className='bx bxs-star text-yellow-400'></i>
            <i className='bx bxs-star text-yellow-400'></i>
            <i className='bx bx-star text-yellow-400'></i>
            <i className='bx bx-star text-yellow-400'></i>
          </div>
          <div className='add_pro_to'>
            <div className='add_to_wrapper relative'>
              <i className='decoration_line absolute h-[1px] w-full bg-[#306479] left-0 top-1/2 -translate-y-1/2'></i>
              <span className='decoration_add_to'>add to </span>
            </div>
            <div className='to_btns flex gap-x-1 justify-around ml-1 mr-1 my-2'>
              <button className='fav_products_btn rounded-xl bg-gradient-to-r from-violet-800/20 to-blue-500/20 text-white text-xs font-semibold  tracking-widest grow basis-1/2 px-1 flex items-center justify-center hover:border hover:border-sky-300'>
                <i className='bx bx-heart text-sm text-red-500 mr-1'></i>
                <span>FAVO</span>
              </button>
              <button className='card_products_btn rounded-xl bg-gradient-to-r from-violet-800/20 to-blue-500/20 text-white text-xs font-semibold  tracking-widest h-6 flex items-center justify-center grow basis-1/2 px-1 hover:border hover:border-sky-300'>
                <i className='bx bxs-cart-add text-xl text-sky-500 mr-1'></i>
                <span>CART</span>
              </button>
            </div>
          </div>
          <div className='preview_btn mx-4'>
            <button onClick={openPreview} className='quick_view rounded-xl bg-gradient-to-r from-blue-500/30 to-violet-800/30 text-white text-sm font-semibold  tracking-widest flex items-center justify-center w-full py-1 hover:border hover:border-sky-300'>
              <i className='bx bx-show-alt text-xl mr-1 text-purple-300'></i>
              <span>quick view</span>
            </button>
          </div>
          <div className='go_to_prod absolute w-full bottom-0 py-1 text-center bg-gradient-to-r from-violet-600 to-blue-600 text-sky-100 font-semibold uppercase '>
            <a href='/product' className='inline-block w-full h-full'>
              go to
            </a>
          </div>
        </div>
      </div>
      <h4 className='line-clamp-2 p-1 bg-slate-100 text-sky-950'>{name}</h4>
    </div>
  );
}
