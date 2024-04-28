const LikeMindedFriends = ({ user }) => {
  return (
    <li
      className={
        'flex items-center my-2 hover:transform hover:translate-y-0.5 hover:transition duration-300 cursor-pointer'
      }
    >
      <img src={user.profilePicture} alt='' className='w-14 h-14 rounded-full mx-2' />
      <span className='sidebarFriendName'>{user.userName}</span>
    </li>
  );
};

export default LikeMindedFriends;
