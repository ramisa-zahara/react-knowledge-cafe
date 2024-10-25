import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, markingRead }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
      <div className="text-center mb-4">
        <h3 className="text-4xl">Reading Time :{markingRead}</h3>
      </div>
      <h2 className="text-2xl text-center">
        Bookmarked Blogs :{bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  markingRead: PropTypes.number,
};
export default Bookmarks;
