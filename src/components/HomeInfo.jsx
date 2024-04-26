const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Brayan</span>
        👋
        <br />
        A Junior Software Developer 🇨🇴
      </h1>
    );
  return null;
};

export default HomeInfo;
