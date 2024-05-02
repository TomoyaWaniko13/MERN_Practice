import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaMagnifyingGlass, FaRegMessage } from 'react-icons/fa6';
import { CiBookmark, CiHome } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';

const LeftBar = () => {
  return (
    <>
      <div className={'w-1/5 p-2 text-xl'}>
        <ul className={'shadow p-2'}>
          <li className={'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer'}>
            <CiHome className={'mx-2'} />
            <span>Home</span>
          </li>
          <li
            className={
              'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer mt-3'
            }
          >
            <FaMagnifyingGlass className={'mx-2'} />
            <span>Search</span>
          </li>
          <li
            className={
              'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer mt-3'
            }
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
            className={
              'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer mt-3'
            }
          >
            <CiBookmark className={'mx-2'} />
            <span>Bookmark</span>
          </li>
          <li
            className={
              'flex justify-start items-center hover:bg-black hover:text-white duration-300 cursor-pointer mt-3'
            }
          >
            <IoSettingsOutline className={'mx-2'} />
            <span>Setting</span>
          </li>
        </ul>
        <ul className={'mt-4 shadow'}>
          <li className={'flex justify-start items-center '}>
            <img src='src/assets/person/1.jpeg' alt='' className={'rounded-full w-10 h-10 mx-2'} />
            <p>user 1</p>
          </li>
          <li className={'flex justify-start items-center'}>
            <img src='src/assets/person/2.jpeg' alt='' className={'rounded-full w-10 h-10 mt-2 mx-2'} />
            <p>user 2</p>
          </li>
          <li className={'flex justify-start items-center'}>
            <img src='src/assets/person/3.jpeg' alt='' className={'rounded-full w-10 h-10 mt-2 mx-2'} />
            <p>user 3</p>
          </li>
          <li className={'flex justify-start items-center'}>
            <img src='src/assets/person/4.jpeg' alt='' className={'rounded-full w-10 h-10 mt-2 mx-2'} />
            <p>user 4</p>
          </li>
          <li className={'flex justify-start items-center'}>
            <img src='src/assets/person/5.jpeg' alt='' className={'rounded-full w-10 h-10 mt-2 mx-2'} />
            <p>user 5</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftBar;
