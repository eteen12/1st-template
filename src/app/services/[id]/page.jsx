import { companyServices } from "@/components/pages/serviceContent";

export default async function Page({ params }) {
  const { id } = await params;
  const companyService = companyServices.find((p) => p.id === id);
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Services
          </h2>
          <p className="max-w-2xl text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-6xl">
            {companyService.title}
          </p>
          <div className="relative mt-16 aspect-[2432/1442] h-[36rem] sm:h-auto sm:w-[calc(theme(maxWidth.7xl)-theme(spacing.16))]">
            <div className="absolute -inset-2" />
            <img
              alt=""
              src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
              className="h-full shadow-2xl ring-1 ring-black/10"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 ">
        <div className="relative max-w-7xl mx-auto py-24 md:px-6 lg:px-8 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
            {/*First div*/}
            <div className="relative order-1 lg:order-1 max-w-2xl lg:mx-0 lg:max-w-lg mx-auto px-6 ">
              <div className="lg:absolute lg:top-48">
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {companyService.header1}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {companyService.description1}
                </p>
              </div>
            </div>
            {/*Second div*/}
            <div className="relative px-6 lg:px-0 lg:pr-4 lg:pt-4 mx-auto -mt-3 order-2 lg:order-2 w-full h-full">
              <div className="relative pb-24 pt-20 sm:pb-32 px-6 lg:px-8 max-w-2xl h-full w-full mx-auto lg:pb-0 lg:mt-20">
                <div className="absolute top-12 mt-2 lg:mt-0 left-16 lg:left-16 mr-1 inset-0 bg-indigo-500 z-0 mx-auto h-[400px] sm:h-[500px] w-[90%]"></div>
                <div className=" bg-white p-8 ring-1 ring-gray-200 relative z-20  lg:ml-0 shadow-lg h-[400px] sm:h-[500px] w-[100%]"></div>
              </div>
            </div>
            {/*Third div*/}
            <div className="relative px-6 lg:px-0 lg:pr-4 lg:pt-4 mx-auto -mt-3 order-4 lg:order-3 w-full h-full">
              <div className="relative pb-24 pt-20 sm:pb-32 px-6 lg:px-8 max-w-2xl h-full w-full mx-auto lg:pt-0 lg:-mt-20">
                <div className="absolute top-28 right-36 lg:right-36 inset-0 bg-indigo-500 z-0 mx-auto h-[400px] sm:h-[500px] w-[90%]  lg:top-8"></div>
                <div className=" bg-white p-8 ring-1 ring-gray-200 relative z-20 lg:ml-0 shadow-lg h-[400px] sm:h-[500px] w-[100%]   "></div>
              </div>
            </div>
            {/*Fourth div*/}
            <div className="relative h-full w-full  order-3 lg:order-4 max-w-2xl lg:mx-0 lg:max-w-lg mx-auto px-6">
              <div className="lg:absolute lg:bottom-40">
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {companyService.header2}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {companyService.description2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
