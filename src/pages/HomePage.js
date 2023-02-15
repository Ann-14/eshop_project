import { ElfsightWidget } from "react-elfsight-widget";
import Spline from '@splinetool/react-spline';

export const HomePage = () => {
  return (
    <main>
      {/* -----HERO--------- */}
      



    



      <div
        className="hero min-h-screen"
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

      {/* -------INSTAGRAM---------*/}
      <ElfsightWidget widgetID="b3fa5855-a303-4d1d-8b80-ec7549dbd130" />
    </main>
  );
};
