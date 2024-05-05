import { BsChatLeftText } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className={'flex items-center w-full justify-between bg-black text-white h-24'}>
        <nav className='hidden md:block text-center w-1/6'>
          <Link to={'/'}>
            <h1 className=' mx-4 text-4xl font-extrabold'>MERN</h1>
          </Link>
        </nav>

        <section className='relative mr-10 w-4/6 mx-4'>
          <FaMagnifyingGlass className='absolute top-1/2 left-3 transform -translate-y-1/2' color='black' />
          <input type='text' className='rounded-lg pl-10 text-black w-full ' onChange={handleInputChange} />
        </section>

        <ul className={'flex justify-center items-center w-2/6 '}>
          <li className='flex items-center mx-1 sm:mx-2'>
            <BsChatLeftText size={20} className='mx-1' />
            <span>10</span>
          </li>
          <li className='flex items-center mx-1 sm:mx-2'>
            <IoIosNotificationsOutline size={25} />
            <span>10</span>
          </li>
          <li className={'mx-1 sm:mx-2'}>
            <img src='src/assets/person/1.jpeg' alt='User Avatar' className={'h-8 w-8'} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopBar;
