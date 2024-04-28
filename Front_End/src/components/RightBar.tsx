import { Users } from '../experimentalData.ts';
import OnlineFriends from './OnlineFriends.tsx';

const RightBar = () => {
  return (
    <aside className={'w-3/12 p-2'}>
      <section className={'shadow-md  mx-2 my-5'}>
        <header>
          <span>
            <b>Follower-exclusive</b> event happening now!
          </span>
        </header>
        <img src='/assets/ad.jpeg' alt='' />
      </section>
      <section className={'shadow-md mt-10 mx-1'}>
        <h4 className={'mt-3 font-bold text-lg'}>online friends</h4>
        <ul className={'m-3'}>
          {Users.map((user) => (
            <OnlineFriends user={user} key={user.id} />
          ))}
        </ul>
      </section>
      <section className={'mt-10 p-2 shadow-md'}>
        <h3 className={'text-lg font-bold'}>Advertisement</h3>
        <article className={'mt-3 cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}>
          <img src='assets/promotion/promotion1.jpeg' alt='' />
          <p className={'mt-2'}>Neko Shopping</p>
        </article>
        <article className={'mt-10 cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}>
          <img src='assets/promotion/promotion2.jpeg' alt='' />
          <p className={'mt-2'}>Neko Car </p>
        </article>
        <article className={'mt-10 cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}>
          <img src='assets/promotion/promotion3.jpeg' alt='' />
          <p className={'mt-2'}>Neko software</p>
        </article>
      </section>
    </aside>
  );
};

export default RightBar;
