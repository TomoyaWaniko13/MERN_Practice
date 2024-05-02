import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';

const Post = ({ post }) => {
  console.log(post.photo);
  return (
    <div className={'p-4 flex flex-col shadow-2xl my-2'}>
      <div className={'flex justify-between items-center '}>
        <div className={'flex flex-row items-center'}>
          <img src='src/assets/person/1.jpeg' alt='' className={'rounded-full w-10 h-10 mt-2 mr-3'} />
          <span className={'font-semibold mr-3'}>user 1</span>
          <span className={'text-gray-800'}>{post.date}</span>
        </div>
        <BsThreeDotsVertical />
      </div>
      <div className={'flex flex-col mt-3'}>
        <span>{post.desc}</span>
        <div>
          <img src={'/src/' + post.photo} alt='' className={'w-full'} />
        </div>
      </div>
      <div className={'mt-3 flex justify-between items-center'}>
        <div className={'flex w-1/3 items-center'}>
          <CiHeart className={'mr-1'} />
          <span>{`${post.like} user${post.like > 1 ? 's' : ''} liked this post`}</span>
        </div>
        <span>{`${post.comment} comment${post.comment > 1 ? 's' : ''}`}</span>
      </div>
    </div>
  );
};

export default Post;
