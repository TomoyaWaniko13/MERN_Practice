import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';

const Post = () => {
  return (
    <div className={'p-4 flex flex-col shadow-2xl my-2'}>
      <div className={'flex justify-between items-center '}>
        <div className={'flex flex-row items-center'}>
          <img src='src/assets/person/1.jpeg' alt='' className={'rounded-full w-10 h-10 mt-2 mr-3'} />
          <span className={'font-semibold mr-3'}>Name 1</span>
          <span className={'text-gray-800'}>5 minutes ago</span>
        </div>
        <BsThreeDotsVertical />
      </div>
      <div className={'flex flex-col mt-3'}>
        <span>example 1.</span>
        <div>
          <img src='src/assets/post/1.jpeg' alt='' className={'w-full mt-2'} />
        </div>
      </div>
      <div className={'mt-3 flex justify-between items-center'}>
        <div className={'flex w-1/3 items-center'}>
          <CiHeart className={'mr-1'} />
          <span>20 users liked this post.</span>
        </div>
        <span>4 comments</span>
      </div>
    </div>
  );
};

export default Post;
