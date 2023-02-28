import { ElfsightWidget } from "react-elfsight-widget";
import { Contact } from "./Contact";
import { Link } from "react-router-dom";
import imgGrid4 from '../assets/brad-starkey-rrCsh37KY5I-unsplash.jpg'


export const HomePage = () => {
  return (
    <main>
      {/* -----HERO--------- */}
{/* SM SCREEN */}
      <div className="flex h-screen ">

        <div class="lg:hidden relative overflow-hidden flex justify-center rounded-md items-center w-full mt-10 mb-24 ">
          <img src={imgGrid4} alt='grid4' className="object-cover w-full h-full opacity-40" />
          <div class="absolute w-full text-lg flex flex-col justify-center gap-8">
            <h2 className="text-6xl font-semibold ">The <span className="text-primary">Color</span>site</h2>
            <h2 className="font-semibold text-4xl">We don't trust words.<br></br> We trust pictures.</h2>
            <p className="mt-2 mx-auto text-base font-semibold max-w-sm">Lorem fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. <br></br> Cumque debitis dignissimos id quam vel!</p>
            <div className="flex justify-center mt-6 gap-3">
              <Link to='/productsPage'>
                <button className="btn btn-primary">Get Started</button></Link>
              <Link to='/contact'>
                <button className="btn">Learn more</button></Link>
            </div>
          </div>
        </div>

{/* APPEARS ON LG SCREEN */}
        <div className="hidden lg:flex lg:items-center lg:justify-center text-center lg:text-left lg:w-1/2 md:bg-transparent ">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-semibold ">The <span className="text-primary">Color</span>site</h2>
            <h2 className="font-semibold text-3xl">We don't trust words.<br></br> We trust pictures.</h2>
            <p className="mt-2 text-sm md:text-base lg:max-w-md">Lorem fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
            <div className="flex justify-center lg:justify-start mt-6 gap-3">
              <Link to='/productsPage'>
                <button className="btn btn-primary">Get Started</button></Link>
              <Link to='/contact'>
                <button className="btn">Learn more</button></Link>
            </div>
          </div>
        </div>
        <div className=" hidden lg:flex lg:justify-center md:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
          <div className="h-full object-cover   " >
            <img src={imgGrid4} alt='grid4' className="mt-24 xl:mt-4" />
          </div>
        </div>
      </div>

     
      {/* -------- PRODUCTS--------  */}
      <div className=" mx-auto px-6 lg:pt-28 lg:pb-28 mb-6">
        <h1 className="text-3xl lg:text-4xl font-semibold  mb-4">Our Services</h1>
        <hr></hr>
        <div className="mt-8">
          <div className="mt-8 flex-1 lg:mx-12 lg:mt-0">
            <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              <Link to='/productsPage'>
                <div className="card bg-base-100 shadow-xl image-full ">
                  <figure>
                    <img src={imgGrid4} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Pet shots</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
              </Link>
              <Link to='/productsPage'>
                <div className="card bg-base-100 shadow-xl image-full ">
                  <figure>
                    <img src={imgGrid4} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Pet shots</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
              </Link>
              <Link to='/productsPage'>
                <div className="card bg-base-100 shadow-xl image-full ">
                  <figure>
                    <img src={imgGrid4} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Pet shots</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
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
