import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleWorkBookmark}) => {
  const { title,cover,author,author_img,posted_date,reading_time,hashtags } = blog;
  return (
    <div className='mb-20'>
      <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
      <div className='flex justify-between mb-4'>
        <div className='flex gap-4'> 
          <img className='w-14 mb-8' src={author_img} alt="" />
          <div >
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time } min read</span>
          <button className='ml-2' onClick={() => handleWorkBookmark(blog)}> <FaBookmark/> </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a> #{hash }</a></span>)
        }
      </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleWorkBookmark:PropTypes.func
}
export default Blog;