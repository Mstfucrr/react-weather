import { useTranslation } from 'react-i18next'
const logo = require('../assets/images/logo.png')

export const Navbar = () => {
  const [t, i18n] = useTranslation('global')

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }


  return (
    <div className="py-[45px]">
      <div className="container mx-auto max-w-[1170px] flex justify-between items-center">
        <a href="/" className='flex'>
          <img src={logo} alt="" className="mr-[10px] align-middle" />
          <div className="inline-block">
            <h1 className="text-white align-middle pt-2 font-bold">
              {t("header")}
            </h1>
          </div>
        </a>

        {/* Default snippet for navigation */}
        <div>

          <ul className="menu list-unstyled inline-block 
          after:content-none after:clear-both after:block after:overflow-hidden after:h-0
               
            ">
            <li className="menu-item current-menu-item float-left ml-[10px]">
              <a className='px-6 py-1 border-solid border-transparent border-2 rounded-[30px] 
              text-white transition-all duration-300 font-[400] hover:border-[#009ad8] hover:text-[#009ad8]'
                href="/weather">
                home
                </a>

            </li>
            {/* <li className="menu-item"><a href="news.html">News</a></li> */}
          </ul> {/* .menu */}

          {/* language */}
          <div className="flex float-right">
            <div className="flex items-center">
              <div>
                <button onClick={() => changeLanguage('tr')} className="text-white hover:text-[#009ad8] transition-all duration-300">TR</button>
              </div>
              &nbsp;
              /
              &nbsp;
              <div>
                <button onClick={() => changeLanguage('en')} className="text-white hover:text-[#009ad8] transition-all duration-300">EN</button>
              </div>
            </div>
          </div>


        </div> {/* .main-navigation */}

        <div className="mobile-navigation hidden"></div>
      </div>
    </div>
  )
}
