import { SlSocialSpotify } from 'react-icons/sl';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlSocialYoutube } from 'react-icons/sl';

export const Contact = () => {
    return (
        <section className="lg:flex">
            <div className="flex w-full flex-col justify-center p-8 lg:w-1/2  lg:px-12  xl:px-32">
                <h1 className="text-3xl font-semibold capitalize  lg:text-5xl">Contact us.</h1>
                <p className="mt-4  ">Ask us anything! We would love to hear from you.</p>
                <div className="mt-6 md:mt-8">
                    <h3 className="font-medium text-primary">Follow us!</h3>

                    <div className=" flex justify-center items-center mt-6">
                        {/* ------------Hero section links------------*/}
                        <section>
                            <ul className="flex list-none  gap-4 text-primary ">
                                <li className=''><a href='https://www.instagram.com/starwars/' >< SlSocialInstagram size={30} /></a></li>
                                <li className=''><a href='https://www.youtube.com/watch?v=4bpk2k1ug3M' >< SlSocialYoutube size={30} /></a></li>
                                <li className=''><a href='https://open.spotify.com/playlist/37i9dQZF1DXaUaRhCgtpCo'>< SlSocialSpotify size={30} /></a> </li>
                                <li className=''><a href='https://github.com/Ann-14' >< SlSocialGithub size={30} /></a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:px-12 xl:px-24 mt-0 lg:mt-8 mb-8 ">
                <form>
                    <div className="md:flex md:items-center ">
                        <div className="mt-4 flex-1 px-2 md:mt-0">
                            <input type="text" placeholder="John Doe" className="mt-2 block w-full rounded-md border border-gray-200  px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-4 flex-1 px-2 md:mt-0">
                            <input type="email" placeholder="johndoe@example.com" className="mt-2 block w-full rounded-md border border-gray-200  px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>
                    <div className="mt-4 w-full">
                        <textarea className="mt-2 block h-24 w-full rounded-md border border-gray-200  px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-opacity-40 md:h-42" placeholder="Message"></textarea>
                    </div>
                    <button className="mt-4 w-full transform rounded-md btn-primary px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300  focus:ring-opacity-50">get in touch</button>
                </form>
            </div>
        </section>
    )
}

