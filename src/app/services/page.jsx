import ServiceCards from "@/components/pages/serviceCards";
import { companyServices } from "@/components/pages/serviceContent";

export default function Page() {
  return (
    <div className="h-full w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-36">
      <div className="max-w-2xl lg:mx-0 mb-10 mt-10 lg:flex-row lg:flex lg:max-w-7xl lg:justify-between ">
        <div className="lg:max-w-lg mx-auto text-center">
          <h2 className="text-base lg:text- font-semibold leading-7 text-indigo-600">
            Projects
          </h2>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
      </div>

      <ServiceCards companyServices={companyServices} />
    </div>
  );
}
