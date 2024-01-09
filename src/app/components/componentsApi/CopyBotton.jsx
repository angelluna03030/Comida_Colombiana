import React from 'react';
import copy from 'clipboard-copy';

const CopyButton = ({ textToCopy }) => (
  <button onClick={() => copy(textToCopy)}>
    Copiar al Portapapeles
  </button>
);

export default CopyButton;
