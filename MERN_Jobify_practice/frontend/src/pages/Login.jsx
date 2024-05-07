import { FormRow, Logo } from '../components/index.js';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className={'w-full h-screen flex justify-center items-center'}>
      <form action='' className={'w-1/3 shadow-lg p-4 border-t-4 border-cyan-500'}>
        <Logo />
        <h4 className={'text-center text-3xl mt-8'}>register</h4>
        <div className={'flex flex-col justify-start items-center'}>
          <FormRow name={'email'} type={'input'} defaultValue={'john@gmail.com'} />
          <FormRow name={'passwrod'} type={'password'} />
        </div>
        <button type={'submit'} className={'text-white bg-cyan-500 px-1 py-2 w-full mt-10'}>
          submit
        </button>
        <button type={'button'} className={'text-white bg-cyan-500 px-1 py-2 w-full mt-10'}>
          explore the app
        </button>
        <div className={'mt-3 flex justify-center'}>
          <span>not a member yet?</span>
          <Link to={'/register'} className={'text-cyan-500'}>
            register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
