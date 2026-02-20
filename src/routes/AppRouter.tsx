import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from '../components/screens/Home/Home';

export const AppRouter = () => {
    const location = useLocation();

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}
