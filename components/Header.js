import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Sales", href: "/departments/sales" },
  { name: "HR", href: "/departments/hr" },
  { name: "Company", href: "/departments/marketing" },
];

export default function Header() {
  return (
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav
        className="relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href={"/"}>
              <a>
                <span className="sr-only">Workflow</span>
                <Image
                  alt="tailwindui-logo"
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  width={46}
                  height={46}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </a>
        </div>
      </nav>
    </div>
  );
}
