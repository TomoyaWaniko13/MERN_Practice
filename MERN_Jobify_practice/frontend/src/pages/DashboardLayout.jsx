import { Outlet } from 'react-router-dom';
import { BigSideBar, Navbar, SmallSideBar } from '../components/index.js';

const DashboardLayout = () => {
  return (
    <main>
      <SmallSideBar />
      <BigSideBar />
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
