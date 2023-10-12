import Preview_slider from "./components/home/Preview_slider";
import Offer_item from "./components/home/Offer_item";
import Category_item from "./components/home/Category_item";
import Product_item from "./components/Product_item";
import Quick_view from "./components/home/Quick_view";
import Link from "next/link";
import Login from "./components/auth/Login";

export default function Home() {
  const login = false;
  return (
    <main>
      <div className='container'>
        <section className='header_section md:flex gap-x-4  '>
          <div className='categories hidden md:block grow rounded-md overflow-hidden bg-gradient-to-b from-sky-200 to-transparent'>
            <h4 className='text-xl font-bold flex items-center gap-x-2 bg-sky-700 text-white'>
              <i className='bx bx-menu'></i>
              <span>Categories</span>
            </h4>
            <ul className=''>
              <Category_item name='Mobiles' by='icon' logo='bx-mobile' />
              <Category_item name='PC/Laptop' by='icon' logo='bx-laptop' />
              <Category_item name='Monitors' by='icon' logo='bx-desktop' />
              <Category_item name='Accessories' by='icon' logo='bxs-collection' />
              <Category_item name='HeadPhone' by='icon' logo='bx-headphone' />
              <Category_item name='Smart watches' by='icon' logo='bxs-watch-alt' />
              <Category_item name='Keyboards' by='icon' logo='bxs-keyboard' />
              <Category_item name='mouse' by='icon' logo='bxs-mouse' />
              <Category_item name='Speakers' by='icon' logo='bxs-speaker' />
              <Category_item name='Camera' by='icon' logo='bxs-camera-home' />
              <Category_item name='Games' by='icon' logo='bxs-category-alt' />
            </ul>
          </div>
          <section className='grow-[10]'>
            <nav className='header_navigate hidden md:block mb-2'>
              <ul className='flex'>
                <Link className='px-2  hover:text-sky-500' href={"/"}>
                  Home
                </Link>
                {login && (
                  <Link className='px-2  hover:text-sky-500' href={"/favorites"}>
                    Favorites
                  </Link>
                )}
                <Link className='px-2  hover:text-sky-500' href={"/services"}>
                  Services
                </Link>
                <Link className='px-2  hover:text-sky-500' href={"/about"}>
                  About
                </Link>
                <Link className='px-2  hover:text-sky-500' href={"/contact"}>
                  Contact
                </Link>
                {!login ? (
                  <>
                    <Link className='px-2  hover:text-sky-500 ml-auto' href={"/login"}>
                      Login
                    </Link>
                    <Link className='px-2  hover:text-sky-500' href={"/sign-in"}>
                      Sign-up
                    </Link>
                  </>
                ) : (
                  <Link className='px-2  hover:text-sky-500' href={"/account"}>
                    Account
                  </Link>
                )}
              </ul>
            </nav>
            <div className='product_preview_section flex gap-x-10'>
              <Preview_slider />
              <div className='relative hidden flex-[1] lg:block'>
                <Login />
              </div>
            </div>
          </section>
        </section>
        <section className='body_section pt-4 px-2'>
          <div className='head_offers flex h-20 gap-x-2'>
            <div className='offer_item flex-1 rounded-md bg-[url("https://telegra.ph/file/18b3a6f4eae2ddb754ae1.jpg")] bg-cover bg-no-repeat bg-top'></div>
            <div className='offer_item flex-1 rounded-md bg-[url("https://telegra.ph/file/3e2cf01b84bdfed66350d.jpg")] bg-cover bg-no-repeat bg-top'></div>
            <div className='offer_item flex-1 rounded-md bg-[url("https://telegra.ph/file/996394939bbc595d53b65.jpg")] bg-cover bg-no-repeat bg-top'></div>
          </div>
          <div className='body_categories md:hidden '>
            <h4 className='font-extrabold'>CATEGORIES</h4>
            <ul className='flex gap-x-5 overflow-auto custom_scroll mt-2 lg:justify-center'>
              <Category_item name='Mobiles' by='image' logo='https://svgshare.com/i/wdq.svg' />
              <Category_item name='PC/Laptop' by='image' logo='https://svgshare.com/i/wc9.svg' />
              <Category_item name='Monitors' by='image' logo='https://svgshare.com/i/wcJ.svg' />
              <Category_item name='Accessories' by='image' logo='https://svgshare.com/i/wdf.svg' />
              <Category_item name='HeadPhone' by='image' logo='https://svgshare.com/i/wdg.svg' />
              <Category_item name='Smart watches' by='image' logo='https://svgshare.com/i/wcT.svg' />
              <Category_item name='Keyboards' by='image' logo='https://svgshare.com/i/wdr.svg' />
              <Category_item name='mouse' by='image' logo='https://svgshare.com/i/wdA.svg' />
              <Category_item name='Speakers' by='image' logo='https://svgshare.com/i/we1.svg' />
              <Category_item name='Camera' by='image' logo='https://svgshare.com/i/wdW.svg' />
              <Category_item name='Games' by='image' logo='https://svgshare.com/i/wd1.svg' />
            </ul>
          </div>
          <div className='top_rate_section mt-4'>
            <h4 className='font-extrabold border-b border-b-sky-700 mb-2'>TOP RATE</h4>
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
          <div className='new_products_section mt-4'>
            <h4 className='font-extrabold border-b border-b-sky-700 mb-2'>LATEST</h4>
            <div className='latest_products grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))] gap-2 lg:grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]'>
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
        <section className='offers p-4 sm:h-[500px] relative mt-4'>
          <h4 className='font-extrabold border-b border-b-sky-700 mb-2'>NEW LAUNCHES</h4>
          <div className='offers_wrapper sm:grid sm:offers_areas_layout sm:gap-x-2 h-full'>
            <Offer_item className='area_one' offer_pic='https://telegra.ph/file/fc1ebee9c0a3b8a42a692.jpg' />
            <Offer_item className='area_two' offer_pic='https://telegra.ph/file/f3f481b1ca4ac1dde33c4.jpg' />
            <Offer_item className='area_three' offer_pic='https://telegra.ph/file/e8ffa178c5b51527a98d9.jpg' />
          </div>
        </section>
      </div>
      <Quick_view />
    </main>
  );
}
