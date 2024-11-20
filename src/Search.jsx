import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Services from './components/Services'
import CTA from './components/CTA'
import Footer from './components/Footer'
import About from './components/About'

function Search() {

  return (
    <div className='bg-[#000] min-h-screen'>
      <Header />
      <div className=" py-[3rem] mb-1 bg-emerald-100">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Search for Businesses
          </h1>
          <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
            Help others make the right choice.
          </p>
          <div className="relative w-full max-w-2xl">
            <input
              className="h-14 w-full rounded-full bg-white pl-12 pr-4 text-lg shadow-lg"
              placeholder="Find a company to review"
            />
            <svg
              className="absolute left-4 top-4 h-6 w-6 text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>


      </div>
      <About />
      <Footer />
    </div>
  )
}

export default Search
