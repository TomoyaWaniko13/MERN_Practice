import { IoIosNotifications } from 'react-icons/io';
import { IoChatbox } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

const TopBar = () => {
  return (
    <header className={'bg-gray-800 w-full h-28 flex justify-evenly items-center text-white'}>
      <section className={'text-center'}>
        <h1 className={'hidden sm:block font-extrabold text-5xl text-emerald-100 mx-10'}>MERN</h1>
      </section>
      <nav className={'flex justify-end items-center w-full'}>
        <div className='relative w-full flex justify-end'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none '>
            <FaSearch size={20} color={'black'} />
          </div>
          <input
            type='text'
            id='simple-search'
            className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5'
            placeholder={'search...'}
            required
          />
        </div>

        <ul className={'flex justify-around items-center m-10'}>
          <li className={'flex mx-1 cursor-pointer'}>
            <IoChatbox size={40} color={'black'} className={'border-2 border-black bg-white rounded-full p-2'} />
            <span>10</span>
          </li>
          <li className={'flex mx-1 cursor-pointer'}>
            <IoIosNotifications
              size={40}
              color={'black'}
              className={'border-2 border-black bg-white rounded-full p-2'}
            />
            <span>10</span>
          </li>
        </ul>
      </nav>
      <img src={''} alt='' />
    </header>
  );
};

export default TopBar;
