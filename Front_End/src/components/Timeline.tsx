import Share from './Share.tsx';
import Post from './Post.tsx';

const Timeline = () => {
  return (
    <div className={'w-7/12 border border-yellow-800'}>
      <div>
        <Share />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Timeline;
