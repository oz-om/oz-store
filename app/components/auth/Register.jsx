import Link from "next/link";
import InputField from "./InputField";

export default function Register() {
  return (
    <div className='login_wrapper bg-sky-400/10 rounded-md p-5 relative overflow-hidden max-w-xs'>
      <div className='login_title'>
        <p className='text-sm font-medium font-sans text-center'>
          Login to be able to make a collection of <span className='text-sky-500'>favorite</span> products and save your data.
        </p>
      </div>
      <form action='/' className='mt-7'>
        <InputField type='text' placeholder='username' icon='bx-user' />
        <InputField type='email' placeholder='email' icon='bxs-user' />
        <InputField type='password' placeholder='password' icon='bxs-shield' />
        <div className='submit text-center'>
          <button type='submit' className='w-1/2 bg-sky-200 text-sky-500 border border-sky-500 rounded-md py-1 hover:bg-sky-500 hover:text-white hover:border-white'>
            register
          </button>
        </div>
      </form>
      <div className='forget_credentials_container text-end text-xs py-2'>
        <Link href='/' className='text-sky-500'>
          I already have an account
        </Link>
      </div>
      <div className='authentication_with flex justify-between'>
        <p>Or Continue With</p>
        <ul className='media_list flex h-20'>
          <li className='self-end px-2 bg-red-500 h-7 w-7 grid place-content-center rounded-full'>
            <i className='bx bxl-google-plus text-white text-xl cursor-pointer'></i>
          </li>
          <li className='self-center px-2 bg-blue-500 h-7 w-7 grid place-content-center rounded-full'>
            <i className='bx bxl-facebook text-white text-xl cursor-pointer'></i>
          </li>
          <li className=' px-2 bg-cyan-500 h-7 w-7 grid place-content-center rounded-full'>
            <i className='bx bxl-twitter text-white text-xl cursor-pointer'></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
