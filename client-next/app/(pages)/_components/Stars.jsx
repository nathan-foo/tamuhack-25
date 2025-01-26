import React, { useEffect, useState } from 'react';

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numStars = 100;
    const starsArray = [];

    for (let i = 0; i < numStars; i++) {
      const star = {
        left: `${Math.random() * 100}vw`, 
        top: `${Math.random() * 100}vh`, 
        size: `${Math.random() * 3 + 1}px`, 
        delay: `${Math.random() * 2}s`, 
      };
      starsArray.push(star);
    }

    setStars(starsArray);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor: 'white',
            borderRadius: '50%',
            animation: `fadeInOut 3s ${star.delay} infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Stars;
