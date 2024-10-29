import Button from "../reusables/button";
import { SlWrench, SlCalender } from "react-icons/sl";

export default function Projects() {
  return (
    <div className="h-full w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-36">
      <div className="max-w-2xl lg:mx-0 mb-10 mt-10 lg:flex-row lg:flex lg:max-w-7xl lg:justify-between">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Projects
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our projects speak for themselves.
          </p>
        </div>

        <div className="mt-10 button-container flex gap-5 mb-10">
          <Button
            text="Get a quote"
            link="/about"
            className="bg-indigo-500 text-white mediumBold"
          />
          <Button
            text="Contact"
            link="/about"
            className="border border-black text-black mediumBold hover:bg-indigo-500 hover:text-white hover:border-indigo-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="bg-black h-[780px] sm:h-[600px] md:h-[700px] lg:h-[600px]  grid grid-cols-1  grid-rows-[55%_45%] phone-breakpoint sm:grid-rows-[53%_47%] shadow-xl shrinkAnimation transition3">
          {/*Image goes here*/}
          <div className="bg-black "></div>
          <div className="bg-white text-black ">
            <div className="p-10">
              <h3 className="text-2xl bold">This is something, Kelowna, BC</h3>
              <p className="text-lg leading-8 text-gray-600 mt-2 overflow-scroll overflow-x-hidden sm:overflow-clip max-h-[120px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                magni dicta cupiditate velit quos, hic molestias eum repellat
              </p>

              <div className="w-full border-t border-gray-300 mt-7" />

              <div className="flex justify-between mt-5">
                <div className="flex gap-2">
                  <SlWrench className="text-indigo-500 text-3xl" />{" "}
                  <p className="mediumBold">This</p>
                </div>
                <div className="flex gap-2">
                  <SlCalender className="text-indigo-500 text-3xl" />{" "}
                  <p className="mediumBold">Oct 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*SECOND CARD*/}
        <div className="bg-black h-[780px] sm:h-[600px] md:h-[700px] lg:h-[600px]  grid grid-cols-1  grid-rows-[55%_45%] phone-breakpoint sm:grid-rows-[53%_47%] shadow-xl shrinkAnimation transition3">
          {/*Image goes here*/}
          <div className="bg-black "></div>
          <div className="bg-white text-black ">
            <div className="p-10">
              <h3 className="text-2xl bold">This is something, Kelowna, BC</h3>
              <p className="text-lg leading-8 text-gray-600 mt-2 overflow-scroll overflow-x-hidden sm:overflow-clip max-h-[120px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                magni dicta cupiditate velit quos, hic molestias eum repellat
              </p>

              <div className="w-full border-t border-gray-300 mt-7" />

              <div className="flex justify-between mt-5">
                <div className="flex gap-2">
                  <SlWrench className="text-indigo-500 text-3xl" />{" "}
                  <p className="mediumBold">This</p>
                </div>
                <div className="flex gap-2">
                  <SlCalender className="text-indigo-500 text-3xl" />{" "}
                  <p className="mediumBold">Oct 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
