import Share from './Share.tsx';
import Post from './Post.tsx';
import { Posts } from '../../dummyData.ts';

const Timeline = () => {
  return (
    <div className={'flex flex-col w-3/5'}>
      <Share />
      {Posts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
};

export default Timeline;
