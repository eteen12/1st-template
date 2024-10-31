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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About us
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
        <div className="relative pb-24 pt-20 lg:pt-32">
          <div className="relative pb-24 pt-32  h-full w-full">
            <div className="absolute top-12 left-0 inset-0 bg-indigo-500 z-0 h-[250px] w-[70%] max-w-none lg:w-[55%] md:h-[600px]"></div>
            <div className="absolute top-32 inset-0 left-6 right-3 sm:left-32 md:left-40 sm:right-10  mx-auto -mt-40 bg-white p-8 ring-1 ring-gray-200 z-20 shadow-lg md:h-[600px] xl:w-[70%] xl:max-w-6xl"></div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32 md:mt-32">
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
    </>
  );
}
