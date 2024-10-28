import Image from "next/image";

export default function Author() {
  return (
    <div className="mt-6 flex items-center ">
      <div className="flex-shrink-0 h-10 w-10 lg:h-12 lg:w-12 rounded-full transition-transform duration-300 transform hover:scale-105">
        <div className="w-full h-full bg-black"></div>
        {/* <Image
          alt="Ethan Breitkreutz author and owner of Teleta Development"
          src="/misc/ethan.webp"
          className="inline-block h-10 w-10 lg:h-12 lg:w-12 rounded-full"
          width={400}
          height={400}
        /> */}
      </div>
      <div className="ml-3 lg:ml-4">
        <p className="text-base bold lg:text-lg blackText">John Doe</p>
        <div className="flex space-x-1 text-base  lg:text-base">
          <time>sept 12,2023</time>
        </div>
      </div>
    </div>
  );
}
