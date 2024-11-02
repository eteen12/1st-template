import Button from "../reusables/button";
import Link from "next/link";
import { companyServices } from "../pages/serviceContent";

export default function Services() {
  return (
    <div className="relative bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Services
        </h2>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Explore our wide range of services
        </p>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {companyServices.map((companyService) => (
              <div key={companyService.name} className="pt-6 ">
                <div className="flow-root  bg-gray-50 px-6 pb-8 ring-1 ring-gray-200 shrinkAnimation transition3">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center bg-indigo-500 p-3 shadow-lg">
                        <companyService.icon
                          aria-hidden="true"
                          className="h-8 w-8 text-white"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg/8 font-semibold tracking-tight text-gray-900">
                      {companyService.name}
                    </h3>
                    <p className="mt-5 text-base/7 text-gray-600">
                      {companyService.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-x-6">
            <Button
              text="Get a quote"
              link="/about"
              className="bg-indigo-500 text-white mediumBold"
            />
            <Link
              href="/services"
              className="font-semibold tracking-tight text-gray-900 transition-colors hover:text-indigo-500 ease-in-out duration-300 flex items-center justify-center gap-1 text-base lg:text-lg"
            >
              View all services{" "}
              <span aria-hidden="true" className="text-4xl mb-3">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
