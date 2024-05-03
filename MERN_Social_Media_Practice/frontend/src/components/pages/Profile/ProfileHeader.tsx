const ProfileHeader = () => {
  return (
    <div>
      <div className={'w-full'}>
        <img src='src/assets/post/1.jpeg' alt='' className={'w-full h-32'} />
        <img src='src/assets/person/1.jpeg' alt='' className={'rounded-full block mx-auto relative -top-4'} />
        <div className={'text-center relative -top-4'}>
          <h2 className={'text-2xl font-bold'}>Tomoya</h2>
          <p>Neko san</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
