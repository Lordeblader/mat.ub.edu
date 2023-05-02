import Image from "next/image";
import LogoUB from "@/assets/images/logo_ub.png";
import Link from "next/link";
import { FaAngleDown, FaBars, FaGlobeAmericas } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-[#0062B2] text-endeavour-50 px-6 pt-2 pb-5">
      <div className="text-right text-xs font-normal">
        <span>Directori</span>
        <span className="border-r-1 b-slate-200"></span>
        <span className="px-6 inline-block text-[#4C91C9]">|</span>
        <button>
          <FaGlobeAmericas className="inline -top-0.5 relative mr-2" />
          <span>Català </span>
          <span className="text-[0.5rem] relative -top-0.5 ml-1">▼</span>
        </button>
      </div>
      <div className="mt-4 md:mt-0 flex justify-between items-center lg:items-end">
        <div className="flex items-center pr-4">
          <Link href="https://web.ub.edu/">
            <Image
              className="max-h-8 md:max-h-16 w-auto"
              src={LogoUB}
              alt="Universitat de Barcelona"
            />
          </Link>
          <div className="border-r border-[#4C91C9] h-10 mx-3"></div>
          <Link href="/">
            <div className="text-sm md:text-base font-display">
              Facultat de
              <br />
              Matemàtiques i Informàtica
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex justify-between mb-2 font-medium text-[0.95rem]">
          <Link className="mx-3 xl:mx-6" href="">
            La facultat
          </Link>
          <Link className="mx-3 xl:mx-6" href="/estudis">
            Estudis&nbsp;
            <FaAngleDown className="inline relative" />
          </Link>
          <Link className="mx-3 xl:mx-6" href="">
            Futurs estudiants
          </Link>
          <Link className="mx-3 xl:mx-6" href="">
            Recerca
          </Link>
          <Link className="mx-3 xl:mx-6" href="">
            Empreses
          </Link>
          <Link className="mx-3 xl:mx-6" href="">
            Mobilitat
          </Link>
          <Link className="ml-3 xl:mx-6" href="">
            Serveis
          </Link>
        </div>
        <div className="lg:hidden">
          <FaBars className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
