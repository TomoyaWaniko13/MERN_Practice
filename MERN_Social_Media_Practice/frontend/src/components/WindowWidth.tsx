import { useEffect, useState } from 'react';

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={'flex justify-evenly'}>
        <p>{width}px</p>
        <p>sm: 640 px</p>
        <p>md: 768 px</p>
        <p>lg: 1024 px</p>
        <p>xl: 1280 px</p>
        <p>2xl: 1536 px</p>
      </div>
    </div>
  );
};

export default WindowWidth;
