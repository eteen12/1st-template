import Button from "../reusables/button";

export default function Hero() {
  return (
    <div className="bg-gray-900 ">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-32 sm:py-48 lg:py-56">
            <div className="flex flex-col max-w-2xl">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Data to enrich your online business
              </h1>
              <p className="mt-8 text-pretty text-lg mediumBold md:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
              <div className="mt-10 sm:flex sm:gap-x-6 grid gap-5">
                <Button
                  text="About us"
                  link="/about"
                  className="bg-indigo-500 mediumBold "
                />
                <Button
                  text="Our services"
                  link="/about"
                  className="border mediumBold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
