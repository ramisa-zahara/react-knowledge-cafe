import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks, handleMarkingRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    publishing_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h2 className="text-2xl">{author}</h2>
            <span>{publishing_date}</span>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="ml-2 text-2xl"
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      {hashtags.map((hash, idx) => (
        <span key={idx}>
          <a href="">{hash} </a>
        </span>
      ))}

      <div>
        <button
          onClick={() => handleMarkingRead(id, reading_time)}
          className="text-purple-800 underline font-bold"
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handleMarkingRead: PropTypes.func,
};

export default Blog;
