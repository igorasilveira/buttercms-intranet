import Image from "next/image";
import HeroHeader from "../components/HeroHeader";

const callouts = [
  {
    name: "Human Relations",
    description: "All your human needs in one place",
    imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    imageAlt: "Person writing on paper documents.",
    href: "/departments/hr",
  },
  {
    name: "Sales",
    description: "Access our sales dashboard",
    imageSrc: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
    imageAlt: "Sales dashboard",
    href: "/departments/sales",
  },
  {
    name: "Marketing",
    description: "Our company press kit",
    imageSrc: "https://images.unsplash.com/photo-1607703703674-df96af81dffa",
    imageAlt: "Woman writing on white board.",
    href: "/departments/marketing",
  },
];

export default function Home() {
  return (
    <>
      <HeroHeader
        title={
          <>
            <span className="block xl:inline">Welcome to our</span>{" "}
            <span className="block text-indigo-600 xl:inline">
              company intranet
            </span>
          </>
        }
        subtitle="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
        fugiat aliqua."
        image={
          "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        }
      />
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900 underline decoration-indigo-400 underline-offset-2 decoration-4">
              Departments
            </h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      layout="fill"
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
