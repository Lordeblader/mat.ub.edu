"use client";

import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

export interface SectionElement {
  title: string;
  img: StaticImageData | string;
  url?: string;
}

export interface Section {
  title: string;
  description?: string;
  elements: SectionElement[];
}

export type SectionsProps = React.HTMLProps<HTMLDivElement> & {
  sections: Section[];
};

const Sections = ({ sections, ...props }: SectionsProps) => {
  return (
    <div {...props}>
      {sections.map((section, index) => (
        <section key={index} className="mt-3 mb-6 w-full">
          <Disclosure defaultOpen={true}>
            {({ open }) => (
              <>
                <DisclosureButton className="w-full">
                  <header
                    className="border-y border-gray-300 py-3 text-left w-full"
                    role="button"
                    aria-expanded
                  >
                    <h2 className="font-sans text-endeavour-600 font-normal text-xl relative">
                      {section.title}
                      <FaAngleDown className="absolute inset-y-1 right-2" />
                    </h2>
                  </header>
                </DisclosureButton>

                <div className="w-full overflow-hidden">
                  <Transition
                    show={open}
                    enter="transition-[max-height] duration-300 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition-[max-height] duration-300 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <DisclosurePanel static>
                      <div className="pt-5 px-1 w-full">
                        {section.description && <p>{section.description}</p>}
                        <div className="mt-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {section.elements.map((element, index) => (
                            <div key={index}>
                              <Link
                                className="group relative flex justify-center items-center h-60 overflow-hidden"
                                href={element.url ?? ""}
                              >
                                <Image
                                  src={element.img}
                                  alt={element.title}
                                  className="group-hover:scale-110 transition-transform duration-500 absolute object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#030F1ACC] to-[#0062B288]"></div>
                                <h3 className="relative text-white text-center text-2xl px-4">
                                  {element.title}
                                </h3>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Transition>
                </div>
              </>
            )}
          </Disclosure>
        </section>
      ))}
    </div>
  );
};

export default Sections;
