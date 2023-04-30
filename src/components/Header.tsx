import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbLink[];
}

export interface BreadcrumbLink {
  title: string;
  url?: string;
}

const Header = ({ title, subtitle, breadcrumbs }: HeaderProps) => {
  return (
    <div className="bg-gray-50 px-4 xl:px-10 py-8">
      <div className="text-sm text-gray-400 mb-6 ml-1">
        {breadcrumbs.map((value: BreadcrumbLink, index) => (
          <>
            {value.url ? (
              <Link href={value.url}>
                <span key={index} className="inline">
                  {value.title}
                </span>
              </Link>
            ) : (
              <span key={index} className="inline">
                {value.title}
              </span>
            )}
            <FaAngleRight className="text-gray-400 inline mx-4" />
          </>
        ))}
        <span className="inline text-gray-600 font-normal">{title}</span>
      </div>
      <div>
        <h1 className="text-4xl">{title}</h1>
        <p className="mt-2 mb-5 font-normal text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
