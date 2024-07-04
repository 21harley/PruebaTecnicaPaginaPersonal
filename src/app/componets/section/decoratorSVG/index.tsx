import React, { useEffect, useState } from 'react';
import { DecoratorSVGProps } from '@/app/interface';
import style from './decoratorSVG.module.css';
export default function DecoratorSVG({
  position = 'right',
  dark = false,
}: DecoratorSVGProps) {
  
  const decoratorStyle: React.CSSProperties = {
    position: 'absolute',
    zIndex: 100,
  };
  
  let className = "";

  switch (position) {
    case 'bottom':
      decoratorStyle.bottom = '-100px';
      decoratorStyle.backgroundPosition = 'center';
      className = dark ? style.videBottomDark : style.videBottom;
      
      decoratorStyle.width="100%";
      decoratorStyle.height= "300px";
    break;
    case 'left':
      decoratorStyle.top = '100px';
      decoratorStyle.left = '0px';
      decoratorStyle.transform = 'translateY(-60%)';
      className =  dark ? style.videLeftDark :style.videLeft;
      decoratorStyle.width="200px";
      decoratorStyle.height= "300px";

      break;
    case 'right':
      decoratorStyle.top = '0px';
      decoratorStyle.right = '0px';
      decoratorStyle.transform = 'translateY(-60%)';
      className = dark ? style.videRightDark : style.videRight;

      decoratorStyle.width="200px";
      decoratorStyle.height= "150px";
      decoratorStyle.transform="rotate(180deg)";
      break;
    default:
      decoratorStyle.top = '100px';
      decoratorStyle.left = '50%';
      decoratorStyle.transform = 'translateX(-50%)';
      className = "videBottom";
  }

  return (
    <div style={decoratorStyle} className={className}></div>
  );
}
