import { FaHeart } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { Users } from '../experimentalData.ts';
import { useState } from 'react';

const Post = ({ post }) => {
  // get a 'nth element(user)' from 'Users' array.
  const user = Users.find((user) => post.id === user.id);

  const [numberOfLike, setNumberOfLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setNumberOfLike(!isLiked ? numberOfLike + 1 : numberOfLike - 1);
    setIsLiked((prevState) => !prevState);
  };
  return (
    <article className={'w-full p-4 shadow-md'}>
      <header className={'flex justify-between items-center'}>
        <div className={'flex items-center'}>
          <img src={user.profilePicture} alt='' className={'w-10'} />
          <h1 className={'font-extrabold mx-3'}>{user.userName}</h1>
          <time>{post.date}</time>
        </div>
        <div>
          <HiDotsVertical />
        </div>
      </header>
      <hr className={'h-px my-4 bg-gray-200 border-0'} />
      <section className={'m-2'}>
        <p className={'block my-4'}>{post.description}</p>
        <img src={post.photo} alt='' className={'mx-auto block'} />
      </section>
      <footer className={'flex justify-between items-center'}>
        <div className={'flex mt-3'}>
          <div onClick={() => handleLike()}>
            <FaHeart size={23} color={'red'} className={'mx-2'} />
          </div>
          <span>{numberOfLike} users liked this post.</span>
        </div>
        <div>
          <span>{post.comment} comments</span>
        </div>
      </footer>
    </article>
  );
};

export default Post;
