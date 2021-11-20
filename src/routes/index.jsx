import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from '../Components/Header/header.jsx'
import GamesPage from '../pages/Games.jsx'
import HomePage from '../pages/Home.jsx'
import NewsPage from '../pages/News.jsx'
import GamesDetailPage from '../pages/GamesDetail.jsx'
import NotFoundPage from '../pages/NotFound.jsx'
import Footer from '../Components/Footer/footer.jsx'

function MainRoute() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<GamesDetailPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default MainRoute
