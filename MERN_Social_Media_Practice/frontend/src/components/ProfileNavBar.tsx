const ProfileNavBar = () => {
  return (
    <div>
      <div className={'w-full'}>
        <img src='src/assets/post/1.jpeg' alt='' className={'w-full h-32'} />
        <img src='src/assets/person/1.jpeg' alt='' className={'rounded-full block mx-auto relative -top-10'} />
        <div className={'text-center '}>
          <h2 className={'text-2xl font-bold'}>Tomoya</h2>
          <p>Neko san</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavBar;
