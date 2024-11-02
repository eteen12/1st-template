import Link from "next/link";

export default function ServiceCards({ companyServices }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
      {companyServices.map((companyService) => (
        <div
          key={companyService.id}
          className="relative max-w-2xl mx-auto text-black shrinkAnimation transition3 group "
        >
          <div
            className="bg-black h-[350px] bg-cover"
            style={{ backgroundImage: `url(${companyService.imageUrl})` }}
          ></div>
          <div className="relative bg-white px-8 py-8 shadow-lg mx-auto mb-10 z-20 ring-1 ring-gray-200 border-b-8 border-indigo-500">
            <div className="absolute -top-10 w-16 h-16 bg-indigo-500 flex justify-center items-center">
              <companyService.icon
                aria-hidden="true"
                className="h-8 w-8 text-white"
              />
            </div>
            <h3 className="text-2xl font-bold group-hover:text-indigo-500 transition3">
              {companyService.title}
            </h3>

            <p className="text-lg leading-8 text-gray-600 mt-2">
              {companyService.description}
            </p>
            <div className="mt-10">
              <Link
                href={`/services/${companyService.id}`}
                className="link-effect text-lg leading-8 text-indigo-500 font-bold relative"
              >
                View Service
              </Link>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
