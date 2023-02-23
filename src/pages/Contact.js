import React from 'react'

export const Contact = () => {
  return (
    <section className="lg:flex">
    <div className="flex w-full flex-col justify-center p-8 lg:w-1/2  lg:px-12  xl:px-32">
        <h1 className="text-3xl font-semibold capitalize  lg:text-5xl">hire us.</h1>

        <p className="mt-4  ">Ask us everything and we would love to hear from you</p>

        <div className="mt-6 md:mt-8">
        <h3 className="font-medium text-primary">Follow us!</h3>

        <div className="-mx-1.5 mt-4 flex">
            {/* TODO ICONS */}
        </div>
        </div>
    </div>

    <div className="flex w-full flex-col justify-center p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24">
        <form>
        <div className="-mx-2 md:flex md:items-center">
            <div className="flex-1 px-2">
            <label className="mb-2 block text-sm ">Full Name</label>
            <input type="text" placeholder="John Doe" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 " />
            </div>

            <div className="mt-4 flex-1 px-2 md:mt-0">
            <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Email address</label>
            <input type="email" placeholder="johndoe@example.com" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400  focus:outline-none focus:ring focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 " />
            </div>
        </div>

        <div className="mt-4 w-full">
            <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Message</label>
            <textarea className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-primary md:h-56" placeholder="Message"></textarea>
        </div>

        <button className="mt-4 w-full transform rounded-md btn-primary px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300  focus:ring-opacity-50">get in touch</button>
        </form>
    </div>
    </section>
  )
}

