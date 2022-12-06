import React from "react";
import Layout from "./components/Layout";
import heroLogo from "./assets/banner.png";
import {Link} from "react-router-dom";
import slider1 from "./assets/logo(2).png";
import slider2 from "./assets/logo(3).png";
import slider3 from "./assets/logo(4).png";
import slider4 from "./assets/logo(5).png";
import Contact from "./Contact.jsx";

export default function Home() {
  return (
    <Layout>
      <div className="hero bg-gray-700">
        <div className="hero-content grid md:grid-cols-2 gap-8 ">
          <div className="order-2">
            <img src={heroLogo} className="" alt="Hero" />
          </div>
          <div>
            <h1 className="text-5xl font-bold leading-normal text-white">
              West Coast Care
            </h1>
            <p className="py-6 text-gray-300">
            We are doing home care different. Putting you directly in touch with a certified health care assistant. You pay your health care assistant directly through our easy to use payment portal. No longer are you paying for large corporate overhead. You are paying for the care you need.
            </p>
            <Link to={Contact} className="btn btn-primary mt-4">Learn more</Link>
          </div>
        </div>
      </div>




      <div className="hero min-h-screen bg-green-300">
        <div className="hero-content flex-col lg:flex-row text-stone-900">
          <div className="order">
            <img src={heroLogo} className="" alt="Hero" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Health Care With companionship and friendship.</h1>
            <p className="py-6">Create a long lasting relationship with your care provider. Contact them directly and know when you pay them the money stays with them.  </p>
            <button >Get Started</button>
            <Link to="/Contact" className="btn btn-primary">Lets Talk</Link>
          </div>
        </div>
      </div>

    </Layout>
  );
}
