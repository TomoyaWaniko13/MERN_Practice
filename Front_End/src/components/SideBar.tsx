import { CiBookmark, CiHome, CiSettings } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { FaRegMessage } from 'react-icons/fa6';
import { MdOutlinePersonOutline } from 'react-icons/md';

const SideBar = () => {
  return (
    <>
      <aside className={'border border-green-600 w-1/6 text-black text-xl p-2'}>
        <div className={'p-1'}>
          <ul className={'flex flex-col'}>
            <li
              className={
                'flex items-center p-3 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:bg-black hover:text-white duration-500 '
              }
            >
              <CiHome className={'mx-3'} />
              <span>Home</span>
            </li>
            <li
              className={
                'flex items-center p-3 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:bg-black hover:text-white duration-500 '
              }
            >
              <FaSearch className={'mx-3'} />
              <span>Search</span>
            </li>
            <li
              className={
                'flex items-center p-3 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:bg-black hover:text-white duration-500 '
              }
            >
              <IoIosNotifications className={'mx-3'} />
              <span>Notification</span>
            </li>
            <li
              className={
                'flex items-center p-3 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:bg-black hover:text-white duration-500 '
              }
            >
              <FaRegMessage className={'mx-3'} />
              <span>Message</span>
            </li>
            <li
              className={
                'flex items-center p-3 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:bg-black hover:text-white duration-500 '
              }
            >
              <CiBookmark className={'mx-3'} />
              <span>BookMark</span>
            </li>
            <li
              className={
                'flex items-center p-3 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:bg-black hover:text-white duration-500 '
              }
            >
              <MdOutlinePersonOutline className={'mx-3'} />
              <span>Profile</span>
            </li>
            <li
              className={
                'flex items-center p-3 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:bg-black hover:text-white duration-500 '
              }
            >
              <CiSettings className={'mx-3'} />
              <span>Setting</span>
            </li>
          </ul>
          <section>
            <ul className={'flex flex-col shadow-md'}>
              <li
                className={
                  'flex items-center my-2 hover:transform hover:translate-y-0.5 hover:transition duration-300 cursor-pointer'
                }
              >
                <img src='./assets/person/1.jpeg' alt='' className='w-14 h-14 rounded-full mx-2' />
                <span className='sidebarFriendName'>1st user</span>
              </li>
              <li
                className={
                  'flex items-center my-2 hover:transform hover:translate-y-0.5 hover:transition duration-300 cursor-pointer'
                }
              >
                <img src='./assets/person/2.jpeg' alt='' className='w-14 h-14 rounded-full mx-2' />
                <span className='sidebarFriendName'>2nd user</span>
              </li>
              <li
                className={
                  'flex items-center my-2 hover:transform hover:translate-y-0.5 hover:transition duration-300 cursor-pointer'
                }
              >
                <img src='./assets/person/3.jpeg' alt='' className='w-14 h-14 rounded-full mx-2' />
                <span className='sidebarFriendName'>3rd user</span>
              </li>
              <li
                className={
                  'flex items-center my-2 hover:transform hover:translate-y-0.5 hover:transition duration-300 cursor-pointer'
                }
              >
                <img src='./assets/person/4.jpeg' alt='' className='w-14 h-14 rounded-full mx-2' />
                <span className='sidebarFriendName'>4th user</span>
              </li>
              <li
                className={
                  'flex items-center my-2 hover:transform hover:translate-y-0.5 hover:transition duration-300 cursor-pointer'
                }
              >
                <img src='./assets/person/5.jpeg' alt='' className='w-14 h-14 rounded-full mx-2' />
                <span className='sidebarFriendName'>5th user</span>
              </li>
            </ul>
          </section>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
