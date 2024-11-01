import Button from "@/components/reusables/button";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function Page() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-xl lg:max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Why us
            </h2>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-black md:text-6xl">
              Meet your team of trusted professionals
            </h1>
            <p className="mt-8 text-pretty text-lg mediumBold md:text-xl text-gray-700">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <Button
              text="About us"
              link="/about"
              className="bg-indigo-500 mediumBold mt-5"
            />
          </div>
        </div>
        <div className="relative pb-24 pt-20 py-24 lg:pt-32 lg:h-[50vh]">
          <div className="relative pb-24 pt-32  h-full w-full">
            <div className="absolute top-12 left-0 inset-0 bg-indigo-500 z-0 h-[250px] w-[70%] max-w-none lg:w-[55%] md:h-[500px] lg:h-[600px]"></div>
            <div className="absolute top-32 inset-0 left-6 right-3 sm:left-32 md:left-40 sm:right-10  mx-auto -mt-40 bg-white p-8 ring-1 ring-gray-200 z-20 shadow-lg md:h-[500px] lg:h-[600px] xl:w-[70%] xl:max-w-6xl"></div>
          </div>
        </div>
      </div>
      {/*STATS*/}
      <div className="bg-white -mt-24 pb-24 md:py-32 md:mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/*MISSON*/}
      <div className="bg-gray-50 ">
        <div className="relative max-w-7xl mx-auto py-24 md:px-6 lg:px-8 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
            {/*First div*/}
            <div className="relative order-1 lg:order-1 max-w-2xl lg:mx-0 lg:max-w-lg mx-auto px-6 ">
              <div className="lg:absolute lg:top-48">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Our Misson
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Dedicated to providing outstanding service
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
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
                <h2 className="text-base font-semibold leading-7 text-indigo-600 ">
                  About us
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Meet your skilled team of...
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
