"use client";
import Link from "next/link";
import Cart_item from "./Cart_item";

export default function Navbar() {
  const login = true;
  function toggleMenu(e) {
    document.querySelector(".nave_menu").classList.toggle("w-0");
    document.querySelector(".nave_menu").classList.toggle("w-36");
  }
  function toggleCart() {
    document.querySelector(".basket .cart_content").classList.toggle("hidden");
  }
  return (
    <nav>
      <div className='container pt-4 pb-5 md:relative'>
        <div className='nav-row flex justify-between px-2 mb-2'>
          <div className='navigation md:hidden'>
            <i onClick={toggleMenu} className='bx bx-menu-alt-left text-sky-400 text-3xl font-extrabold cursor-pointer'></i>
            <ul className='nave_menu flex flex-col backdrop-blur-md absolute z-10 bg-sky-300/10 rounded-lg overflow-hidden w-0 transition-[width]'>
              <Link className='px-2 py-2 text-sky-900 hover:bg-sky-900/70 hover:text-sky-100' href={"/"}>
                Home
              </Link>
              {login && (
                <Link className='px-2 py-2 text-sky-900 hover:bg-sky-900/70 hover:text-sky-100' href={"/favorites"}>
                  Favorites
                </Link>
              )}
              <Link className='px-2 py-2 text-sky-900 hover:bg-sky-900/70 hover:text-sky-100' href={"/services"}>
                Services
              </Link>
              <Link className='px-2 py-2 text-sky-900 hover:bg-sky-900/70 hover:text-sky-100' href={"/about"}>
                About
              </Link>
              <Link className='px-2 py-2 text-sky-900 hover:bg-sky-900/70 hover:text-sky-100' href={"/contact"}>
                Contact
              </Link>
              {!login ? (
                <>
                  <Link className='px-2 py-2 text-sky-900 hover:bg-sky-900/70 hover:text-sky-100' href={"/login"}>
                    Login
                  </Link>
                  <Link className='px-2 py-2 text-sky-900 hover:bg-sky-900/70 hover:text-sky-100' href={"/sign-in"}>
                    Sign-up
                  </Link>
                </>
              ) : (
                <Link className='px-2 py-2 text-sky-900 hover:bg-sky-900/70 hover:text-sky-100' href={"/account"}>
                  Account
                </Link>
              )}
            </ul>
          </div>
          <div className='logo'>
            <p className='font-extrabold text-xl'>
              <span className='text-sky-400'>OZ</span>-Store
            </p>
          </div>
          <div className='basket'>
            <i onClick={toggleCart} className='bx bxs-cart-alt text-sky-400 text-3xl font-extrabold cursor-pointer'></i>
            <div className='cart_content fixed right-0 top-0 bottom-0 z-10 bg-slate-100 max-w-sm hidden'>
              <div onClick={toggleCart} className='close_icon flex items-center text-red-600'>
                <i className='bx bx-x text-3xl cursor-pointer bg-red-50'></i>
              </div>
              <h4 className='tracking-widest text-3xl text-slate-600 text-center mb-10'>Your Shopping Cart</h4>
              <div className='cart_items'>
                <Cart_item image='https://telegra.ph/file/3c58a143dc9ea2555dd1a.png' name='Smart bluetooth airpods' quantity={1} totalPrice='120' />
                <Cart_item image='https://telegra.ph/file/f1885619e92335a920a2c.png' name='New Camera Canon G23_GOLD 2023 X6 zoom  PowerBank 2023 uniq_X99' quantity={1} totalPrice='120' />
                <Cart_item image='https://telegra.ph/file/24c3139e02826265dcae5.png' name='Power Of PowerBank 2023 uniq_X99' quantity={1} totalPrice='120' />
              </div>
              <div className='total_price_checkout absolute bottom-0 bg-sky-100 w-full flex justify-between p-2'>
                <div className='price'>
                  <span className='text-xl'>Total Price:</span>
                  <span className='text-xl ml-2'>$120</span>
                </div>
                <div className='checkout'>
                  <Link href={"/checkout"} className='text-xl text-slate-600 text-center border border-sky-500 py-1 px-2 rounded-md'>
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='search md:absolute md:mx-auto md:top-5 md:left-1/2 md:-translate-x-1/2 md:w-2/3'>
          <div className='search-bar relative flex justify-center items-center w-9/12 max-w-screen-sm ml-auto mr-auto'>
            <input type='text' className='shadow-[0px_0px_0px_1px_#38bdf87a] outline-none rounded-md w-full pl-2 py-1 font-semibold text-sm' placeholder='search...' />
            <i className='bx bx-search-alt text-sky-400 absolute right-0 cursor-pointer mx-2'></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
