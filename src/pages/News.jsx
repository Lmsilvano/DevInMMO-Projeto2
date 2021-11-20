import React from 'react'
import Main from '../Components/Main/main'
import NewsContainer from '../Components/NewsContent/newsContainer'
import { NewsProvider } from '../contexts/newsContext'

function NewsPage() {
  return (
    <Main
      title="News"
      container={
        <NewsProvider>
          <NewsContainer />
        </NewsProvider>
      }
    />
  )
}

export default NewsPage
