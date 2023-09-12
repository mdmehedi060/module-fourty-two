import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {
  const [bookmarks, setBookmarks]=useState([])
  const [readingTime, setReadingTime] = useState(0);


  const handleWorkBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
}

  const handlemarkIsRead = time => {
    const newtReadingTime = readingTime + time;
    setReadingTime(newtReadingTime);
  }

  return (
    <>
     
     <Header></Header>
      <div className='md: flex mx-w-7xl justify-center mx-auto'>
        <Blogs handleWorkBookmark={handleWorkBookmark} handlemarkIsRead={handlemarkIsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
   
    </>
  )
}

export default App
