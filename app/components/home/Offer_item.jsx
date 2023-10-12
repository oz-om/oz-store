import Image from "next/image";

export default function Offer_item({ offer_pic, className }) {
  return (
    <div className={"ofr rounded-lg overflow-hidden mb-3 relative h-80 sm:h-auto " + className}>
      <Image fill={true} loading='lazy' className='object-cover' src={offer_pic} alt='offer_pic' />
    </div>
  );
}
