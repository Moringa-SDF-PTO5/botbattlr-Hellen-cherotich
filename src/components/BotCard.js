// BotCard.js
import React, { useState } from 'react';
import Bot from './Bot'
const BotCard = ({ bot, onEnlist }) => {
  const [enlisted, setEnlisted] = useState(false);

  const handleEnlist = () => {
    setEnlisted(true);
    if (onEnlist) {
      onEnlist(bot);
    }
  };
  if (!bot) {
    return <div>No bot data available</div>;
  }
  const { name, avatar_url, health, damage, armor, bot_class, catchphrase } = bot;

  return (
    <div className="bot-card">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      {!enlisted && <button onClick={handleEnlist}>Enlist</button>}
    </div>
  );
};

export default BotCard;
