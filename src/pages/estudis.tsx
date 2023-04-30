import Navbar from "@/layout/Navbar";
import Header from "@/components/Header";
import { BreadcrumbLink } from "@/components/Header";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { MenuItem } from ".";

import EnginyeriaInformatica from "@/assets/images/estudis/graus/informatica.jpg";
import Matematiques from "@/assets/images/estudis/graus/matematiques.jpg";
import MatesInfo from "@/assets/images/estudis/doble/matesinfo.jpeg";
import MatesFisica from "@/assets/images/estudis/doble/matesfisica.jpeg";
import MatesADE from "@/assets/images/estudis/doble/matesade.jpeg";
import Image, { StaticImageData } from "next/image";

interface SectionElement {
  title: string;
  img: StaticImageData | string;
  url?: string;
}

interface Section {
  title: string;
  description: string;
  elements: SectionElement[];
}

export default function Estudis() {
  const breadcrumbs: BreadcrumbLink[] = [
    {
      title: "Inici",
      url: "https://web.ub.edu/",
    },
    {
      title: "Facultat de Matemàtiques i Informàtica",
      url: "/",
    },
  ];

  const sideMenu: MenuItem[] = [
    {
      title: "Graus de la Facultat",
      children: [
        {
          title: "Enginyeria Informàtica",
        },
        {
          title: "Matemàtiques",
        },
      ],
    },
    {
      title: "Graus simultanis",
      children: [
        {
          title: "Enginyeria Informàtica",
        },
        {
          title: "Matemàtiques",
        },
      ],
    },
    {
      title: "Màsters",
      children: [
        {
          title: "Enginyeria Informàtica",
        },
        {
          title: "Matemàtiques",
        },
      ],
    },
    {
      title: "Doctorat",
      children: [
        {
          title: "Enginyeria Informàtica",
        },
        {
          title: "Matemàtiques",
        },
      ],
    },
    {
      title: "Postgraus",
    },
    {
      title: "Tràmits administratius",
    },
  ];

  const sections: Section[] = [
    {
      title: "Graus",
      description:
        "Els dos graus que es cursen a la Facultat de Matemàtiques i Informàtica:",
      elements: [
        {
          title: "Enginyeria informàtica",
          img: EnginyeriaInformatica,
        },
        {
          title: "Matemàtiques",
          img: Matematiques,
        },
      ],
    },
    {
      title: "Itineraris de graus simultanis",
      description:
        "A la Universitat de Barcelona hem previst uns itineraris que et permetran de cursar en cinc anys més el treball de fi de grau (18 crèdits) els estudis de Matemàtiques i Enginyeria Informàtica, els de Matemàtiques i Física o els de Matemàtiques i ADE, simultàniament. Per fer-ho, hauràs de completar un total de 318 crèdits i cursar assignatures dels dos graus. Si vols més informació sobre aquesta opció, pots consultar-la a:",
      elements: [
        {
          title: "Matemàtiques + Enginyeria informàtica",
          img: MatesInfo,
        },
        {
          title: "Matemàtiques + Física",
          img: MatesFisica,
        },
        {
          title: "Matemàtiques + ADE",
          img: MatesADE,
        },
      ],
    },
  ];

  return (
    <main>
      <Navbar />
      <Header
        title="Estudis"
        subtitle="Lorem ipsum dolor sit amet"
        breadcrumbs={breadcrumbs}
      />
      <div className="flex px-12 py-10">
        <div className="w-1/4 pr-8">
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
        <div className="w-3/4 px-4">
          <p className="mb-6">
            {`La Facultat de Matemàtiques i Informàtica de la UB ofereix dos graus, tres dobles graus, tres màsters i està involucrada en els programes de doctorat de Matemàtiques i d'Enginyeries`}
          </p>

          <div>
            {sections.map((section, index) => (
              <section key={index}>
                <header
                  className="border-y border-gray-300 py-3"
                  role="button"
                  aria-expanded
                >
                  <h2 className="font-sans text-endeavour-600 font-normal text-xl relative">
                    {section.title}
                    <FaAngleDown className="absolute inset-y-1 right-2" />
                  </h2>
                </header>
                <div className="py-5 px-1">
                  <p>{section.description}</p>

                  <div className="mt-6 mb-8 grid grid-cols-2 gap-6">
                    {section.elements.map((element, index) => (
                      <div key={index} className="">
                        <Link
                          className="block h-60 relative overflow-hidden"
                          href={element.url ?? ""}
                        >
                          <Image
                            src={element.img}
                            alt={element.title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-[#030F1ACC] to-[#0062B288]"></div>
                          <h3 className="text-white absolute top-[46%] w-full text-center -tranlate-y-1/2 text-2xl">
                            {element.title}
                          </h3>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
