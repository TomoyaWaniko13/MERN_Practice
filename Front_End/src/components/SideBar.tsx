import { CiBookmark, CiHome, CiSettings } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { FaRegMessage } from 'react-icons/fa6';
import { MdOutlinePersonOutline } from 'react-icons/md';

const SideBar = () => {
  return (
    <>
      <aside className={'border border-green-600 w-1/6 text-blac'}>
        <div className={'p-1'}>
          <ul className={'flex flex-col'}>
            <li
              className={
                'flex items-center p-1 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:transition duration-300'
              }
            >
              <CiHome className={'mr-1'} />
              <span>Home</span>
            </li>
            <li
              className={
                'flex items-center p-1 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:transition duration-300'
              }
            >
              <FaSearch className={'mr-1'} />
              <span>Search</span>
            </li>
            <li
              className={
                'flex items-center p-1 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:transition duration-300'
              }
            >
              <IoIosNotifications className={'mr-1'} />
              <span>Notification</span>
            </li>
            <li
              className={
                'flex items-center p-1 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:transition duration-300'
              }
            >
              <FaRegMessage className={'mr-1'} />
              <span>Message</span>
            </li>
            <li
              className={
                'flex items-center p-1 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:transition duration-300'
              }
            >
              <CiBookmark className={'mr-1'} />
              <span>BookMark</span>
            </li>
            <li
              className={
                'flex items-center p-1 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:transition duration-300'
              }
            >
              <MdOutlinePersonOutline className={'mr-1'} />
              <span>Profile</span>
            </li>
            <li
              className={
                'flex items-center p-1 shadow cursor-pointer hover:transform hover:translate-y-0.5 hover:transition duration-300'
              }
            >
              <CiSettings className={'mr-1'} />
              <span>Setting</span>
            </li>
          </ul>
          <section>
            <ul className={'flex flex-col border-2 border-cyan-500 '}>
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
