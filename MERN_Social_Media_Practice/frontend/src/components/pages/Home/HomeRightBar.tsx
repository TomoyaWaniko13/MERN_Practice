import { Users } from '../../../../dummyData.ts';
import OnlineFriend from './OnlineFriend.tsx';

const HomeRightBar = () => {
  const PUBLIC_FOLDER = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  return (
    <aside className={'p-2'}>
      <section>
        <span>Currently holding an follower-exclusive event!</span>
      </section>

      <section>
        <span className={'font-bold'}>online friends</span>
        <ul className={'mt-3'}>
          {Users.map((user) => (
            <OnlineFriend user={user} key={user.id} />
          ))}
        </ul>
      </section>

      <ul className={'mt-3'}>
        <h2 className={'text-xl font-bold'}>advertisement</h2>
        <li>
          <img src={`${PUBLIC_FOLDER}/promotion/promotion1.jpeg`} alt='' className={'mt-2 mr-3'} />
          <span>ad 1</span>
        </li>
        <li>
          <img src={`${PUBLIC_FOLDER}/promotion/promotion2.jpeg`} alt='' className={'mt-2 mr-3'} />
          <span>ad 1</span>
        </li>
        <li>
          <img src={`${PUBLIC_FOLDER}/promotion/promotion3.jpeg`} alt='' className={'mt-2 mr-3'} />
          <span>ad 1</span>
        </li>
      </ul>
    </aside>
  );
};

export default HomeRightBar;
