import { ElfsightWidget } from "react-elfsight-widget";
import { Contact } from "./Contact";
import { Link } from "react-router-dom";
import heroImg from '../assets/heroImg.jpg'
import dogImg from '../assets/dogduck.jpg'
import newbornImg from '../assets/newbornImg.jpg'
import corporateImg from '../assets/corporateImg.jpg'
import Typed from 'react-typed';



export const HomePage = () => {
  return (
    <main>
      {/* -----HERO--------- */}
      
{/* SM SCREEN */}
      <div className="flex h-screen ">
        <div className="lg:hidden relative overflow-hidden flex justify-center rounded-md items-center w-full mt-10 mb-24  ">
          <img src={heroImg} alt='grid4' className="object-cover w-full h-full opacity-40" />
          <div className="absolute w-full text-lg flex flex-col justify-center gap-8">
          <h2 className="text-5xl font-normal  "> BCN <span className="text-primary">Photo</span>studio</h2>
          <Typed className="font-bold text-3xl uppercase"
                    strings={['We trust words.', 'We trust pictures.']}
                    typeSpeed={50}
                    backSpeed={50}
                    backDelay={1}
                    loop 
                    smartBackspace
                />
            <p className="mt-2 mx-auto text-lg font-medium max-w-sm "> Need photos taken?
Purchase one of our packages and consider it done</p>
            <div className="flex justify-center mt-6 gap-3">
              <Link to='/productsPage'>
                <button className="btn btn-primary">Get Started</button></Link>
              <Link to='/contact'>
                <button className="btn">Learn more</button></Link>
            </div>
          </div>
        </div>

{/* APPEARS ON LG SCREEN */}
        <div className="hidden lg:flex lg:items-center lg:justify-center text-center lg:text-left lg:w-1/2 md:bg-transparent  ">
          <div className="flex flex-col gap-4">
     
            <h2 className="text-5xl font-normal uppercase "> BCN <span className="text-primary">Photo</span>studio</h2>
            <Typed className="font-bold text-2xl uppercase"
                    strings={['We trust words.', 'We trust pictures.']}
                    typeSpeed={60}
                    backSpeed={40}
                    backDelay={1}
                    loop 
                    smartBackspace
                />
            <p className="mt-2 text-xl lg:max-w-md font-medium ">Need photos taken?
Purchase one of our packages and consider it done.</p>
            <div className="flex justify-center lg:justify-start mt-6 gap-3">
              <Link to='/productsPage'>
                <button className="btn btn-primary">Get Started</button></Link>
              <Link to='/contact'>
                <button className="btn">Learn more</button></Link>
            </div>
          </div>
        </div>
        <div className="lg:mt-36 xl:mt-8 lg:py-18 xl:pb-14 hidden lg:flex lg:justify-center md:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
          <div className="h-full object-cover" >
            <img src={heroImg} alt='grid4' className="" />
          </div>
        </div>
      </div>
      {/* -------- PRODUCTS--------  */}
      <div className=" mx-auto px-6 lg:pt-28 lg:pb-28 mb-6 md:space-y-10 md:mt-24 mt-0 ">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-4 uppercase">OUR PACKAGES</h1>
        <hr className="h-5"></hr>
        <div className="mt-8">
          <div className="mt-8 flex-1 lg:mx-12 lg:mt-0  ">
            <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 text-slate-200">
              <Link to='/productsPage'>
                <div className="relative flex opacity-60 hover:opacity-80">
                  <figure>
                    <img src={dogImg} alt="Shoes" className="object-cover rounded-lg"/>
                  </figure>
                  <div className="absolute">
                    <h2 className="card-title p-6 text-2xl">Pet photoshoot</h2>
                  </div>
                </div>
              </Link>
              <Link to='/productsPage'>
                <div className="relative flex opacity-60 hover:opacity-80  ">
                  <figure>
                    <img src={corporateImg} alt="Shoes" className="object-cover rounded-lg"/>
                  </figure>
                  <div className="absolute">
                    <h2 className="card-title p-6 text-2xl">Corporate photoshoot</h2>
                  </div>
                </div>
              </Link>
              <Link to='/productsPage'>
                <div className="relative flex opacity-60 hover:opacity-80  ">
                  <figure>
                    <img src={newbornImg} alt="Shoes" className="object-cover rounded-lg"/>
                  </figure>
                  <div className="absolute">
                    <h2 className=" card-title p-6 text-2xl">Newborn sessions</h2>
                  </div>
                </div>
              </Link>
              
            </div>
            <div className="card-actions justify-end mt-10 mr-8 ">
            <Link to='/productsPage'>
              <button className="btn btn-primary ">See more<span className="mr-2"></span><lord-icon
                src="https://cdn.lordicon.com/zmkotitn.json"
                trigger="hover"
                colors="primary:#e4e4e4"
                state="hover-1"
                style={{
                  width: "30px",
                  height: "30px"
                }}>
              </lord-icon> </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* -------INSTAGRAM---------*/}
      <div className="mt-20">
        <ElfsightWidget widgetID="b3fa5855-a303-4d1d-8b80-ec7549dbd130" />
      </div>

      <Contact />


    </main>
  );
};
