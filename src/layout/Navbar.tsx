import Image from "next/image";
import LogoUB from "@/assets/images/logo_ub.png";
import Link from "next/link";
import { FaAngleDown, FaGlobeAmericas } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-[#0062B2] text-endeavour-50 px-6 pt-2 pb-5">
      <div className="text-right text-xs font-normal">
        <span>Directori</span>
        <span className="border-r-1 b-slate-200"></span>
        <span className="px-6 inline-block text-[#4C91C9]">|</span>
        <button>
          <FaGlobeAmericas className="inline -top-0.5 relative mr-2" />
          <span>Català </span><span className="text-[0.5rem] relative -top-0.5 ml-1">▼</span>
        </button>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex items-center">
          <Image
            className="h-16 w-auto"
            src={LogoUB}
            alt="Universitat de Barcelona"
          />
          <div className="border-r border-[#4C91C9] h-10 mx-3"></div>
          <Link href="/">
            <div className="font-display">
              Facultat de
              <br />
              Matemàtiques i Informàtica
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex jutsify-evenly mb-2 font-medium text-[0.95rem]">
          <Link className="mx-3 2xl:mx-7" href="">
            La facultat
          </Link>
          <Link className="mx-3 2xl:mx-7" href="/estudis">
            Estudis&nbsp;
            <FaAngleDown className="inline relative" />
          </Link>
          <Link className="mx-3 2xl:mx-7" href="">
            Futurs estudiants
          </Link>
          <Link className="mx-3 2xl:mx-7" href="">
            Recerca
          </Link>
          <Link className="mx-3 2xl:mx-7" href="">
            Empreses
          </Link>
          <Link className="mx-3 2xl:mx-7" href="">
            Mobilitat
          </Link>
          <Link className="ml-3 2xl:ml-7" href="">
            Serveis
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
