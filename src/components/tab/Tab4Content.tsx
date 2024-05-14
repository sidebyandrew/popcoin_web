'use client';
import { ThemeSwitch } from '@/components/theme-switch';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from "react";

interface Task {
  id: number;
  introduction: string;
  steps?: string;
  imageUrl: string;
  points: number;
}

const tasks: Task[] = [
  {
    id: 1,
    introduction: 'Participate in 10 challenges',
    steps: '1/10',
    imageUrl: '/icon/Earn Points 1@3x.png',
    points: 1000,
  },

  {
    id: 2,
    introduction: 'Participate in 10 PvP battles',
    steps: '1/10',
    imageUrl: '/icon/Earn Points 2@3x.png',
    points: 1000,
  },

  {
    id: 3,
    introduction: 'Join our Discord server',
    imageUrl: '/icon/Earn Points 3@3x.png',
    points: 3000,
  },

  {
    id: 4,
    introduction: 'Follow us on X (Twitter)',
    imageUrl: '/icon/Earn Points 4@3x.png',
    points: 5000,
  },

  {
    id: 5,
    introduction: 'Join our channel',
    imageUrl: '/icon/Earn Points 5@3x.png',
    points: 5000,
  },
];



const Tab4Content: React.FC = () => {
  const [workWindow, setWorkWindows] = React.useState('no');
  const [scrollPosition, setScrollPosition] = React.useState('');
  const [audio, setAudio] = React.useState('');

  function eventGo() {
    if (window) {
      setWorkWindows(window.name);
      var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

      setAudio(JSON.stringify(audioCtx));

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
    </div>
  );
};

export default Tab4Content;

