import Author from "../reusables/author";

export default function Testimonials() {
  return (
    <>
      <div className="relative mt-56 py-24 h-screen px-8 sm:px-6  max-w-7xl hidden lg:block mx-auto  ">
        <div className="absolute bg-indigo-500 w-[400px] h-[450px] left-1/2 transform -translate-x-1/2 z-0"></div>
        <div className="grid grid-cols-2 mx-auto gap-16 -mt-32">
          {/*1st grid*/}
          <div className="relative grid grid-cols-1 grid-rows-[15%_90%] gap-8 justify-center mt-10">
            <div className="-mt-10">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                About us
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                What our Customers are saying
              </p>
            </div>
            <div className="bg-red-500 w-full h-[350px] z-20 "></div>
          </div>
          {/*Second grid*/}
          <div className="relative grid grid-cols-1 gap-16 -mt-5">
            <div className="bg-red-500 w-full h-[350px] z-20"></div>
            <div className="bg-red-500 w-full h-[350px] z-20"></div>
          </div>
        </div>
      </div>
      {/*Mobile layout */}
      <div className="relative mt-36 py-24  px-8 sm:px-6 lg:hidden  max-w-2xl mx-auto  ">
        <div className="absolute bg-indigo-500 w-[500px] h-[900px] left-1/2 transform -translate-x-1/2 z-0"></div>
        <div className="relative bg-white px-6 py-4 shadow-lg h-[300px] mx-auto  mb-10 z-20">
          <div className=""></div>
        </div>
        <div className="relative bg-white px-6 py-4 shadow-lg h-[300px] mx-auto  mb-10 z-20">
          <div className=""></div>
        </div>
        <div className="relative bg-white px-6 py-4 shadow-lg h-[300px] mx-auto  mb-10 z-20">
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
