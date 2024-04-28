import { CiBookmark, CiHome, CiSettings } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { FaRegMessage } from 'react-icons/fa6';
import { MdOutlinePersonOutline } from 'react-icons/md';
import LikeMindedFriends from './likeMindedFriends.tsx';
import { Users } from '../experimentalData.ts';

const SideBar = () => {
  return (
    <>
      <aside className={'border border-green-600 w-3/12 text-black text-xl p-2'}>
        <div className={'p-1'}>
          <ul className={'flex flex-col'}>
            <li className={'flex items-center p-3 shadow cursor-pointer hover:bg-black hover:text-white duration-500 '}>
              <CiHome className={'mx-3'} />
              <span>Home</span>
            </li>
            <li className={'flex items-center p-3 shadow cursor-pointer hover:bg-black hover:text-white duration-500 '}>
              <FaSearch className={'mx-3'} />
              <span>Search</span>
            </li>
            <li className={'flex items-center p-3 shadow cursor-pointer hover:bg-black hover:text-white duration-500 '}>
              <IoIosNotifications className={'mx-3'} />
              <span>Notification</span>
            </li>
            <li className={'flex items-center p-3 shadow cursor-pointer hover:bg-black hover:text-white duration-500 '}>
              <FaRegMessage className={'mx-3'} />
              <span>Message</span>
            </li>
            <li className={'flex items-center p-3 shadow  cursor-pointer hover:bg-black hover:text-white duration-500'}>
              <CiBookmark className={'mx-3'} />
              <span>BookMark</span>
            </li>
            <li className={'flex items-center p-3 shadow  cursor-pointer hover:bg-black hover:text-white duration-500'}>
              <MdOutlinePersonOutline className={'mx-3'} />
              <span>Profile</span>
            </li>
            <li className={'flex items-center p-3 shadow cursor-pointer hover:bg-black hover:text-white duration-500'}>
              <CiSettings className={'mx-3'} />
              <span>Setting</span>
            </li>
          </ul>
          <section>
            <ul className={'flex flex-col shadow-md'}>
              {Users.map((user) => (
                <LikeMindedFriends user={user} key={user.id} />
              ))}
            </ul>
          </section>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
