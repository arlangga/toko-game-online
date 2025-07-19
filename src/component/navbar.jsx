import { useEffect, useState } from "react";
import SearchBar from "./searchbar";

const Navbar = () => {

  const [navScroll, scrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () =>{
      scrolled(window.scrollY > 1)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []) 



  return (
    // main-container-navbar
    <nav  className={`w-full bg-blue-600`
    }>

      {/* searchbar */}
      <div className={`mx-auto flex container sm:items-center gap-2 p-5 flex-col sm:flex-row ${navScroll ? "fixed top-0 right-0 left-0 bg-yellow-400 shadow-2xl z-50 transition-colors duration-300 ease-in" : "relative "} `}>
        <a href="#" className="text-2xl font-bold text-white pr-2">GameStore</a>
        <SearchBar/>
        <i class="fa-solid fa-cart-shopping text-2xl text-white absolute right-0 top-0 px-6 py-5 sm:static sm:p-0 sm:pl-2"></i>
      </div>

      {/* navigation */}
      <div className=" bg-yellow-500 shadow-2xl">
        <div className="container mx-auto ">
        <ul className="flex">
            <li><a href="#" className="font-bold text-sm text-white hover:bg-yellow-600 inline-block py-3 px-5 transition-colors duration-300">BERANDA</a></li>
            <li><a href="#" className="font-bold text-sm text-white hover:bg-yellow-600 inline-block py-3 px-5 transition-colors duration-300">KATEGORI</a></li>
            <li><a href="#" className="font-bold text-sm text-white hover:bg-yellow-600 inline-block py-3 px-5 transition-colors duration-300">PROMO</a></li>
        </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
