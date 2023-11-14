import { useState, useEffect } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(false);
  const [color, setColor] = useState('darkred');

  function handleClick() {
    setWalk(!walk);
  }

  useEffect(() => {
    setColor(walk ? 'darkgreen' : 'darkred');
  }, [walk]);

  return (
    <>
      <h3>Traffic Light</h3>
      <button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'}</button>
      <h4 style={{ color: color }}>{walk ? 'Walk' : "Don't walk"}</h4>
    </>
  );
}
