import Share from './Share.tsx';
import Post from './Post.tsx';
import { Posts } from '../../src/experimentalData.ts';

const Timeline = () => {
  return (
    <div className={'w-6/12 border border-yellow-800'}>
      <div>
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
