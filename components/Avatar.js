import Image from "next/image";

const Avatar = () => {
  const customStyle = {
    transform: 'translate(195px, 43px)',
  };

  return (
    <div className='hidden xl:flex xl:max-w-none' style={customStyle}>
      <Image 
        src={'/avatar4.png'}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full "
      /> 
    </div>
  )
};

export default Avatar;
