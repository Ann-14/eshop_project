import { AiOutlineLinkedin } from 'react-icons/ai';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlSocialYoutube } from 'react-icons/sl';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


export const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qq3kjwi', 'template_x9gpe0n', form.current, '5yCzjnPEk9awFCQm6')
          .then((result) => {
              toast.success('message sent succesfully')
          }, (error) => {
            toast.error(error.text)
          });
          e.target.reset()
      };

    return (
        <section className="lg:flex lg:justify-center overflow-hidden">
            <div className="flex w-full flex-col justify-center p-8 lg:w-1/2  lg:px-12  xl:px-32">
                <h1 className="text-3xl font-semibold capitalize  lg:text-5xl">Contact us.</h1>
                <p className="mt-4  ">Ask us anything! We would love to hear from you.</p>
                <div className="mt-6 md:mt-8">
                    <h3 className="font-medium text-primary">Follow us!</h3>

                    <div className=" flex justify-center items-center mt-6">
                        {/* ------------Hero section links------------*/}
                        <section>
                            <ul className="flex list-none  gap-4 text-primary ">
                                <li className=''><a href='https://www.instagram.com/thecolorsite/' >< SlSocialInstagram size={30} /></a></li>
                                <li className=''><a href='https://www.youtube.com/watch?v=stnfE1MmOQ8&list=PLpY8_gZL9Qda8gm9rKLh6Nw4J0MZsqEZD' >< SlSocialYoutube size={30} /></a></li>
                                <li className=''><a href='https://www.linkedin.com/in/anabel-morillo-recuero-143374267/'>< AiOutlineLinkedin size={30} /></a> </li>
                                <li className=''><a href='https://github.com/Ann-14' >< SlSocialGithub size={30} /></a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:px-12 xl:px-24 mt-0 lg:mt-8 mb-8 ">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="md:flex md:items-center gap-2 ">
                        <div className="mt-4 flex-1 md:mt-0">
                            <input type="text" name='user_name' placeholder="John Doe" className="mt-2 block w-full rounded-md border border-gray-200  px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-4 flex-1 md:mt-0">
                            <input type="email"  name="user_email" placeholder="johndoe@example.com" className="mt-2 block w-full rounded-md border border-gray-200  px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>
                    <div className="mt-4 w-full">
                        <input name="subject" className="mt-2 block h-24 w-full rounded-md border border-gray-200  px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-opacity-40 md:h-42" placeholder="Message"></input>
                    </div>
                    <button type='submit' className="mt-4 w-full transform rounded-md btn-primary px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300  focus:ring-opacity-50">get in touch</button>
                </form>
            </div>
        </section>
    )
}

