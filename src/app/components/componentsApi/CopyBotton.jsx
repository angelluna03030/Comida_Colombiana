"use client";
import React from 'react';
import copy from 'clipboard-copy';

const CopyButton = ({ textToCopy }) => (
  // biome-ignore lint/a11y/useButtonType: <explanation>
<button onClick={() => copy(textToCopy)}>
    Copiar al Portapapeles
  </button>
);

export default CopyButton;
