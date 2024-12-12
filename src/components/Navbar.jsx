import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div className="shadow-md h-20">
      <nav className="container h-full mx-auto">
        <div className="flex justify-around p-5 gap-12">
          <h1 className='text-3xl text-center font-sans font-bold text-black'>
            M<span className="font-light text-red-400">❂</span>vie <span className="text-red-400">Verse</span>
          </h1>
          <div className="w-1/3 flex gap-8 items-center">
            <input type="text" className="border border-[#ddd] bg-slate-50 border-solid outline-none w-9/12 rounded px-2 py-1 drop-shadow-sm duration-200 focus:border-slate-500 placeholder:text-center" placeholder="📡 Search a movie or a series" />
            {
              isLoggedIn ?
                <div className="rounded-full bg-slate-500 hover:bg-slate-800 text-white w-10 h-10 overflow-hidden cursor-pointer">
                  <img className="w-full h-full object-cover object-center" src="https://thephotoacademy.com/storage/magazine/448/3-the-photo-academy-portrait-Yousuf-Karsh.jpeg" alt="albert-einstein" />
                </div>
                :
                <div className="hover:bg-orange-700 bg-orange-600 px-4 py-1 h-full rounded text-white cursor-pointer"><Link to="/login">Log in</Link></div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar