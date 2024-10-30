import Button from "@/components/reusables/button";
import { SlPhone, SlEnvolope, SlLocationPin } from "react-icons/sl";

// Contact information data
const contactInfo = [
  {
    id: 1,
    icon: <SlPhone aria-hidden="true" className="h-10 w-10 text-white" />,
    title: "Call us",
    description: "+1(123)-123-1234",
  },
  {
    id: 2,
    icon: <SlEnvolope aria-hidden="true" className="h-10 w-10 text-white" />,
    title: "Email us",
    description: "your@email.com",
  },
  {
    id: 3,
    icon: <SlLocationPin aria-hidden="true" className="h-10 w-10 text-white" />,
    title: "Visit us in person",
    description: "+1(123)-123-1234",
  },
];

export default function Example() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[40%_60%]">
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl ">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Contact sales
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Aute magna irure deserunt veniam aliqua magna enim voluptate.
            </p>
          </div>
          <div className="mx-auto mt-20 max-w-lg space-y-16">
            {contactInfo.map((item) => (
              <div key={item.id} className="flex gap-x-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-indigo-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base/7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <form
          action="#"
          method="POST"
          className="relative px-20 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 "
        >
          <div className="absolute lg:top-40 top-3 right-20 lg:right-36 inset-0 bg-indigo-500 z-0 mx-auto h-[600px] w-[80%] lg:w-[90%]"></div>

          <div className="w-full bg-white p-8 ring-1 ring-gray-200 relative z-20 ml-10 lg:ml-0 shadow-lg ">
            <div className="relative mx-auto max-w-xl lg:mr-0 lg:max-w-7xl z-20 bg-white ">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ringsm:text-center-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  text="About us"
                  link="/about"
                  className="bg-indigo-500 mediumBold"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
