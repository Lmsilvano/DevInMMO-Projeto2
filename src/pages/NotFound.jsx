import React from 'react'
import Home from '../Components/Home/home'
import Main from '../Components/Main/main'
function NotFoundPage() {
  return <Main title="Oops...Not Found" container={<Home notFound={true} />} />
}

export default NotFoundPage
