import React from 'react'
import Navbar from '@/page/component/Navbar'

export default function Info() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full h-full bg-slate-100">
        <div className="relative flex justify-center w-full bg-blue-500 h-1/4">
          <h1 className="mt-12 text-5xl text-white">HELLO, MR.TARA</h1>
          <div className="w-[90%] max-w-4xl md:w-3/4 h-1/2 rounded-full bg-white absolute -bottom-14 flex justify-between  overflow-hidden">
            <div className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600">
              <h1 className="text-5xl text-white">ความพร้อมคุณต่ำมาก</h1>
            </div>
          </div>
        </div>
        <div className="w-[90%] max-w-7xl md:w-3/4 h-fit mt-24  mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
          <div className="w-[90%] h-64 rounded-2xl bg-white mx-auto mt-6 shadow-lg p-12">
            <h1 className="mt-4 text-md opacity-70">เช็คยอดเงิน</h1>
            <h1 className="mt-2 text-2xl font-bold">บัญชี ออลล์ฟรี</h1>
            <h1 className="mt-2 text-md opacity-70">xxx-x-xx1430</h1>
            <button className="px-4 py-2 mt-4 text-yellow-400 border-4 border-yellow-400 border-solid rounded-full hover:bg-yellow-300">
              ดูยอดเงิน
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
