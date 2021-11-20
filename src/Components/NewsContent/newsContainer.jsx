import React, { useEffect, useState, useMemo } from 'react'
import { StyledDivContainer, StyledDivInputNews } from './styles'
import { NewsShowList } from '../../contexts/newsContext'
import NewsCards from './newsCards'
function NewsContainer() {
  const { NewsListReq, responseApiNews } = NewsShowList()
  const [newsData, setDataNews] = useState([])
  const [filterNews, setFilterNews] = useState('')
  // prettier-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => NewsListReq(), [])
  // prettier-ignore
  useEffect(() => {
       (function () {
       setDataNews(responseApiNews)
       
     })()
   }, [responseApiNews])
  //
  const filteredNews = useMemo(() => {
    if (filterNews) {
      const lowerSearch = filterNews.toLowerCase()
      return newsData.filter((news) =>
        news.title.toLowerCase().includes(lowerSearch),
      )
    } else return newsData
  }, [filterNews, newsData])

  // I
  if (newsData) {
    return (
      <>
        <StyledDivInputNews>
          <input
            type="text"
            placeholder="Search for news"
            value={filterNews}
            onChange={(e) => setFilterNews(e.target.value)}
          />
          <h3>{`Results (${filteredNews.length})`}</h3>
        </StyledDivInputNews>
        <StyledDivContainer>
          {filteredNews.map((res) => {
            return (
              <NewsCards
                title={res.title}
                desc={res.short_description}
                img={res.thumbnail}
                key={res.id}
                link={res.article_url}
              />
            )
          })}
        </StyledDivContainer>
      </>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default NewsContainer
