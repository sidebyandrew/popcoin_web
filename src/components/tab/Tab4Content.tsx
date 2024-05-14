'use client';
import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";


const Tab4Content: React.FC = () => {
  const [workWindow, setWorkWindows] = React.useState('???');
  const [scrollPosition, setScrollPosition] = React.useState('');
  const [audio, setAudio] = React.useState('');
  const [blue, setBlue] = React.useState('');
  const [loca, setLoca] = React.useState('');
  const [deviceOrientationEvent, setDeviceOrientationEvent] = React.useState('');
  const [deviceMotionEvent, setDeviceMotionEvent] = React.useState('');

  async function eventGo() {
    if (window) {
      setWorkWindows(window.name);
      // var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      // setAudio(JSON.stringify(audioCtx));
      // const options = {
      //   acceptAllDevices: true
      // };
      // // @ts-ignore
      // const device = await navigator.bluetooth.requestDevice(options);
      // console.log('Device:', device);
      // setBlue(device.id);
      setAudio("No audio");
    }

    if  (navigator){
      navigator.geolocation?.getCurrentPosition(showPosition)
    }

    if (window.DeviceOrientationEvent) {
      setDeviceOrientationEvent("不监听 deviceorientation")
      window.addEventListener('deviceorientation', function(event) {
        const alpha = event.alpha; // Rotation around z-axis
        const beta = event.beta;   // Rotation around x-axis
        const gamma = event.gamma; // Rotation around y-axis

        setDeviceOrientationEvent(`Alpha (z-axis): ${alpha?.toFixed(2)}°, Beta (x-axis): ${beta?.toFixed(2)}°, Gamma (y-axis): ${gamma?.toFixed(2)}°`);

      });
    } else {
      setDeviceOrientationEvent(`Not have DeviceOrientationEvent!!!!!!`);
    }

    if (window.DeviceMotionEvent) {
      setDeviceMotionEvent("不监听 devicemotion")
      window.addEventListener('devicemotion', function(event) {
        const accX = event.acceleration?.x; // Acceleration along x-axis
        const accY = event.acceleration?.y; // Acceleration along y-axis
        const accZ = event.acceleration?.z; // Acceleration along z-axis

        const rotationRateAlpha = event.rotationRate?.alpha; // Rotation rate around z-axis
        const rotationRateBeta = event.rotationRate?.beta;   // Rotation rate around x-axis
        const rotationRateGamma = event.rotationRate?.gamma; // Rotation rate around y-axis

        setDeviceMotionEvent(`Acceleration - X: ${accX}, Y: ${accY}, Z: ${accZ}` +`Rotation Rate - Alpha: ${rotationRateAlpha}, Beta: ${rotationRateBeta}, Gamma: ${rotationRateGamma}` )
      });
    } else {
      setDeviceMotionEvent("DeviceMotionEvent is not supported by this browser.");
    }



  }

  function showPosition(position:any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    setLoca(""+latitude+"-"+longitude+"-"+accuracy);
  }
  useEffect(() => {
    eventGo();
  }, []);

  async function processOnClick() {

    try {


      // Get access to the microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Create an audio context
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(stream);

      // Create an analyser node
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;

      // Connect the source to the analyser
      source.connect(analyser);

      // Create a buffer to store the audio data
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      // Function to check for sound
      const checkForSound = () => {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const average = sum / bufferLength;
        const status = average > 10 ? 'Sound detected' : 'No sound detected';

        setAudio(`Microphone status: ${status}`)
        requestAnimationFrame(checkForSound);
      };

      // Start checking for sound
      checkForSound();
      setAudio('Microphone status: Listening...')
    } catch (err) {
      console.error('Error accessing the microphone', err);
      setAudio('ERROR Microphone status: Error accessing the microphone')
    }
  }

  return (
    <div className={"p-6"}>
      <div>Hello Air</div>
      <div>Window {workWindow}</div>
      <div> scrollPosition = {scrollPosition}</div>
      <div> audio = {audio}</div>
      <div> bluetooth = {blue}</div>
      <div> location = {loca}</div>
      <div> deviceOrientationEvent = {deviceOrientationEvent}</div>
      <div> DeviceMotionEvent = {deviceMotionEvent}</div>

      <Button color="primary" onClick={processOnClick}>
        录音测试
      </Button>
    </div>
  );
};

export default Tab4Content;

