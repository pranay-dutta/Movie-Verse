import { Link } from "react-router-dom"
import "../index.css"
import { useState, useEffect } from "react";
const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);


  return (
    <div className={`page ${isOpen ? 'open' : ''}`}>
      <div className='h-screen justify-center items-center flex w-full antialiased'>
        <div className='mx-auto h-2/3 w-1/3 flex flex-col justify-center animate rounded-xl'>
          <h1 className='text-6xl text-center font-sans font-bold text-black mb-10'>
            M<span className="font-light text-red-400">❂</span>vie <span className="text-red-400">Verse</span>
          </h1>
          <form method="post" action="/register">
            <input className='w-1/2 my-4 py-1 px-4 rounded outline-none block mx-auto duration-500 border border-solid border-[#eee] focus:border-red-400' required type="username" name="username" placeholder='Username' />
            <input className='w-1/2 my-4 py-1 px-4 rounded outline-none block mx-auto duration-500 border border-solid border-[#eee] focus:border-red-400' required type="email" name='email' placeholder='Email' />
            <input className='w-1/2 my-4 py-1 px-4 rounded outline-none block mx-auto duration-500 border border-solid border-[#eee] focus:border-red-400' required type="password" name="password" placeholder='Password' />
            <input className='w-1/2 my-4 py-1 px-4 rounded outline-none block mx-auto duration-500 border border-solid border-[#eee] focus:border-red-400' required type="confirm password" name="Confirm Password" placeholder='Confirm Password' />
            <button type='Submit' className='block mx-auto bg-red-400 hover:bg-red-800 py-2 px-6 rounded text-white' name='submit'>Register</button>
          </form>
          <div className="flex justify-center gap-3 mt-7">
            <p className="text-center text-slate-500">Already have an account?</p>
            <Link
              to={"/login"}
              className="hover:text-green-500"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register