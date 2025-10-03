"use client";
import Link from "next/link";

export default function Example({  buttonText,
    buttonLink,
    ButtonIcon}) {
 
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src="/images/img1.png"
          width={500}
          height={500}
          className="absolute inset-0 -z-10 size-full object-contain opacity-10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#99ff70] to-[rgb(87,75,255)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-30 lg:py-25">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
               Have questions or need help?{" "}
                <a href="#" className="font-semibold text-green-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Talk to us now<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                Ready to Fall in Love with Your Space Again?
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                Join our happy customers and see what pro cleaning can do. Fair prices, great results, and friendly service. Let’s talk about your space!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                    href={buttonLink}
                    className="inline-flex items-center gap-2 px-8 py-3 mt-8 font-semibold text-sky-600 bg-white rounded-full shadow-lg transition-transform hover:-translate-y-1"
                >
                    {ButtonIcon && <ButtonIcon />}
                    {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#63ff4f] to-[#5649ff] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
