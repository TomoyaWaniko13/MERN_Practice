import { AiTwotonePicture } from 'react-icons/ai';
import { MdDataThresholding, MdOutlineEmojiEmotions } from 'react-icons/md';
import { FaPerson } from 'react-icons/fa6';

const Share = () => {
  return (
    <>
      <div className={'border-2 border-emerald-700 p-4 my-3'}>
        <div className={'flex items-center justify-start mt-3'}>
          <img src='src/assets/person/1.jpeg' alt='' className={'rounded-full w-10 h-10 mt-2 mx-2'} />
          <input
            type='text'
            placeholder={"What's happening?"}
            className={'text-black w-full border border-black px-1 py-2 rounded-lg '}
          />
        </div>
        <div className={'mt-10'}>
          <div className={'flex justify-between'}>
            <ul className={'flex w-1/3 justify-around'}>
              <li className={'flex'}>
                <AiTwotonePicture size={25} className={'mx-2'} />
                <span>Picture</span>
              </li>
              <li className={'flex'}>
                <MdOutlineEmojiEmotions size={25} className={'mx-2'} />
                <span>GIF</span>
              </li>
              <li className={'flex'}>
                <FaPerson size={25} className={'mx-2'} />
                <span>emotion</span>
              </li>
              <li className={'flex'}>
                <MdDataThresholding size={25} className={'mx-2'} />
                <span>poll</span>
              </li>
            </ul>
            <div>
              <button
                className={'mr-3 border border-black rounded-lg px-3 py-1 hover:bg-black hover:text-white duration-300'}
              >
                post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
