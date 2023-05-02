import SideMenu, { MenuItem } from "@/components/SideMenu";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";


export type LayoutProps = React.HTMLProps<HTMLElement> & {
  menu?: MenuItem[];
};

const Layout = ({ menu, children }: LayoutProps) => {
  if (menu)
    return (
      <div className="flex flex-col md:flex-row px-5 md:px-10 lg:px-14 py-10">
        <div className="md:w-1/4 mb-20 md:mb-0 md:px-0 md:pr-8">
          <SideMenu items={menu} />
        </div>
        <div className="md:w-3/4 md:px-4">{children}</div>
      </div>
    );
  else
    return (
      <div className="px-5 md:px-10 lg:px-14 py-10">
        <div className="md:px-4">
          {children}
        </div>
      </div>
    );
};

export default Layout;
