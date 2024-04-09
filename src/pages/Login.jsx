import { Link } from "react-router-dom";
import "../index.css"
import { useState, useEffect } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);


  return (
    <div className={`page ${isOpen ? 'open' : ''}`}>
      <div className='h-screen justify-center items-center flex w-full antialiased'>
        <div className='mx-auto h-2/3 w-1/3 flex flex-col justify-center rounded-xl'>

          <h1 className='text-6xl text-center font-sans font-bold text-black mb-10'>
            M<span className="font-light text-green-400">❂</span>vie <span className="text-green-400">Verse</span>
          </h1>

          <form method="post" action="/register">
            <input className='w-1/2 my-4 py-1 px-4 rounded outline-none block mx-auto duration-500 border border-solid border-[#eee] focus:border-green-400' required type="email" name='Username' placeholder='Email' />
            <input className='w-1/2 my-4 py-1 px-4 rounded outline-none block mx-auto duration-500 border border-solid border-[#eee] focus:border-green-400' required type="password" name="Password" placeholder='Password' />
            <button type='Submit' className='block mx-auto bg-green-400 hover:bg-green-800 py-2 px-6 rounded text-white' name='submit'>Login</button>
          </form>
          <div className="flex justify-center gap-3 mt-7">
            <p className="text-center text-slate-500">You don&apos;t have an account?</p>
            <Link
              to={"/register"}
              className="hover:text-red-500"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

