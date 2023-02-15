import React from 'react'

export const Contact = () => {
  return (
    <section class="min-h-screen bg-white dark:bg-gray-900 lg:flex">
    <div class="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:bg-gray-100 lg:px-12 lg:dark:bg-gray-800 xl:px-32">
        <h1 class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-5xl">hire us.</h1>

        <p class="mt-4 text-gray-500 dark:text-gray-400">Ask us everything and we would love to hear from you</p>

        <div class="mt-6 md:mt-8">
        <h3 class="font-medium text-gray-600 dark:text-gray-300">Follow us</h3>

        <div class="-mx-1.5 mt-4 flex">
            {/* TODO ICONS */}
        </div>
        </div>
    </div>

    <div class="flex w-full flex-col justify-center p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24">
        <form>
        <div class="-mx-2 md:flex md:items-center">
            <div class="flex-1 px-2">
            <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Full Name</label>
            <input type="text" placeholder="John Doe" class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400" />
            </div>

            <div class="mt-4 flex-1 px-2 md:mt-0">
            <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Email address</label>
            <input type="email" placeholder="johndoe@example.com" class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400" />
            </div>
        </div>

        <div class="mt-4 w-full">
            <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Message</label>
            <textarea class="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400 md:h-56" placeholder="Message"></textarea>
        </div>

        <button class="mt-4 w-full transform rounded-md bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">get in touch</button>
        </form>
    </div>
    </section>
  )
}

