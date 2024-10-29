import Author from "../reusables/author";

export default function Testimonials() {
  return (
    <>
      <div className="relative bg-gray-100 mt-36 h-screen hidden lg:block">
        <div className="relative h-[50vh] w-[20vw] bg-blue-200 mx-auto">
          {/*First layout*/}
          <div className="absolute -left-10 bottom-0 max-w-7xl">
            <div className="text-black">
              <p>Testimonials</p>
              <h2>What our people say</h2>
            </div>
            <div className="h-[300px] bg-red-500">
              <p></p>
              <Author />
            </div>
          </div>
          {/*Second layout*/}
          <div>
            {/*first card*/}
            <div className="absolute -right-10 bottom-0 max-w-7xl">
              <div className="text-black">
                <p>Testimonials</p>
                <h2>What our people say</h2>
              </div>
              <div className="h-[300px] bg-red-500">
                <p></p>
                <Author />
              </div>
            </div>
            {/*Second card*/}
            <div className="absolute -right-5 top-0 max-w-7xl">
              <div className="text-black">
                <p>Testimonials</p>
                <h2>What our people say</h2>
              </div>
              <div className="h-[300px] bg-red-500">
                <p></p>
                <Author />
              </div>
            </div>
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
