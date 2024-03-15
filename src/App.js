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
      await fetch(`https://vercel.com/my-team-8702db68/botbattlr-hellen-cherotich/7oDF3ueJz3hyj7QwPqcbE8sCtkH3/${botId}`, {
        method: 'DELETE'
      });
      setArmy(army.filter(b => b.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://vercel.com/my-team-8702db68/botbattlr-hellen-cherotich/7oDF3ueJz3hyj7QwPqcbE8sCtkH3`);
        const data = await response.json();
        setArmy(data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchData(`https://vercel.com/my-team-8702db68/botbattlr-hellen-cherotich/7oDF3ueJz3hyj7QwPqcbE8sCtkH3`);
  }, []);

  return (
    <div>
      <BotCollection enlistBot={enlistBot} bots={army} />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
