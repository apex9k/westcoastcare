import React from "react";
import Layout from "./components/Layout";
import heroLogo from "./assets/banner.png";
import {Link, NavLink} from "react-router-dom";
import slider1 from "./assets/logo(2).png";
import slider2 from "./assets/logo(3).png";
import slider3 from "./assets/logo(4).png";
import slider4 from "./assets/logo(5).png";
import Contact from "./Contact.jsx";
import flowbite from "flowbite/dist/flowbite";
import {Card} from "flowbite-react";
export default function Home() {
  return (

    <Layout>
      <div className="hero bg-gray-700">
        <div className="hero-content grid md:grid-cols-2 gap-8 ">
          <div className="order-2">
            <img src={heroLogo} className="hero" alt="logo" />
          </div>
          <div>
            <h1 className="text-5xl font-bold leading-normal text-white">
              Warm Caring and Compassionate
            </h1>
            <p className="py-6 text-gray-300">
            We are doing home care different. Putting you directly in touch with a certified health care assistant. You pay your health care assistant directly through our easy to use payment portal. No longer are you paying for large corporate overhead. You are paying for the care you need.
            </p>
            <NavLink to="about" className="btn btn-primary mt-4">Learn more</NavLink>
          </div>
        </div>
      </div>


      <div className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-600">Care with Compassion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to do home care</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">What if you had a real relationship with your care giver. What if the money you paid your caregiver actually all went to your caregiver?</p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>

                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">Lets start the conversation</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">We believe at west coast care that you need to create a relationship with your caregiver. Reach out to us so we can pair you up with one of our certified caregivers.</p>
                </div>
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">You get what you pay for</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">At West Coast Care we believe in the adage you get what you pay for. When the home care company charges out their employees at 40$ but pays them 20$ what are the results you think you will receive?   </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>

                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">Mobile friendly booking site</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">Our website and booking portal are made for our time. When you visit our site from your phone or from home. Expect a seamless responsive booking experience. </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>

                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">Client first always</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">No matter the problem we care, we will help pair you with one of our certified Care+ caregivers. But if you dont click just reach out and we will find someone else to help with your care needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="hero min-h-screen bg-green-300">
        <div className="hero-content flex-col lg:flex-row text-stone-900">
          <div className="order">
            <img src={slider2} className="" alt="Logo" />
          </div>
          <div>
            <h1 className="text-7xl font-bold">Health Care With Love.</h1>
            <p className="py-6">Create a long lasting relationship with your care provider. Contact them directly and know when you pay them the money stays with them. We take the time to properly check all our Care+ certified caregivers. All our Care+ caregivers carry personal insurance and have had criminal record checks. </p>
            <NavLink to="Contact" className="btn btn-primary">Lets Talk</NavLink>
          </div>
        </div>
      </div>

    </Layout>
  );
}
