import { Users } from '../../../../dummyData.ts';
import YourFriend from '../../YourFriend.tsx';

const ProfileRightBar = () => {
  return (
    <div className={'p-3'}>
      <h2 className={'text-xl font-bold'}>User information</h2>
      <span className={'block'}>from Osaka</span>
      <span className={'block'}>your friends</span>
      <div className={'flex flex-row flex-wrap'}>
        {Users.map((user) => (
          <YourFriend user={user} />
        ))}
      </div>
    </div>
  );
};

export default ProfileRightBar;
