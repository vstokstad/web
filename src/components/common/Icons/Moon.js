import React from 'react';

const Moon = ({ width = 16, height = 16, }) => {

const  color = '#000';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color}
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-moon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
}

export default Moon;