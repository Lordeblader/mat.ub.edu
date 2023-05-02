import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import clsx from "clsx";

export interface MenuItem {
  title: string;
  url?: string;
  children?: MenuItem[];
}

export type SideMenuProps = React.HTMLProps<HTMLDivElement> & {
  items: MenuItem[];
};

const SideMenu = ({ items, className, children, ...props }: SideMenuProps) => {
  return (
    <div {...props} className={className ?? "font-medium"}>
      <ul>
        {items.map((value, index) => {
          console.log(value);
          if (value.children) {
            return (
              <li key={index} className="w-full">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full ">
                        <div className="text-left w-full py-4 text-sm block border-b border-gray-300 relative">
                          {value.title}
                          <div className="absolute right-3 inset-y-0 py-5">
                            <FaAngleDown />
                          </div>
                        </div>
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        enter="transition-[max-height] duration-300 ease-in"
                        enterFrom="transform max-h-0"
                        enterTo="transform max-h-screen"
                        leave="transition-[max-height] duration-300 ease-in-out"
                        leaveFrom="transform max-h-screen"
                        leaveTo="transform max-h-0"
                        className="w-full overflow-hidden"
                      >
                        <Disclosure.Panel static>
                          {value.children && <SideMenu items={value.children} className="pl-5 font-normal" />}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <Link
                  href={value.url ?? ""}
                  className="py-4 block border-b border-gray-300 text-sm relative"
                >
                  {value.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
