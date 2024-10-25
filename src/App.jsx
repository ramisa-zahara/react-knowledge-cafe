import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const [markingRead, setMarkingRead] = useState(0);
  const handleMarkingRead = (id, time) => {
    // const newTime = markingRead + time;
    setMarkingRead(markingRead + time);
    // console.log("adding", time);
    const remaining = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaining);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkingRead={handleMarkingRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} markingRead={markingRead}></Bookmarks>
      </div>
    </>
  );
}

export default App;
