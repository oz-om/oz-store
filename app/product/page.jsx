import Image from "next/image";
import React from "react";
import Carousel from "../components/carousel/Carousel";
import Product_item from "../components/Product_item";

export default function Product() {
  return (
    <main className='product_page'>
      <nav className='body_navigation'></nav>
      <section className='product_wrapper'>
        <div className='container px-4 sm:px-0'>
          <div className='path flex mb-4 text-sky-400 text-xs'>
            <h4>Path:</h4>
            <span>home/categories/mobiles</span>
          </div>
          <div className='product_content_wrapper md:grid md:gap-x-4 md:product_page_area_layout'>
            <div className='carousel mb-4 area_one'>
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
            </div>
            <div className='product_main_info area_two'>
              <h4 className='title text-3xl capitalize mb-4'>samsung a14 128 silver</h4>
              <div className='product_rating flex justify-center mt-2 mb-4'>
                <i className='bx bxs-star text-yellow-400'></i>
                <i className='bx bxs-star text-yellow-400'></i>
                <i className='bx bxs-star text-yellow-400'></i>
                <i className='bx bx-star text-yellow-400'></i>
                <i className='bx bx-star text-yellow-400'></i>
              </div>
              <div className='product_price flex justify-evenly my-2'>
                <span className='current_price text-teal-500 text-xl'>1230$</span>
                <span className='old_price line-through text-amber-500 text-xl'>1300$</span>
              </div>
              <div className='in_stock_status flex gap-x-2 mb-2'>
                <span className=''>Availability:</span>
                <span className='text-green-400 uppercase'>in stock</span>
              </div>
              <div className='product_properties_wrapper'>
                <div className='colors mb-4'>
                  <h4 className='font-bold text-lg mb-2'>colors:</h4>
                  <div className='options'>
                    <ul className='flex gap-x-2'>
                      <li className='min-h-[20px] cursor-pointer px-3 py-1 rounded-md bg-red-300 border border-sky-500'></li>
                      <li className='min-h-[20px] cursor-pointer px-3 py-1 rounded-md bg-blue-500 border'></li>
                      <li className='min-h-[20px] cursor-pointer px-3 py-1 rounded-md bg-slate-600 border'></li>
                    </ul>
                  </div>
                </div>
                <div className='storage mb-4'>
                  <h4 className='font-bold text-lg mb-2'>storage:GB</h4>
                  <div className='options'>
                    <ul className='flex gap-x-2'>
                      <li className='min-h-[20px] cursor-pointer px-3 py-1 rounded-md border border-slate-600 bg-sky-300'>128</li>
                      <li className='min-h-[20px] cursor-pointer px-3 py-1 rounded-md border border-slate-600'>256</li>
                      <li className='min-h-[20px] cursor-pointer px-3 py-1 rounded-md border border-slate-600'>512</li>
                    </ul>
                  </div>
                </div>
                <div className='ram mb-4'>
                  <h4 className='font-bold text-lg mb-2'>RAM:GB</h4>
                  <div className='options'>
                    <ul className='flex gap-x-2'>
                      <li className='min-h-[20px] cursor-pointer px-3 py-1 rounded-md border border-slate-600 bg-sky-300'>4</li>
                      <li className='min-h-[20px] cursor-pointer px-3 py-1 rounded-md border border-slate-600'>8</li>
                      <li className='min-h-[20px] cursor-pointer px-3 py-1 rounded-md border border-slate-600'>16</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='add_pro_to my-4 max-w-lg'>
                <div className='add_to_wrapper relative'>
                  <i className='decoration_line absolute h-[1px] w-full bg-[#306479] left-0 top-1/2 -translate-y-1/2'></i>
                  <span className='decoration_add_to'>add to </span>
                </div>
                <div className='to_btns flex gap-x-1 justify-center ml-1 mr-1 my-2'>
                  <button className='fav_products_btn rounded-xl bg-gradient-to-r from-violet-800 to-blue-500 text-white text-xs font-semibold  tracking-widest h-10 max-w-xs grow basis-1/2 px-1 flex items-center justify-center hover:border hover:border-sky-300'>
                    <i className='bx bx-heart text-sm text-red-500 mr-1'></i>
                    <span className='uppercase'>favorites</span>
                  </button>
                  <div className='cart_wrapper grow basis-1/2'>
                    <button className='card_products_btn w-full rounded-xl bg-gradient-to-r from-violet-800 to-blue-500 text-white text-xs font-semibold  tracking-widest h-10 max-w-xs flex items-center justify-center px-1 hover:border hover:border-sky-300'>
                      <i className='bx bxs-cart-add text-xl text-sky-500 mr-1'></i>
                      <span className='uppercase'>cart</span>
                    </button>
                    <div className='quantity w-full flex justify-center rounded-md mt-1 overflow-hidden'>
                      <button className='bg-slate-300 block w-full text-lg font-bold font-sans'>-</button>
                      <span className='bg-white block w-full text-center text-lg font-bold font-sans'>1</span>
                      <button className='bg-slate-300 block w-full text-lg font-bold font-sans'>+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='available_payment_methods mb-4 flex gap-x-2 items-center'>
                <h4 className='flex items-center  gap-x-2 py-4'>
                  <i className='bx bx-credit-card text-2xl'></i>
                  <span className='text-sm font-mono font-semibold'>payments methods</span>
                </h4>
                <ul className='flex gap-x-2'>
                  <li>
                    <Image src={"https://svgshare.com/i/y3z.svg"} style={{ width: "40px" }} width={500} height={500} alt='paypal' />
                  </li>
                  <li>
                    <Image src={"https://svgshare.com/i/y3d.svg"} style={{ width: "40px" }} width={30} height={30} alt='visa-card' />
                  </li>
                  <li>
                    <Image src={"https://svgshare.com/i/y5Z.svg"} style={{ width: "40px" }} width={30} height={30} alt='master-card' />
                  </li>
                </ul>
              </div>
              <div className='submit_order text-end mb-4'>
                <button className='text-2xl bg-lime-500 text-white rounded-lg px-4 py-2 hover:bg-lime-400 uppercase'>buy now</button>
              </div>
            </div>
            <div className='product_full_details area_three'>
              <h4 className='section_title relative rounded-md text-2xl capitalize font-bolde  pl-8 py-2 mt-10 mb-5'>
                <span>product details</span>
                <i className='bx bx-link-alt absolute -left-3 -top-3 text-[40px] text-slate-600/50'></i>
              </h4>
              <ul className='rounded-md overflow-hidden'>
                <li className='odd:bg-slate-400/20 even:bg-slate-50/30 flex justify-between p-2'>
                  <span className='block w-full font-semibold'>Brand</span>
                  <span className='block w-full'>SAMSUNG</span>
                </li>
                <li className='odd:bg-slate-400/20 even:bg-slate-50/30 flex justify-between p-2'>
                  <span className='block w-full font-semibold'>Cell Phone Type</span>
                  <span className='block w-full'>Contract Cell Phones</span>
                </li>
                <li className='odd:bg-slate-400/20 even:bg-slate-50/30 flex justify-between p-2'>
                  <span className='block w-full font-semibold'>Cell Phone Service Provider</span>
                  <span className='block w-full'>AT&T</span>
                </li>
                <li className='odd:bg-slate-400/20 even:bg-slate-50/30 flex justify-between p-2'>
                  <span className='block w-full font-semibold'>Rear-Facing Camera Megapixels</span>
                  <span className='block w-full'>12MP</span>
                </li>
                <li className='odd:bg-slate-400/20 even:bg-slate-50/30 flex justify-between p-2'>
                  <span className='block w-full font-semibold'>Model Name</span>
                  <span className='block w-full'>Galaxy S21</span>
                </li>
                <li className='odd:bg-slate-400/20 even:bg-slate-50/30 flex justify-between p-2'>
                  <span className='block w-full font-semibold'>Model</span>
                  <span className='block w-full'>VIPRB-SM-G990ULGAATT</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='product_desc'>
            <h4 className='section_title relative rounded-md text-2xl capitalize font-bolde  pl-8 py-2 mt-10 mb-5'>
              <span>description</span>
              <i className='bx bx-link-alt absolute -left-3 -top-3 text-[40px] text-slate-600/50'></i>
            </h4>
            All-Day Intelligent Battery - Get the power you need for the activities you heart the most with a smart battery that keeps you going all day and into the night. SuperFast Charging - Enjoy a charge that’s ready for all you do. Get Super Fast Charging that gives you a 50% charge in just 30 minutes. 1 Faster Galaxy Processor + 5G - Level up your gaming, livestreaming, video editing and multitasking with our fast Galaxy processing and 5G2 capability. Smooth & Strong Display - Get more
            out of your mobile experience with scrolling that’s bright, fast and silky smooth. Do more of what you love on a screen that's super durable and easy on the eyes, whether you're outside or inside — day or night. All New Design - Redesigned to impress, Samsung Galaxy S21 FE 5G features shades from monochromatic to colorful with a modern haze finish fit for every fan. Legal Superfast (25 W) charger sold separately. Use only Samsungapproved chargers and cables. Do not use worn or
            damaged chargers or cables. An incompatible charger or cable can cause damage to your device and/or serious injuries. Requires optimal 5G network connection, available in select markets. Check with your carrier for availability and details. Download and streaming speeds may vary based on content provider, server connection and other factors. Devices purchased with new lines of service on walmart.com require a credit/debit card backed by a banking institution. Prepaid credit/debit
            cards and gift cards will not be accepted.
          </div>
        </div>
      </section>
      <section className='similar_products mt-8'>
        <div className='container px-4 sm:px-0'>
          <h4 className='section_title relative rounded-md text-2xl capitalize font-bolde  pl-8 py-2 mt-10 mb-5'>
            <span>similar products</span>
            <i className='bx bx-link-alt absolute -left-3 -top-3 text-[40px] text-slate-600/50'></i>
          </h4>
          <div className='top_rate grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))] gap-2 lg:grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]'>
            <Product_item name='Baseus Simu Anc True Wireless Earphones s1 Pro Blue6' price='300' picture='https://telegra.ph/file/3c58a143dc9ea2555dd1a.png' />
            <Product_item name='IPAD PRO 11 (2021) BLUETOOTH KEYBOARD CASE' price='300' picture='https://telegra.ph/file/f1885619e92335a920a2c.png' />
            <Product_item name='JR-W050 20W Magnetic Wireless Power Bank with Ring Holder 10000mAh' price='300' picture='https://telegra.ph/file/24c3139e02826265dcae5.png' />
            <Product_item name='Baseus Simu Anc True Wireless Earphones s1 Pro Blue' price='300' picture='https://telegra.ph/file/341638413f21179dffd0a.png' />
            <Product_item name='Baseus Simu Anc True Wireless Earphones s1 Pro Blue6' price='300' picture='https://telegra.ph/file/3c58a143dc9ea2555dd1a.png' />
            <Product_item name='IPAD PRO 11 (2021) BLUETOOTH KEYBOARD CASE' price='300' picture='https://telegra.ph/file/f1885619e92335a920a2c.png' />
            <Product_item name='JR-W050 20W Magnetic Wireless Power Bank with Ring Holder 10000mAh' price='300' picture='https://telegra.ph/file/24c3139e02826265dcae5.png' />
            <Product_item name='Baseus Simu Anc True Wireless Earphones s1 Pro Blue' price='300' picture='https://telegra.ph/file/341638413f21179dffd0a.png' />
          </div>
        </div>
      </section>
    </main>
  );
}
