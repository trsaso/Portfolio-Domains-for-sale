
import React from 'react';

export interface Quote {
  id: number;
  text: string;
  author: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FlipCardProps {
  mk: string;
  en: string;
  phonetic?: string;
}
