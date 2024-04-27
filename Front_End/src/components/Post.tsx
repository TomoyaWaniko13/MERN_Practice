import { FaHeart } from 'react-icons/fa';

import { HiDotsVertical } from 'react-icons/hi';

const Post = () => {
  return (
    <div className={'w-full p-4 shadow-md'}>
      <div className={'flex justify-between items-center'}>
        <div className={'flex items-center'}>
          <img src='./assets/person/1.jpeg' alt='' className={'w-10'} />
          <span className={'font-extrabold mx-3'}>Shin code</span>
          <span>5 minutes before...</span>
        </div>
        <div>
          <HiDotsVertical />
        </div>
      </div>
      <hr className={'h-px my-4 bg-gray-200 border-0'} />
      <div className={'m-2'}>
        <span className={'block my-4'}>this service is under construction....</span>
        <img src='./assets/post/1.jpeg' alt='' className={'mx-auto block'} />
      </div>
      <div className={'flex justify-between items-center'}>
        <div className={'flex mt-3'}>
          <FaHeart size={23} color={'red'} className={'mx-2'} />
          <span>5 users liked this post.</span>
        </div>
        <div>
          <span>4:comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
