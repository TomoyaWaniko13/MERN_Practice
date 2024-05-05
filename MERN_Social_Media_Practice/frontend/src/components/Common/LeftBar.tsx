import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaMagnifyingGlass, FaRegMessage } from 'react-icons/fa6';
import { CiBookmark, CiHome } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import CloseFriend from './CloseFriend.tsx';
import { Users } from '../../../dummyData.ts';
import { Link } from 'react-router-dom';

const LeftBar = () => {
  return (
    <div className={'p-2 text-xl'}>
      <ul className={'shadow p-2'}>
        <li className={'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer'}>
          <CiHome className={'mx-2'} />
          <span>Home</span>
          <Link to={'/'} />
        </li>
        <li
          className={'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer mt-3'}
        >
          <FaMagnifyingGlass className={'mx-2'} />
          <span>Search</span>
        </li>
        <li
          className={'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer mt-3'}
        >
          <IoIosNotificationsOutline className={'mx-2'} size={25} />
          <span>Notification</span>
        </li>
        <li
          className={
            'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer  mt-3'
          }
        >
          <FaRegMessage className={'mx-2'} size={18} />
          <span>Message</span>
        </li>
        <li
          className={'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer mt-3'}
        >
          <CiBookmark className={'mx-2'} />
          <span>Bookmark</span>
        </li>
        <li
          className={'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer mt-3'}
        >
          <IoSettingsOutline className={'mx-2'} />
          <span>Setting</span>
        </li>
      </ul>
      <ul className={'mt-4 shadow'}>
        {Users.map((user) => (
          <CloseFriend user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;
