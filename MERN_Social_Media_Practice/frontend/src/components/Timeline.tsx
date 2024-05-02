import Share from './Share.tsx';
import Post from './Post.tsx';

const Timeline = () => {
  return (
    <div className={'flex flex-col w-3/5'}>
      <Share />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Timeline;
