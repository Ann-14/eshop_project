import { ElfsightWidget } from "react-elfsight-widget";
import Spline from "@splinetool/react-spline";

import imgGrid1 from "./../assets/fabian-gieske-v_bBdJVOWvw-unsplash.jpg";
import imgGrid2 from "./../assets/nathan-dumlao-5BB_atDT4oA-unsplash.jpg";
import imgGrid3 from "./../assets/product-school-nOvIa_x_tfo-unsplash.jpg";
// import imgGrid4 from "./../assets/nathan-dumlao-EytWx3BOrwI-unsplash.jpg";
import { Contact } from "./Contact";

export const HomePage = () => {
  return (
    <main>
      {/* -----HERO--------- */}
      {/* <div
        className="hero min-h-screen w-full"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <Spline scene="https://prod.spline.design/DLUorox5h2t0fJf7/scene.splinecode" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
     
     <div className="flex bg-white" style={{height: '600px'}}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Build Your New <span className="text-indigo-600">Idea</span></h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="/#">Get Started</a>
              <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="/#">Learn More</a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)'}}>
          <div className="h-full object-cover" >
          <Spline scene="https://prod.spline.design/pSZ2QpPlqFw8t1uR/scene.splinecode" />
            <div className="h-full bg-black opacity-25" />
          </div>
        </div>
      </div>
      {/* -------- PRODUCTS--------  */}
      <div className="container mx-auto px-6 pt-28 pb-28">
        <h1 className="text-2xl font-semibold  lg:text-4xl">Services</h1>
        <div className="mt-8 lg:-mx-12 lg:flex xl:mt-16">
          <div className="mt-8 flex-1 lg:mx-12 lg:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              <div className="card  bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={imgGrid1} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Pet shots</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={imgGrid2} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Wedding photoshoots</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={imgGrid3} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Events shots</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------INSTAGRAM---------*/}
      <ElfsightWidget widgetID="b3fa5855-a303-4d1d-8b80-ec7549dbd130" />

      
      <Contact/>

   
    </main>
  );
};
