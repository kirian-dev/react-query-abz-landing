import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none" 
        stroke="#00bdd3"
        strokeWidth="8"
        r="38"
        strokeDasharray="179.0707812546182 61.690260418206066"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};
