const CloseFriend = ({ user }) => {
  const PUBLIC_FOLDER = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  console.log(PUBLIC_FOLDER);
  return (
    <li className={'flex flex-row items-center mt-3'}>
      <img src={PUBLIC_FOLDER + user.profilePicture} alt='' className={'rounded-full w-8 h-8 mt-2 mr-3'} />
      <span>{user.userName}</span>
    </li>
  );
};

export default CloseFriend;
