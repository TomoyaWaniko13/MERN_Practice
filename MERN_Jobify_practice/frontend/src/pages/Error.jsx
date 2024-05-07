import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/undraw_page_not_found.svg';

const Error = () => {
  //   https://reactrouter.com/en/main/hooks/use-route-error
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className={'flex flex-col justify-center items-center h-screen text-xl  sm:text-3xl capitalize'}>
        <img src={img} alt='' />
        <h3 className={'mt-4'}>page not found</h3>
        <p className={'mt-4 text-center'}>we can&apos;t seem to find the page your are looking for...</p>
        <Link to={'/dashboard'} className={'mt-4 text-cyan-500 underline'}>
          back home
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1>Error page</h1>
      <Link to={'/'}>back home</Link>
    </>
  );
};

export default Error;
