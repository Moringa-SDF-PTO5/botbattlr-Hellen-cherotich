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
      await fetch(`https://http://localhost:3000/bots${botId}`, {
        method: 'DELETE'
      });
      setArmy(army.filter(b => b.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/bots`)
      .then(response => response.json())
      .then(data => setArmy(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div>
      <BotCollection enlistBot={enlistBot} bots={army} />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
