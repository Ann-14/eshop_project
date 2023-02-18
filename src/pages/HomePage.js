import { ElfsightWidget } from "react-elfsight-widget";
import Spline from "@splinetool/react-spline";

import imgGrid1 from "./../assets/fabian-gieske-v_bBdJVOWvw-unsplash.jpg";
import imgGrid2 from "./../assets/nathan-dumlao-5BB_atDT4oA-unsplash.jpg";
import imgGrid3 from "./../assets/product-school-nOvIa_x_tfo-unsplash.jpg";
// import imgGrid4 from "./../assets/nathan-dumlao-EytWx3BOrwI-unsplash.jpg";
import { Contact } from "./Contact";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <main>
      {/* -----HERO--------- */}
      
     <div className="flex h-screen md:p-20 ">
        <div className="flex items-center text-center lg:text-left lg:w-1/2 ">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold md:text-5xl title-font">The <span className="text-secondary">Color</span>site</h2>
            <h2 className="text-3xl font-semibold md:text-3xl">We don't trust words.<br></br> We trust pictures.</h2>
            <p className="mt-2 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
            <div className="flex justify-center lg:justify-start mt-6 gap-1">
            <Link to='/productsPage'>
              <button className="btn btn-secondary">Get Started</button></Link>
            <Link to='/contact'>
              <button className="btn">Learn more</button></Link>
              
            </div>
          </div>
        </div>
        <div className=" hidden lg:block md:w-1/2" style={{clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)'}}>
          <div className="h-full object-cover " >
          <Spline scene="https://prod.spline.design/sNuLt3pE0Cm3QWA5/scene.splinecode" />
            <div className="h-full bg-black opacity-25" />
          </div>
        </div>
      </div>

      {/* MOBILE 3d */}
      <div className="flex h-screen md:hidden ">
      <div className="md:hidden mx-4 h-3/4" >
        
          <div className="h-3/4 object-cover " >
          <Spline scene="https://prod.spline.design/0VehDCnTN08Pe-af/scene.splinecode" />
            
          </div>
        </div>
        </div>
     
      {/* -------- PRODUCTS--------  */}
      <div className="container mx-auto px-6 md:pt-28 md:pb-28 mb-14">
        <h1 className="text-2xl font-semibold  lg:text-4xl">Services</h1>
        <div className="mt-8 lg:-mx-12 lg:flex xl:mt-16">
          <div className="mt-8 flex-1 lg:mx-12 lg:mt-0">
            <div  className="   grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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

              <div   className=" card  bg-base-200 shadow-xl image-full">
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

              <div className="card  bg-base-100 shadow-xxl image-full">
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
