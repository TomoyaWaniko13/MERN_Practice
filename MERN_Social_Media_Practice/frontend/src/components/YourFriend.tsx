const YourFriend = ({ user }) => {
  return (
    <div className={'flex flex-col items-center mx-3'}>
      <img src={`src/${user.profilePicture}`} alt='' className={'rounded-full w-20 h-20 mt-2 mr-3'} />
      <span>{user.userName}</span>
    </div>
  );
};

export default YourFriend;
