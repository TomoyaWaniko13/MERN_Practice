const ProfileHeader = () => {
  const PUBLIC_FOLDER = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  console.log(PUBLIC_FOLDER);
  return (
    <div>
      <div className={'w-full'}>
        <img src={`${PUBLIC_FOLDER}/post/1.jpeg`} alt='' className={'w-full h-32'} />
        <img
          src={`${PUBLIC_FOLDER}/post/1.jpeg`}
          alt=''
          className={'h-32 w-36 rounded-full block mx-auto relative -top-5'}
        />
        <div className={'text-center relative -top-4'}>
          <h2 className={'text-2xl font-bold'}>Tomoya</h2>
          <p>Neko san</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
