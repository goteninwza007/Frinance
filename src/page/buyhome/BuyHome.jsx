import React, { useState } from 'react'
import Navbar from '@/page/component/Navbar'

export default function Quest() {
  const [modal, setModal] = useState(false)
  const HomeCardCanBuy = () => {
    return (
      <div
        className="w-[90%] h-48 rounded-2xl bg-white mx-auto mt-6 flex overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer"
        onClick={() => setModal(true)}
      >
        <div className="flex justify-center w-1/3">
          <img
            src="https://carlislehomes.com.au/assets/Uploads/72d34000b9/CH23_0034-DIGITAL-Homepage-Slider-Updates_1560-x-1012_1.jpg"
            className="w-full "
          />
        </div>
        <div className="relative w-2/3 ml-4">
          <h1 className="mt-8 text-xl font-bold">CHAIYAPRUEK Bangna km 15</h1>
          <h1 className="mx-2 mt-2 text-md">
            โครงการบ้านใหม่จาก LH บ้านเดี่ยวติดถนนบางนา-ตราด กม.15
            ถูกออกแบบภายใต้แนวคิดใหม่ในรูปแบบสถาปัตยกรรมที่ทันสมัย....
          </h1>
          <h1 className="mt-4 text-xl ">$ 2,3xx,xxx</h1>
          <h1 className="absolute text-sm text-green-500 right-4 bottom-4">
            สามารถซื้อได้
          </h1>
        </div>
      </div>
    )
  }
  const HomeCardCanNotBuy = () => {
    return (
      <div className="w-[90%] h-48 rounded-2xl bg-white mx-auto mt-6 flex overflow-hidden shadow-xl opacity-50">
        <div className="flex justify-center w-1/3">
          <img
            src="https://carlislehomes.com.au/assets/Uploads/72d34000b9/CH23_0034-DIGITAL-Homepage-Slider-Updates_1560-x-1012_1.jpg"
            className="w-full "
          />
        </div>
        <div className="relative w-2/3 ml-4">
          <h1 className="mt-8 text-xl font-bold">CHAIYAPRUEK Bangna km 15</h1>
          <h1 className="mx-2 mt-2 text-md">
            โครงการบ้านใหม่จาก LH บ้านเดี่ยวติดถนนบางนา-ตราด กม.15
            ถูกออกแบบภายใต้แนวคิดใหม่ในรูปแบบสถาปัตยกรรมที่ทันสมัย....
          </h1>
          <h1 className="mt-4 text-xl ">$ 9,9xx,xxx</h1>
          <h1 className="absolute text-sm text-red-500 right-4 bottom-4">
            ไม่สามารถซื้อได้
          </h1>
        </div>
      </div>
    )
  }
  return (
    <>
      <Navbar />
      <div className="relative flex justify-center w-full h-full bg-blue-500">
        <div className="absolute flex w-full h-24 max-w-4xl mt-12">
          <div className="flex items-center justify-center w-1/5">
            <h1 className="w-full text-5xl text-white">Location</h1>
          </div>
          <div className="flex items-center justify-center w-3/5">
            <input
              className="w-full p-4 m-6 rounded-full"
              placeholder="Search Location..."
            />
          </div>
          <div className="flex items-center justify-center w-1/5">
            <button className="w-full p-4 bg-red-600 rounded-full hover:bg-red-300">
              Save Changes
            </button>
          </div>
        </div>
        <div className="w-[90%] max-w-4xl md:w-3/4 h-fit rounded-2xl bg-white absolute mb-24 mt-36 md:mt-48 grid grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-2 p-4 pb-8">
          <HomeCardCanBuy />
          <HomeCardCanBuy />
          <HomeCardCanBuy />
          <HomeCardCanNotBuy />
          <HomeCardCanNotBuy />
        </div>
        {modal && (
          <div className="absolute flex items-center justify-center w-screen h-screen">
            <div
              className="absolute w-screen h-screen bg-black opacity-30"
              onClick={() => setModal(false)}
            ></div>
            <div className="absolute flex w-1/2 overflow-hidden bg-white h-2/5 rounded-2xl">
              <div className="flex justify-center w-1/2">
                <img
                  src="https://carlislehomes.com.au/assets/Uploads/72d34000b9/CH23_0034-DIGITAL-Homepage-Slider-Updates_1560-x-1012_1.jpg"
                  className="w-full object-fit"
                />
              </div>
              <div className="relative w-1/2 ml-4">
                <h1 className="mt-8 ml-4 text-3xl font-bold">
                  CHAIYAPRUEK Bangna km 15
                </h1>
                <h1 className="mx-8 mt-8 text-lg">
                  โครงการบ้านใหม่จาก LH บ้านเดี่ยวติดถนนบางนา-ตราด กม.15
                  ถูกออกแบบภายใต้แนวคิดใหม่ในรูปแบบสถาปัตยกรรมที่ทันสมัย
                  สอดคล้องกับไลฟ์สไตล์ โดยมีแบบบ้านให้เลือกถึง 3 แบบ
                  สามารถเลือกตามความชื่นชอบมีการออกแบบแปลนบ้านเพื่อคนรุ่นใหม่
                  สอดคล้องกับยุค New Normal ที่การใช้ชีวิตเปลี่ยนแปลงไป
                  มีพื้นที่เป็นสัดส่วน ฟังก์ชันที่ใช้งานได้จริง
                  พื้นที่พ่นแอลกอฮอลล์และล้างมือก่อนเข้าบ้าน
                  ทั้งยังมีสิ่งอำนวยความสะดวกรอบๆ โครงการทั้งทางด่วน
                  ห้างสรรพสินค้า และสนามบินอย่างครบครัน
                </h1>
                <h1 className="mt-8 ml-4 text-5xl ">$ 2,3xx,xxx</h1>
                <h1 className="absolute text-xl text-green-500 right-8 bottom-8">
                  สามารถซื้อได้
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
