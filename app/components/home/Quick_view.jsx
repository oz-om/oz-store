"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "../carousel/Carousel";

export default function Quick_view() {
  function closePreview() {
    document.querySelector("dialog").removeAttribute("open");
  }
  return (
    <dialog className='quick_view fixed left-0 top-0 w-full h-full bg-slate-100/50 backdrop-blur-sm overflow-x-hidden overflow-y-auto custom_scroll'>
      <div className='container'>
        <div onClick={closePreview} className='close_preview w-5 h-5 rounded-md bg-red-200 grid place-content-center cursor-pointer border border-red-500'>
          <i className='bx bx-x text-red-500 text-2xl'></i>
        </div>
        <div className='quick_view_wrapper md:grid md:grid-cols-2'>
          <Carousel>
            <div className='img_wrapper flex-1  max-h-[50vh]'>
              <img src='https://the-gadgeteer.com/wp-content/uploads/2020/04/Lectrify_BlackPods_5.jpg' alt='preview_image' />
            </div>
            <div className='img_wrapper flex-1  max-h-[50vh]'>
              <img src='https://cdn.redmondpie.com/wp-content/uploads/2019/02/AirPods-Black-1200px.jpg' alt='preview_image' />
            </div>
            <div className='img_wrapper flex-1  max-h-[50vh]'>
              <img src='https://sc02.alicdn.com/kf/H2569cfd79ec74915b86f396bddec6b45w/206108312/H2569cfd79ec74915b86f396bddec6b45w.jpg' alt='preview_image' />
            </div>
            <div className='img_wrapper flex-1  max-h-[50vh]'>
              <img src='https://static.giga.de/wp-content/uploads/2019/10/airpods3_2.jpg' alt='preview_image' />
            </div>
          </Carousel>
          <div className='quick_view_content mt-4'>
            <div className='product_info'>
              <h4 className='product_name font-bold text-lg tracking-wider px-2'>Ldoloaut doloremque Gold 730 quo pariatur consequatur dolores</h4>
              <div className='product_price flex justify-evenly mt-2'>
                <span className='current_price text-teal-500 text-xl'>1230$</span>
                <span className='old_price line-through text-amber-500 text-xl'>1300$</span>
              </div>
              <div className='product_rating flex justify-center mt-2'>
                <i className='bx bxs-star text-yellow-400'></i>
                <i className='bx bxs-star text-yellow-400'></i>
                <i className='bx bxs-star text-yellow-400'></i>
                <i className='bx bx-star text-yellow-400'></i>
                <i className='bx bx-star text-yellow-400'></i>
              </div>
              <div className='product_description text-slate-700 px-2 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, alias quia. Ipsum, temporibus dicta molestias nihil a enim? Nam, tempora veniam esse molestias repellendus est? At animi corrupti accusantium sit?</div>
            </div>
          </div>
          <div className='prod_actions md:col-span-2'>
            <div className='add_pro_to mt-4'>
              <div className='add_to_wrapper relative'>
                <i className='decoration_line absolute h-[1px] w-full bg-[#306479] left-0 top-1/2 -translate-y-1/2'></i>
                <span className='decoration_add_to'>add to </span>
              </div>
              <div className='to_btns flex gap-x-1 justify-center ml-1 mr-1 my-2'>
                <button className='fav_products_btn rounded-xl bg-gradient-to-r from-violet-800 to-blue-500 text-white text-xs font-semibold  tracking-widest h-10 max-w-xs grow basis-1/2 px-1 flex items-center justify-center hover:border hover:border-sky-300'>
                  <i className='bx bx-heart text-sm text-red-500 mr-1'></i>
                  <span>FAVO</span>
                </button>
                <button className='card_products_btn rounded-xl bg-gradient-to-r from-violet-800 to-blue-500 text-white text-xs font-semibold  tracking-widest h-10 max-w-xs flex items-center justify-center grow basis-1/2 px-1 hover:border hover:border-sky-300'>
                  <i className='bx bxs-cart-add text-xl text-sky-500 mr-1'></i>
                  <span>CART</span>
                </button>
              </div>
            </div>
            <div className='got_to my-5'>
              <Link href={"/product"} className='text-xl uppercase font-bold block w-1/2 max-w-xs rounded-md border border-sky-500 mx-auto text-center bg-sky-100'>
                got to
              </Link>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
