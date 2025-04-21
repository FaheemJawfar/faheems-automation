import React, { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"

import 'react-toastify/dist/ReactToastify.css'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('light')
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Analytics />
      <Footer />
    </>
  )
}

export default App
