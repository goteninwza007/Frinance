import React from 'react'
import Navbar from '@/page/component/Navbar'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'
export default function Info() {
  const data = [
    { name: 'Group A', value: 300 },
    { name: 'Group B', value: 700 },
  ]
  const data2 = [
    { name: 'Group A', value: 568 },
    { name: 'Group B', value: 227 },
    { name: 'Group C', value: 114 },
    { name: 'Group D', value: 91 },
  ]
  const COLORS2 = ['#c2410c', '#facc15', '#fb923c', '#f97316']
  const COLORS = ['#0088FE', '#ff0000']
  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full h-full bg-slate-100">
        <div className="relative flex justify-center w-full bg-[#0b87ba] h-1/4">
          <h1 className="absolute left-0 mt-12 ml-12 text-5xl text-white">
            HELLO, MR.TARA
          </h1>
          <div className="w-[90%] max-w-4xl md:w-3/4 h-1/2 rounded-full bg-white absolute -bottom-14 flex justify-between  overflow-hidden">
            <div className="flex flex-col items-center justify-center w-full bg-red-500 hover:bg-red-600">
              <h1 className="text-5xl text-white">ความพร้อมคุณต่ำมาก</h1>
              <h1 className="mt-4 text-2xl text-white">
                สามารถกู้ได้ 200000 บาท
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[90%] max-w-7xl md:w-3/4 h-fit mt-24  mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
          <div className="w-[80%] h-fit rounded-2xl bg-white mx-auto mt-6 shadow-lg p-6">
            <h1 className="mt-1 text-4xl font-bold">สถาณะโดยรวม</h1>
            <PieChart width={450} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="flex flex-row items-center">
              <div className="w-4 h-4 mr-2 bg-red-500" />
              <text className="text-md">หนี้</text>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-4 h-4 mr-2 bg-blue-500" />
              <text className="text-md">เงินเก็บ</text>
            </div>
          </div>

          <div className="w-[80%] h-fit rounded-2xl bg-white mx-auto mt-6 shadow-lg p-6">
            <h1 className="mt-1 text-4xl font-bold">สถาณะโดยรวม</h1>
            <PieChart width={450} height={400}>
              <Pie
                data={data2}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data2.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS2[index % COLORS2.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="flex flex-row items-center">
              <div className="w-4 h-4 mr-2 bg-orange-700" />
              <text className="text-md">
                หนี้การศึกษา 40000 บาท ดอกเบี้ย 2.68%
              </text>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-4 h-4 mr-2 bg-yellow-400" />
              <text className="text-md">
                หนี้บัตรเครดิต 20000 บาท ดอกเบี้ย 1.33%
              </text>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-4 h-4 mr-2 bg-orange-400" />
              <text className="text-md">
                สินเชื่อรถยนต์ 10000 บาท ดอกเบี้ย 5.68%
              </text>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-4 h-4 mr-2 bg-orange-500" />
              <text className="text-md">
                สินเชื่อส่วนบุคคล 10000 บาท ดอกเบี้ย 3.00%
              </text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
