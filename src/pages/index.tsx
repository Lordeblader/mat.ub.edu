import { Inter } from "next/font/google";
import Navbar from "@/layout/Navbar";
import SlideShow from "@/components/Slideshow";
import { SlideData } from "@/components/Slideshow";
import Graduation from "@/assets/images/graduation-2148715_1920.jpg";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

interface ActualitatItem {
  title: string;
  date: string;
  img: string;
}

export interface MenuItem {
  title: string;
  url?: string;
  children?: MenuItem[];
}

export default function Home() {
  const slides: SlideData[] = [
    {
      title: "Premis i ajuts",
      subtitle: "Lorem ipsum dolor sit amet",
      src: Graduation,
      alt: "Premis i ajuts",
    },
  ];

  const actualitat: ActualitatItem[] = [
    {
      title: "Beques Màster+UB",
      date: "27 d'abril de 2023",
      img: "https://mat.ub.edu/wp-content/uploads/2023/01/matematiquesinformatica-pos-rgb-300x142.jpg",
    },
    {
      title: "Amb la Matefest Infofest torna «El trívial de la Biblioteca»",
      date: "26 d'abril de 2023",
      img: "https://mat.ub.edu/wp-content/uploads/2023/04/matefest.png",
    },
  ];

  const sideMenu: MenuItem[] = [
    {
      title: "Estudis",
    },
    {
      title: "Portals",
      children: [
        {
          title: "Graus",
        },
        {
          title: "Graus simultanis",
        },
        {
          title: "Màsters",
        },
        {
          title: "Doctorat",
        },
        {
          title: "Postgraus",
        },
        {
          title: "Màsters i postgraus propis",
        },
      ],
    },
    {
      title: "Agenda",
    },
    {
      title: "Avisos",
    },
    {
      title: "Secretaria",
    },
    {
      title: "Departament",
    },
  ];

  return (
    <main>
      <Navbar />
      <SlideShow slides={slides} />
      <div className="flex">
        <div className="w-3/4 flex p-10 pt-12">
          <div className="w-1/2 pr-8 border-r border-gray-300">
            <div className="flex justify-between mb-5">
              <h2 className="text-2xl">Agenda</h2>
              <button className="border-2 border-gray-500 p-2 px-5 text-sm relative -top-1">
                Veure tot
              </button>
            </div>
            <div>
              <div className="border-b border-gray-200 p-4">
                Lorem ipsum dolor sit amet
              </div>
              <div className="border-b border-gray-200 p-4">
                Lorem ipsum dolor sit amet
              </div>
              <div className="border-b border-gray-200 p-4">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-6">
            <div className="flex justify-between mb-5">
              <h2 className="text-2xl">Agenda</h2>
              <button className="border-2 border-gray-500 p-2 px-5 text-sm relative -top-1">
                Veure tot
              </button>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {actualitat.map((value, index) => (
                <Link
                  href=""
                  key={index}
                  className="relative w-full h-72 overflow-hidden shadow-lg group"
                >
                  <div className="w-full relative overflow-hidden h-44">
                    <img
                      src={value.img}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                  </div>
                  <div className="p-3">
                    <h4 className="mb-1 max-h-12 overflow-hidden text-ellipsis whitespace-break-spaces">
                      {value.title}
                    </h4>
                    <div className="text-gray-500 text-xs">{value.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/4 pt-8 p-4 pr-10">
          {sideMenu.map((value, index) => (
            <Link
              href={value.url ?? ""}
              key={index}
              className="py-4 block border-b border-gray-300 text-sm font-medium relative"
            >
              {value.title}
              {value.children && (
                <div className="absolute right-3 inset-y-0 py-5">
                  <FaAngleDown />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
