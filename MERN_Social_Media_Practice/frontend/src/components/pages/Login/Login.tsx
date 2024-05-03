const Login = () => {
  return (
    <div className={'p-20 py-42 flex'}>
      <div className={'w-1/2 text-center pt-20'}>
        <h1 className={'text-4xl font-extrabold'}>MERN</h1>
        <h2 className={'text-2xl mt-3'}>web development tech stack</h2>
      </div>
      <div className={'flex flex-col w-1/2 shadow-sm p-3 shadow-black text-center '}>
        <span className={'text-xl'}>Login</span>
        <input type='text' placeholder={'email'} className={'border border-gray-500 rounded-b p-1 mt-3'} />
        <input type='text' placeholder={'password'} className={'border border-gray-400 rounded-b p-1 mt-3'} />
        <button
          className={
            'bg-black border border-black text-white rounded-lg px-3 py-1 mt-3 hover:bg-white hover:text-black hover:border hover:border-black'
          }
        >
          Login
        </button>
        <button className={'mt-3'}>forget password?</button>
        <button
          className={
            'bg-cyan-700 border border-cyan-700 text-white rounded-lg px-3 py-1 mt-3 hover:bg-white hover:text-cyan-700 hover:border hover:border-cyan-700'
          }
        >
          create new account
        </button>
      </div>
    </div>
  );
};

export default Login;
