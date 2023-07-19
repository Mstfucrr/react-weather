import React from 'react'
const logo = require('../assets/images/logo.png')

export const Navbar = () => {
  return (
    <div className="py-[50px]">
      <div className="container mx-auto max-w-[1170px] flex justify-between items-center">
        <a href="#" className='flex'>
          <img src={logo} alt="" className="mr-[10px] align-middle" />
          <div className="inline-block">
            <h1 className="text-white mb-1 font-bold">Hava durumu</h1>
          </div>
        </a>

        {/* Default snippet for navigation */}
        <div>
          {/* <button type="button" className="menu-toggle my-auto bg-transparent border-solid border-transparent 
                                          text-white p-5 rounded-[40px] transition-all duration-[3s] ease-out
                                          md:hidden inline-block hover:border-cyan-600 active:text-cyan-600
                                          ">
            <i className="fa fa-bars"></i>
          </button> */}
          <ul className="menu list-unstyled inline-block 
          after:content-none after:clear-both after:block after:overflow-hidden after:h-0
               
            ">
            <li className="menu-item current-menu-item float-left ml-[10px]">
              <a className='px-6 py-1 border-solid border-transparent border-2 rounded-[30px] 
              text-white transition-all duration-300 font-[400] hover:border-[#009ad8] hover:text-[#009ad8]' href="/weather">Home</a>
            </li>
            {/* <li className="menu-item"><a href="news.html">News</a></li> */}
          </ul> {/* .menu */}
        </div> {/* .main-navigation */}

        <div className="mobile-navigation hidden"></div>
      </div>
    </div>
  )
}
