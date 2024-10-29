import Button from "../reusables/button";

export default function Cta1() {
  return (
    <div className="bg-indigo-500 mt-36">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 button-container">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Ready to dive in? <br />
          Start your free trial today.
        </h2>
        <div className="mt-10 button-container flex gap-5">
          <Button
            text="Get a quote"
            link="/about"
            className="bg-white text-indigo-500 mediumBold"
          />
          <Button
            text="Contact"
            link="/about"
            className="border mediumBold hover:bg-white hover:text-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}
