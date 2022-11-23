import React from "react";

interface Props {
  width: number | string | undefined;
  color: string;
}

function CopyIcon(props: Props) {
  const { width, color } = props;

  return (
    <svg
      width={width}
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3334 17.1993V22.7993C21.3334 27.466 19.4667 29.3327 14.8 29.3327H9.20002C4.53335 29.3327 2.66669 27.466 2.66669 22.7993V17.1993C2.66669 12.5327 4.53335 10.666 9.20002 10.666H14.8C19.4667 10.666 21.3334 12.5327 21.3334 17.1993Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.3334 9.19935V14.7993C29.3334 19.466 27.4667 21.3327 22.8 21.3327H21.3334V17.1993C21.3334 12.5327 19.4667 10.666 14.8 10.666H10.6667V9.19935C10.6667 4.53268 12.5334 2.66602 17.2 2.66602H22.8C27.4667 2.66602 29.3334 4.53268 29.3334 9.19935Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default CopyIcon;
