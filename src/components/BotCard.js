import React, { useState } from 'react';

const BotCard = ({ bot, onEnlist }) => {
  const [enlisted, setEnlisted] = useState(false);

  const handleEnlist = () => {
    setEnlisted(true);
    if (onEnlist) {
      onEnlist(bot);
    }
  };

  // Prop validation
  if (!bot || typeof bot !== 'object') {
    return <div>No bot data available</div>;
  }

  const { name, avatar_url, health, damage, armor, bot_class, catchphrase } = bot;

  return (
    <div className="bot-card">
      <h2>{name}</h2>
      <img src={avatar_url} alt={name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>
      {!enlisted && <button onClick={handleEnlist}>Enlist</button>}
    </div>
  );
};

export default BotCard;
