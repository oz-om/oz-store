import Image from "next/image";

export default function CategoryItem({ name, logo, by }) {
  return (
    <li className={"flex items-center cursor-pointer " + (by == "image" ? "flex-col" : "mt-1 gap-x-2 hover:bg-sky-200 hover:text-sky-500 py-1 px-2 ")}>
      {by == "image" ? (
        <div className='category_logo w-12 h-12 rounded-full bg-sky-700 relative'>
          <Image fill={true} loading='lazy' className='' src={logo} alt={name} />
        </div>
      ) : (
        <i className={"bx " + logo}></i>
      )}
      <h5 className='font-bold text-sm'>{name}</h5>
    </li>
  );
}
