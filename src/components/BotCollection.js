import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://json-server-8vqy.onrender.com/bots`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
  
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not in JSON format');
        }
  
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };
  
    fetchData();
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
