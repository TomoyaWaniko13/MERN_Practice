import HomeRightBar from './HomeRightBar.tsx';

import Timeline from './Timeline.tsx';
import LeftBar from '../../Common/LeftBar.tsx';
import TopBar from '../../Common/TopBar.tsx';

const Home = () => {
  return (
    <>
      <div className={'w-full'}>
        <TopBar />
      </div>
      <div className={'flex flex-row'}>
        <div className={'w-1/5'}>
          <LeftBar />
        </div>
        <div className={'w-3/5'}>
          <Timeline />
        </div>
        <div className={'w-1/5'}>
          <HomeRightBar />
        </div>
      </div>
    </>
  );
};

export default Home;
