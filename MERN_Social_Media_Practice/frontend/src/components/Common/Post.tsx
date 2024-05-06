import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';

import { useState } from 'react';
import { Users } from '../../../dummyData.ts';

interface PostProps {
  post: {
    id: number;
    desc: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
  };
}

const Post = ({ post }: PostProps) => {
  const PUBLIC_FOLDER = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

  const [numberOfLike, setNumberOfLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const currentUser = Users.filter((user) => user.id === post.userId);

  console.log(currentUser);

  const handleLike = () => {
    setNumberOfLike(isLiked ? numberOfLike - 1 : numberOfLike + 1);
    setIsLiked((prevState) => !prevState);
  };

  return (
    <article className={'p-4 flex flex-col shadow-2xl my-2'}>
      <header className={'flex justify-between items-center '}>
        <div className={'flex flex-row items-center'}>
          <img
            src={
              currentUser.length > 0 && currentUser[0].profilePicture
                ? PUBLIC_FOLDER + currentUser[0].profilePicture
                : PUBLIC_FOLDER + 'person/noAvatar.png'
            }
            alt=''
            className='postProfileImg'
          />
          <span className={'font-semibold mr-3'}>{currentUser.length > 0 ? currentUser[0].userName : 'Unknown'}</span>
          <time className={'text-gray-800'}>{post.date}</time>
        </div>
        <BsThreeDotsVertical />
      </header>
      <section className={'flex flex-col mt-3'}>
        <p>{post.desc}</p>
        <figure>
          <img src={'http://localhost:5173/assets/person/1.jpeg'} alt='' className={'w-full'} />
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
