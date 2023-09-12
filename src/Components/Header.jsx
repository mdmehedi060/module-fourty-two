import profile from '../../src/assets/images/profile.png'
const Header = () => {
  return (
    <header className='flex justify-between items-center p-4  border-b-2  mx-w-6xl mx-auto'>
      <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;