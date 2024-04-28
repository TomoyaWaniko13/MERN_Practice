const OnlineFriends = ({ user }) => {
  return (
    <li className={'flex flex-row items-center cursor-pointer hover:transform hover:translate-y-0.5 duration-500'}>
      <div className={'relative'}>
        <img src={user.profilePicture} alt='' className={'w-16 h-16 rounded-full mr-2'} />
        <span className={'rounded-full w-5 h-5 bg-blue-300  absolute top-0 left-0'} />
      </div>
      <span>{user.userName}</span>
    </li>
  );
};

export default OnlineFriends;
