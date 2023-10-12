import Image from "next/image";

export default function Cart_item({ image, name, quantity, totalPrice }) {
  return (
    <div className='cart_item flex gap-x-3 py-2 px-4 odd:bg-white odd:my-4'>
      <div className='cart_item_info flex items-center gap-x-2'>
        <div className='cart_item_img p-2 border rounded-md flex-[1] relative h-full'>
          <Image fill={true} className='w-60' src={image} alt='cart_item' />
        </div>
        <h4 className='cart_item_name tracking-widest text-xl font-medium line-clamp-3 flex-[2]'>{name}</h4>
      </div>
      <div className='cart_item_quantity flex flex-col justify-center gap-y-1'>
        <i className='bx bx-plus bg-slate-300 p-1 rounded-md font-bold cursor-pointer border border-transparent hover:border-slate-700'></i>
        <span className='cart_item_quantity text-center text-xl'>{quantity}</span>
        <i className='bx bx-minus bg-slate-300 p-1 rounded-md font-bold cursor-pointer border border-transparent hover:border-slate-700'></i>
      </div>
      <div className='cart_item_total flex flex-col justify-center gap-y-2'>
        <span className='cart_item_total_price text-xl font-bold text-sky-500 text-center'>{totalPrice}$</span>
        <button className='delete_cart_item bg-red-100 text-red-600 tracking-wider rounded-md py-1 px-2 border border-transparent hover:border-red-600'>delete</button>
      </div>
    </div>
  );
}
