import { FaHeart } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { Users } from '../experimentalData.ts';

const Post = ({ post }) => {
  // console.log(Users);
  // console.log(Users.filter((user) => user.id === 1));
  // console.log(post);

  const user = Users.find((user) => post.id === user.id);

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
          <FaHeart size={23} color={'red'} className={'mx-2'} />
          <span>{post.like} users liked this post.</span>
        </div>
        <div>
          <span>{post.comment} comments</span>
        </div>
      </footer>
    </article>
  );
};

export default Post;
