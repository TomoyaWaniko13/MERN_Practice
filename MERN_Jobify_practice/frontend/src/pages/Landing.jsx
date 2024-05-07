import { Link } from 'react-router-dom';
import { Logo } from '../components/index.js';

const Landing = () => {
  return (
    <div className={'px-4 lg:px-40'}>
      <nav className={'h-24 flex justify-start items-center'}>
        <Logo />
      </nav>
      <div className={'flex flex-row mt-10'}>
        <div className={'w-full lg:w-2/3'}>
          <h1 className={'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'}>
            Job <span className={'text-cyan-500'}>Tracking</span> App
          </h1>
          <p className={'w-10/12 py-10 text-lg'}>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia.
            Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
          </p>

          <div className={'flex flex-col justify-start items-center w-full lg:flex-row  text-center'}>
            <Link
              className={
                'w-64 bg-cyan-500 text-white px-3 py-2 rounded hover:bg-cyan-600 duration-300 mb-4 lg:mb-0 lg:mr-10 text-lg'
              }
              to={'/register'}
            >
              Register
            </Link>
            <Link
              className={'w-64 bg-cyan-500 text-white px-3 py-2 rounded hover:bg-cyan-600 duration-300 text-lg'}
              to={'/login'}
            >
              Login / Demo User
            </Link>
          </div>
        </div>
        <div className={'lg:w-1/3 h-20 hidden lg:inline'}>
          <img src='/src/assets/images/main.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Landing;
