import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(`https://json-server-8vqy.onrender.com/bots`)
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onEnlist={enlistBot} />
      ))}
    </div>
  );
};

export default BotCollection;
