import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      {/*  Purpose of <Outlet>: It acts as a placeholder
      within a component to render the nested routes' components.
      So, when a parent route matches, <Outlet> determines what
      child component to render based on the current URL.*/}
      <Outlet />
    </div>
  );
};

export default HomeLayout;
