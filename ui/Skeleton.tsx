import { CSSProperties } from 'react';

interface SkeletonProps {
  style: CSSProperties;
}

export default function Skeleton({ style }: SkeletonProps) {
  return (
    <div
      style={{
        ...style, //
        backgroundColor: '#cccccc',
        color: '#cccccc',
        overflow: 'hidden',
        borderRadius: style.height ? style.height : '1rem',
      }}
    >
      1
    </div>
  );
}
