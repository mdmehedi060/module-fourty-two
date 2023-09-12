import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
  const { title } = bookmark;
  return (
    <div className='bg-white  m-4 rounded-xl p-2'>
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  
}

export default Bookmark;