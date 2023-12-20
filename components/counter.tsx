"use client"

import React, { useState, useEffect } from 'react';

interface CounterProps {
  targetNumber: number;
}

const Counter: React.FC<CounterProps> = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [count, targetNumber]);

  return (
    <div>
      {count}
    </div>
  );
};

export default Counter;