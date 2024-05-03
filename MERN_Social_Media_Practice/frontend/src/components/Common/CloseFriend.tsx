const CloseFriend = ({ user }) => {
  console.log(user);
  return (
    <li className={'flex flex-row items-center mt-3'}>
      <img src={`src/${user.profilePicture}`} alt='' className={'rounded-full w-8 h-8 mt-2 mr-3'} />
      <span>{user.userName}</span>
    </li>
  );
};

export default CloseFriend;
