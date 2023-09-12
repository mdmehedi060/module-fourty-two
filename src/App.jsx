import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {
  const [bookmarks, setBookmarks]=useState([])

  const handleWorkBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
}


  return (
    <>
     
     <Header></Header>
      <div className='md: flex mx-w-7xl justify-center mx-auto'>
        <Blogs handleWorkBookmark={handleWorkBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
   
    </>
  )
}

export default App
