// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [army, setArmy] = useState([]);

  const enlistBot = (bot) => {
    setArmy([...army, bot]);
  };

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = async (botId) => {
    try {
      const response = await fetch(`https://botbattlr-hellen-cherotich.vercel.app/${botId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete bot');
      }
      setArmy(army.filter(b => b.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://botbattlr-hellen-cherotich.vercel.app/`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setArmy(data);
        } else {
          throw new Error('Response is not in JSON format');
        }
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div>
      <BotCollection enlistBot={enlistBot} bots={army} />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
