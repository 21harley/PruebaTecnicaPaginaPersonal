import { ReactNode } from "react";

export interface SectionProps {
  width: string;
  color: string;
  backgroundColor: string;
  id: string;
  dark: boolean;
  children: ReactNode;
}

export interface AlertProps{
  text: string;
  color?: string;
  backgroundColor?: string;
  time?: number; 
  position?: string;/*'top' | 'bottom' | 'left' | 'right' | 'center' */
}

export interface ButtonProps {
  text: string;
  color: string;
  backgroundColor: string;
  onClick: () => void;
}

export interface DecoratorSVGProps {
  position:  'bottom' | 'left' | 'right';
  dark: boolean;
}

export interface CardProps {
  title: string;
  date: string;
  image: string;
}