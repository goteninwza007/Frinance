import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <div className="w-full h-16 bg-[#054b67]">
        <div className="absolute ">
          <Link to="/">
            <h1 className="p-4 text-3xl text-white">
              <span className="text-[#fecf47]">FRI</span>NANCE
            </h1>
          </Link>
        </div>
        <div className="absolute right-0 w-12 h-12 mt-2 mr-6">
          <img
            className="w-full h-full rounded-full cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
        </div>
        <div className="absolute right-0 w-12 h-12 mt-2 mr-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-full h-full cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="absolute w-4 h-4 bg-red-500 rounded-full right-1 top-1"></div>
        </div>
      </div>
    </>
  )
}
