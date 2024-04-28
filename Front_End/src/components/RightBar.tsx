const RightBar = () => {
  return (
    <div className={'w-3/12 p-2'}>
      <div className={'shadow-md  mx-2 my-5'}>
        <div>
          <span>
            <b>Follower-exclusive</b> event happening now!
          </span>
        </div>
        <img src='/assets/ad.jpeg' alt='' />
      </div>
      <div className={'shadow-md mt-10 mx-1'}>
        <h4 className={'mt-3 font-bold text-lg'}>online friends</h4>
        <ul className={'m-3'}>
          <li
            className={'flex flex-row items-center cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}
          >
            <div className={'relative'}>
              <img src='/assets/person/1.jpeg' alt='' className={'w-20 h-20 rounded-full mr-2'} />
              <span className={'rounded-full w-6 h-6 bg-blue-300  absolute top-0 left-0'}> </span>
            </div>
            <span>user 1</span>
          </li>
          <li
            className={'flex flex-row items-center  cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}
          >
            <div className={'relative'}>
              <img src='/assets/person/1.jpeg' alt='' className={'w-20 h-20 rounded-full mr-2'} />
              <span className={'rounded-full w-6 h-6 bg-blue-300  absolute top-0 left-0'}> </span>
            </div>
            <span>user 1</span>
          </li>
          <li
            className={'flex flex-row items-center  cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}
          >
            <div className={'relative'}>
              <img src='/assets/person/1.jpeg' alt='' className={'w-20 h-20 rounded-full mr-2'} />
              <span className={'rounded-full w-6 h-6 bg-blue-300 absolute top-0 left-0'}> </span>
            </div>
            <span>user 1</span>
          </li>
          <li
            className={'flex flex-row items-center cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}
          >
            <div className={'relative'}>
              <img src='/assets/person/1.jpeg' alt='' className={'w-20 h-20 rounded-full mr-2'} />
              <span className={'rounded-full w-6 h-6 bg-blue-300 absolute top-0 left-0'}> </span>
            </div>
            <span>user 1</span>
          </li>
        </ul>
      </div>
      <div className={'mt-10 shadow-md'}>
        <p className={'text-lg font-bold'}>Advertisement</p>
        <div className={'mt-3 cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}>
          <img src='assets/promotion/promotion1.jpeg' alt='' />
          <p>Neko Shopping</p>
        </div>
        <div className={'mt-10 cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}>
          <img src='assets/promotion/promotion2.jpeg' alt='' />
          <p>Neko Car </p>
        </div>
        <div className={'mt-10 cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}>
          <img src='assets/promotion/promotion3.jpeg' alt='' />
          <p>Neko software</p>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
