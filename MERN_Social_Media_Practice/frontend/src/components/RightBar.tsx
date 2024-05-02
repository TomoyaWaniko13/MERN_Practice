const RightBar = () => {
  return (
    <div className={'w-1/5 p-2'}>
      <div>
        <span>Currently holding an follower-exclusive event!</span>
      </div>
      <div className={'mt-3'}>
        <span>online friends</span>
        <div className={'flex items-center mt-3'}>
          <span className={'bg-blue-400 h-3 w-3 rounded-full relative -top-1 left-2'} />
          <img src='src/assets/person/1.jpeg' alt='' className={'rounded-full w-8 h-8 mt-2 mr-3'} />
          <div>
            <span>name 1</span>
          </div>
        </div>
        <div className={'flex items-center mt-3'}>
          <span className={'bg-blue-400 h-3 w-3 rounded-full relative -top-1 left-2'} />
          <img src='src/assets/person/1.jpeg' alt='' className={'rounded-full w-8 h-8 mt-2 mr-3'} />
          <div>
            <span>name 2</span>
          </div>
        </div>
      </div>
      <div className={'mt-3'}>
        <h2>advertisement</h2>
        <div>
          <img src='src/assets/promotion/promotion1.jpeg' alt='' className={' mt-2 mr-3'} />
          <span>ad 1</span>
        </div>
        <div>
          <img src='src/assets/promotion/promotion1.jpeg' alt='' className={' mt-2 mr-3'} />
          <span>ad 1</span>
        </div>
        <div>
          <img src='src/assets/promotion/promotion1.jpeg' alt='' className={' mt-2 mr-3'} />
          <span>ad 1</span>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
