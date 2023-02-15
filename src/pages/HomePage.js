import { ElfsightWidget } from "react-elfsight-widget";
import Spline from "@splinetool/react-spline";

import imgGrid1 from "./../assets/fabian-gieske-v_bBdJVOWvw-unsplash.jpg";
import imgGrid2 from "./../assets/nathan-dumlao-5BB_atDT4oA-unsplash.jpg";
import imgGrid3 from "./../assets/product-school-nOvIa_x_tfo-unsplash.jpg";
import imgGrid4 from "./../assets/nathan-dumlao-EytWx3BOrwI-unsplash.jpg";
import { Contact } from "./Contact";

export const HomePage = () => {
  return (
    <main>
      {/* -----HERO--------- */}
      <div
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
      </div>

      {/* -------- PRODUCTS--------  */}
     

      <div class="container mx-auto px-6 pt-28 pb-28">
        <h1 class="text-2xl font-semibold  lg:text-4xl">Services</h1>
        <div class="mt-8 lg:-mx-12 lg:flex xl:mt-16">
          <div class="mt-8 flex-1 lg:mx-12 lg:mt-0">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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
