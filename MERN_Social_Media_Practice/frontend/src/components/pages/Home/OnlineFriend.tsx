const OnlineFriend = ({ user }) => {
  const PUBLIC_FOLDER = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  return (
    <li className={'flex items-center mt-3'}>
      <span className={'bg-blue-400 h-3 w-3 rounded-full relative -top-1 left-2'} />
      <img src={PUBLIC_FOLDER + user.profilePicture} alt='' className={'rounded-full w-8 h-8 mt-2 mr-3'} />
      <div>
        <span>{user.userName}</span>
      </div>
    </li>
  );
};

export default OnlineFriend;
