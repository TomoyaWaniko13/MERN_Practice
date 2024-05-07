import { Outlet } from 'react-router-dom';
import { BigSidebar, Navbar, SmallSidebar } from '../components/index.js';
import { useState } from 'react';

const DashboardLayout = () => {
  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log('toggle dark theme.');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <main className={'flex flex-col lg:flex-row'}>
      <div>
        <div className={'lg:hidden'}>
          <SmallSidebar />
        </div>
        <div className={'hidden lg:block'}>
          <BigSidebar />
        </div>
      </div>
      <div className={'flex flex-col'}>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
