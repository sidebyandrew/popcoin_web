'use client';
import React, { useEffect } from "react";


const Tab4Content: React.FC = () => {
  const [workWindow, setWorkWindows] = React.useState('???');
  const [scrollPosition, setScrollPosition] = React.useState('');
  const [audio, setAudio] = React.useState('');
  const [blue, setBlue] = React.useState('');

  async function eventGo() {
    if (window) {
      setWorkWindows(window.name);
      // var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      // setAudio(JSON.stringify(audioCtx));

      const options = {
        acceptAllDevices: true
      };
      // @ts-ignore
      const device = await navigator.bluetooth.requestDevice(options);
      console.log('Device:', device);
      setBlue(device)


    }
  }


  useEffect(() => {
    eventGo();
  }, []);

  return (
    <div>
      <div>Hello Air</div>
      <div>Window {workWindow}</div>
      <div> scrollPosition = {scrollPosition}</div>
      <div> audio = {audio}</div>
      <div> bluetooth = {blue}</div>
    </div>
  );
};

export default Tab4Content;

