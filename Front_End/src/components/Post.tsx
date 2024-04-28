import { FaHeart } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';

const Post = () => {
  return (
    <article className={'w-full p-4 shadow-md'}>
      <header className={'flex justify-between items-center'}>
        <div className={'flex items-center'}>
          <img src='./assets/person/1.jpeg' alt='' className={'w-10'} />
          <h1 className={'font-extrabold mx-3'}>Shin code</h1>
          <time>5 minutes before...</time>
        </div>
        <div>
          <HiDotsVertical />
        </div>
      </header>
      <hr className={'h-px my-4 bg-gray-200 border-0'} />
      <section className={'m-2'}>
        <p className={'block my-4'}>this service is under construction....</p>
        <img src='./assets/post/1.jpeg' alt='' className={'mx-auto block'} />
      </section>
      <footer className={'flex justify-between items-center'}>
        <div className={'flex mt-3'}>
          <FaHeart size={23} color={'red'} className={'mx-2'} />
          <span>5 users liked this post.</span>
        </div>
        <div>
          <span>4:comments</span>
        </div>
      </footer>
    </article>
  );
};

export default Post;
