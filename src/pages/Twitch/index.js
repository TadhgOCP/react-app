import { TwitchEmbed } from 'react-twitch-embed';
import React, { useRef } from 'react';

export function Twitch() {

  const embed = useRef();

  const handleReady = (e) => {
    embed.current = e;
  };

  return (
    <TwitchEmbed channel="slimeirl" autoplay muted withChat darkMode={true} hideControls onVideoReady={handleReady} />
  );

}