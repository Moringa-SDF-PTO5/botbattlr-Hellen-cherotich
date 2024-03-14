import React from 'react';
import BotCard from './BotCard';


const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id}>
          <BotCard key={bot} onRemove ={()=>releaseBot(bot)} />
          <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;


