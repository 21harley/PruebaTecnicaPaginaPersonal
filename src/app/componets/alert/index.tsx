
import React, { useEffect, useState } from 'react';
import { AlertProps } from '@/app/interface';

export default function Alert({
  text,
  color = '#000',
  backgroundColor = '#fff',
  time = 3000,
  position = 'top',
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  if (!visible) return null;

  const alertStyle: React.CSSProperties = {
    position: 'fixed',
    zIndex: 1000,
    padding: '1rem',
    margin: '1rem',
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: '5px',
    transition: 'opacity 0.5s ease-in-out',
  };

  switch (position) {
    case 'top':
      alertStyle.top = '50px';
      alertStyle.left = '50%';
      alertStyle.transform = 'translateX(-50%)';
      break;
    case 'bottom':
      alertStyle.bottom = '100px';
      alertStyle.left = '50%';
      alertStyle.transform = 'translateX(-50%)';
      break;
    case 'left':
      alertStyle.top = '100px';
      alertStyle.left = '0px';
      alertStyle.transform = 'translateY(-50%)';
      break;
    case 'right':
      alertStyle.top = '100px';
      alertStyle.right = '0px';
      alertStyle.transform = 'translateY(-50%)';
      break;
    case 'center':
      alertStyle.top = '50%';
      alertStyle.left = '50%';
      alertStyle.transform = 'translate(-50%, -50%)';
      break;
    default:
      alertStyle.top = '100px';
      alertStyle.left = '50%';
      alertStyle.transform = 'translateX(-50%)';
  }

  return (
    <div style={alertStyle}>
      {text}
    </div>
  );
}
