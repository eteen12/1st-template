import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Button from "../reusables/button";

const features = [
  {
    name: "lorem of all lorems",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Welcome to lorem ville",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
];

export default function AboutUs() {
  return (
    <div className="overflow-hidden bg-white  py-24 mb-20">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
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
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
                <div className="pt-7">
                  <Button
                    text="About us"
                    link="/about"
                    className="bg-indigo-500 mediumBold text-white"
                  />
                </div>
              </dl>
            </div>
            
          </div>

          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4 mx-auto -mt-3">
            <div className="relative pb-24 pt-20 sm:pb-32 px-6 lg:px-8 max-w-2xl h-full w-full mx-auto">
              <div className="absolute top-12 right-32 lg:right-36 inset-0 bg-indigo-500 z-0 mx-auto h-[600px] w-[90%] lg:w-[90%] "></div>
              <div className=" bg-white p-8 ring-1 ring-gray-200 relative z-20  lg:ml-0 shadow-lg h-[600px] w-[500px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
