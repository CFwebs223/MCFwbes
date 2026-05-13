'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<{ audioCtx: AudioContext; gainNode: GainNode } | null>(null);

  const initAudio = useCallback(() => {
    if (audioRef.current) return;

    const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();

    // Generate pink noise (ocean ambience)
    const bufferSize = audioCtx.sampleRate; // 1 second buffer (half of before)
    const noiseBuffer = audioCtx.createBuffer(2, bufferSize, audioCtx.sampleRate);

    for (let channel = 0; channel < 2; channel++) {
      const output = noiseBuffer.getChannelData(channel);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.015;
        b6 = white * 0.115926;
      }
    }

    const source = audioCtx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;

    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0;
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    source.start();

    audioRef.current = { audioCtx, gainNode };
  }, []);

  const toggleSound = () => {
    initAudio();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.gainNode.gain.linearRampToValueAtTime(0, audio.audioCtx.currentTime + 0.5);
    } else {
      audio.audioCtx.resume();
      audio.gainNode.gain.linearRampToValueAtTime(0.8, audio.audioCtx.currentTime + 0.5);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleSound}
      className="flex items-center gap-2 text-white/50 hover:text-white transition-colors hover-target group"
      data-cursor-label={isPlaying ? 'Mute' : 'Sound'}
    >
      <div className="flex items-end gap-[2px] h-3 w-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-[2px] bg-current rounded-full"
            animate={
              isPlaying
                ? { height: ['4px', '12px', '6px', '10px', '4px'] }
                : { height: '4px' }
            }
            transition={{
              duration: 1,
              repeat: isPlaying ? Infinity : 0,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <span className="text-[10px] tracking-[0.15em] uppercase font-medium hidden md:inline">
        {isPlaying ? 'Sound On' : 'Sound Off'}
      </span>
    </button>
  );
}