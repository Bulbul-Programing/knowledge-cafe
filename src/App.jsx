import { useState } from 'react'
import './App.css'
import Bloges from './components/Bloges/Bloges'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([])
  const [time, setTime] = useState(0)

  const handleClicked = (blog) => {
    const bookmarks = [...bookmark, blog];
    setBookmark(bookmarks);
  }

  const markHandleClick = (blog) =>{
    const remainingBookmarks = bookmark.filter(book => book.id !== blog.id)
    setBookmark(remainingBookmarks)
    setTime(time + blog.reading_time)
  }

  return (
    <div className='mx-[200px] my-10'>
      <Header></Header>
      <div className='flex'>
        <Bloges handleClicked={handleClicked} markHandleClick={markHandleClick}></Bloges>
        <Bookmarks bookmarks = {bookmark} time={time}></Bookmarks>
      </div>
    </div>
  )
}

export default App
