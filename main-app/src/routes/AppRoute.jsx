import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@/page/home/Home'
import Quest from '@/page/quest/Quest'
import BuyHome from '@/page/buyhome/BuyHome'
import Info from '@/page/info/Info'

export default function AppRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/quest" element={<Quest />} />
      <Route exact path="/buy" element={<BuyHome />} />
      <Route exact path="/info" element={<Info />} />
    </Routes>
  )
}
