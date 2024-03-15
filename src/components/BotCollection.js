import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/bots`)
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div>
      {bots.map(bot => (
        <div key={bot.id}>
        <BotCard bot={bot} onEnlist={enlistBot} />
        
           </div>
      ))}

    </div>
  );
};

export default BotCollection;
