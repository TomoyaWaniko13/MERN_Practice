import { BsChatLeftText } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useState } from 'react';

const TopBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <header className='bg-black w-full h-24 text-white flex justify-between items-center'>
      <nav className='text-center'>
        <h1 className='ml-4 text-4xl font-extrabold'>MERN</h1>
      </nav>
      <section className='relative w-4/6'>
        <FaMagnifyingGlass className='absolute top-1/2 left-3 transform -translate-y-1/2' color='black' />
        <input type='text' className='rounded-lg pl-10 text-black w-full' onChange={handleInputChange} />
      </section>
      <aside className='flex justify-center w-1/6'>
        <div className='flex items-center mx-1'>
          <BsChatLeftText size={20} className='mx-1' />
          <span>10</span>
        </div>
        <div className='flex items-center'>
          <IoIosNotificationsOutline size={25} />
          <span>10</span>
        </div>
        <figure>
          <img src='../assets/person/1.jpeg' alt='User Avatar' />
        </figure>
      </aside>
    </header>
  );
};

export default TopBar;
