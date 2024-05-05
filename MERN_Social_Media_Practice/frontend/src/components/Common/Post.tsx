import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';

import { useState } from 'react';
import { Users } from '../../../dummyData.ts';

const Post = ({ post }) => {
  const [numberOfLike, setNumberOfLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const currentUser = Users.filter((user) => user.id === post.id);

  const handleLike = () => {
    setNumberOfLike(isLiked ? numberOfLike - 1 : numberOfLike + 1);
    setIsLiked((prevState) => !prevState);
  };
  return (
    <article className={'p-4 flex flex-col shadow-2xl my-2'}>
      <header className={'flex justify-between items-center '}>
        <div className={'flex flex-row items-center'}>
          <img src='src/assets/person/1.jpeg' alt='' className={'rounded-full w-10 h-10 mt-2 mr-3'} />
          <span className={'font-semibold mr-3'}>{currentUser[0].userName}</span>
          <time className={'text-gray-800'}>{post.date}</time>
        </div>
        <BsThreeDotsVertical />
      </header>
      <section className={'flex flex-col mt-3'}>
        <p>{post.desc}</p>
        <figure>
          <img src={'/src/' + post.photo} alt='' className={'w-full'} />
        </figure>
      </section>
      <footer className={'mt-3 flex justify-between items-center'}>
        <div className={'flex w-1/3 items-center'}>
          <button onClick={handleLike}>
            {isLiked ? <CiHeart className={'mr-1'} color={'red'} /> : <CiHeart className={'mr-1'} />}
          </button>
          <span>{`${numberOfLike} user${numberOfLike > 1 ? 's' : ''} liked this post`}</span>
        </div>
        <span>{`${post.comment} comment${post.comment > 1 ? 's' : ''}`}</span>
      </footer>
    </article>
  );
};

export default Post;
