import React from "react";
import {AiFillGithub} from 'react-icons/ai'
const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-center sticky top-[100vh] ">

        <div className="px-6 pt-6">
          <form className="space-y-4">
        
              <div className="flex flex-col justify-center ">
                <div>
                <p className="text-gray-400">
                  <strong>Subscribe to our newsletter</strong>
                </p>
                <p className="text-gray-400">The latest news, articles and discounts sent to your inbox weekly.</p>
              </div>
              </div>
              <div className="md:mb-6 flex justify-center gap-2" >
                <input
                  type="text"
                  className="
              sm:w-1/2
              md:w-3/12
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 btn-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
          </form>
        </div>
        <div className="flex  justify-center text-center text-gray-400 p-4">
          &copy; {year} All Rights Reserved
          <a className="text-gray-200" href="https://github.com/Ann-14">
          <AiFillGithub className="mt-1 ml-1" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
