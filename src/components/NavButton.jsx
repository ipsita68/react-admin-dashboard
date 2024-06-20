import React, { useState } from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from './Charts/contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  const { currentMode, currentColor } = useStateContext();
  const [isHovered, setIsHovered] = useState(false);

  // Determine if dark mode and black theme are active
  const isDarkAndBlack = currentMode === 'Dark' && currentColor === '#000000';

  // Handle hover state changes
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className={`relative text-xl rounded-full p-3 ${isHovered ? 'bg-white' : 'hover:bg-light-gray'} 
                   ${isDarkAndBlack ? 'bg-blue' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {React.cloneElement(icon, { 
          className: isHovered ? 'text-black' : isDarkAndBlack ? 'text-white' : '', 
        })}
      </button>
    </TooltipComponent>
  );
};

export default NavButton;
