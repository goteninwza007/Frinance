import React from 'react'
import Navbar from '@/page/component/Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full h-full bg-slate-100">
        <div className="relative flex justify-center w-full bg-[#0b87ba] h-1/4">
          <h1 className="absolute left-0 mt-12 ml-12 text-5xl text-white">
            HELLO, MR.TARA
          </h1>
          <div className="w-[90%] max-w-4xl md:w-3/4 h-1/2 rounded-2xl bg-white absolute -bottom-14 flex justify-between  overflow-hidden">
            <div className="w-1/3 hover:bg-slate-300">
              <Link to="/quest">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={'#ffbd59'}
                  class="w-full h-full p-6 cursor-pointer"
                >
                  <path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
                </svg>
              </Link>
            </div>

            <div className="w-1/3 hover:bg-slate-300 border-x-2">
              <Link to="/buy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={'#ffbd59'}
                  className="w-full h-full p-6 cursor-pointer"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </Link>
            </div>

            <div className="w-1/3 hover:bg-slate-300">
              <Link to="/info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={'#ffbd59'}
                  className="w-full h-full p-6 cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[90%] max-w-7xl md:w-3/4 h-fit mt-24  mx-auto flex flex-wrap">
          <div className="w-[90%] max-w-xl md:w-3/4 h-64 rounded-2xl bg-white mx-auto mt-6 shadow-lg p-12">
            <h1 className="mt-4 text-md opacity-70">เช็คยอดเงิน</h1>
            <h1 className="mt-2 text-2xl font-bold">บัญชี ออลล์ฟรี</h1>
            <h1 className="mt-2 text-md opacity-70">xxx-x-xx1430</h1>
            <button className="px-4 py-2 mt-4 text-[#ffbd59] border-4 border-[#ffbd59] border-solid rounded-full hover:bg-[#ffbd59] hover:text-white">
              ดูยอดเงิน
            </button>
          </div>
          <div className="w-[90%] max-w-xl md:w-3/4 h-64 rounded-2xl bg-white mx-auto mt-6 shadow-lg p-12">
            <h1 className="mt-4 text-md opacity-70">เติมเงิน</h1>
            <h1 className="mt-2 text-2xl font-bold">True Money Wallet</h1>
            <h1 className="mt-2 text-md opacity-70">xxxxxx3407</h1>
            <button className="px-4 py-2 mt-4 text-[#ffbd59] border-4 border-[#ffbd59] border-solid rounded-full hover:bg-[#ffbd59] hover:text-white">
              เติมเงิน
            </button>
          </div>
          <div className="w-[90%] max-w-xl md:w-3/4 h-64 rounded-2xl bg-white mx-auto mt-6 shadow-lg p-12">
            <h1 className="mt-4 text-md opacity-70">กองทุน</h1>
            <h1 className="mt-2 text-2xl font-bold">NEXT Investment</h1>
            <h1 className="mt-2 text-md opacity-70">จาก KTAM</h1>
            <button className="px-4 py-2 mt-4 text-[#ffbd59] border-4 border-[#ffbd59] border-solid rounded-full hover:bg-[#ffbd59] hover:text-white">
              ลงทุน
            </button>
          </div>
          <div className="w-[90%] max-w-xl md:w-3/4 h-64 rounded-2xl bg-white mx-auto mt-6 shadow-lg p-12">
            <h1 className="mt-4 text-md opacity-70">สมัครบัตรเครดิต</h1>
            <h1 className="mt-2 text-2xl font-bold">KTC PROUD</h1>
            <h1 className="mt-2 text-md opacity-70">จาก KTC</h1>
            <button className="px-4 py-2 mt-4 text-[#ffbd59] border-4 border-[#ffbd59] border-solid rounded-full hover:bg-[#ffbd59] hover:text-white">
              สมัคร
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
