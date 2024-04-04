import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

export default function App() {
    const router = useRoutes(routes)


  return (
    <div className='app'>
        <Header />
        {router}
        <Footer />
    </div>
  )
}
