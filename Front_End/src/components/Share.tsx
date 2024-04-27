import { CiHeart, CiImageOn } from 'react-icons/ci';
import { PiGifLight } from 'react-icons/pi';
import { MdOutlineAnalytics } from 'react-icons/md';

const Share = () => {
  return (
    <section className={'p-10 shadow-md'}>
      <article>
        <header className={'flex items-center'}>
          <img src='/assets/person/1.jpeg' alt='' className={'mx-1'} />
          <div></div>
          <textarea
            placeholder={'Write your thoughts here...'}
            className={
              'w-full p-2 text-gray-900 bg-gray-50 placeholder-gray-300 rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500'
            }
          />
        </header>
        <hr className={'h-px my-8 bg-gray-200 border-0'} />

        <div className={'w-full flex items-center justify-between'}>
          <nav className={'flex'}>
            <figure className={'flex items-center mx-2'}>
              <CiImageOn size={25} color={'blue'} />
              <figcaption>photo</figcaption>
            </figure>
            <figure className={'flex items-center mx-2'}>
              <PiGifLight size={25} color={'blue'} />
              <figcaption>GIF</figcaption>
            </figure>
            <figure className={'flex items-center mx-2'}>
              <CiHeart size={25} color={'blue'} />
              <figcaption>feeling</figcaption>
            </figure>
            <figure className={'flex items-center mx-2'}>
              <MdOutlineAnalytics size={25} color={'blue'} />
              <figcaption>Vote</figcaption>
            </figure>
          </nav>
          <div className={'flex justify-end'}>
            <button
              className={'border border-gray-400  px-2 py-1 rounded-lg hover:bg-black hover:text-white duration-300'}
            >
              Post
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Share;
