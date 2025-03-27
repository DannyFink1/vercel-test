import React from 'react';

interface CardProps {
  name: string;
  title: string;
}

export default function Card({ name, title }: CardProps) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2>{name}</h2>
      <h1>{title}</h1>
    </div>
  );
} 