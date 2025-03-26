import React from 'react';

interface CardProps {
  name: string;
}

export default function Card({ name }: CardProps) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2>{name}</h2>
    </div>
  );
} 