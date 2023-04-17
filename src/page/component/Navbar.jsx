import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <div className="w-full h-16 bg-blue-800">
        <div className="absolute">
          <Link to="/">
            <h1 className="p-2 text-5xl text-white">TTB</h1>
          </Link>
        </div>
      </div>
    </>
  )
}
