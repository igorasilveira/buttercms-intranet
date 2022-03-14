export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="p-4 md:flex md:items-center md:justify-between md:p-6 text-slate-50 bg-gray-900">
        <span className="text-base sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            Intranet
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-base sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
