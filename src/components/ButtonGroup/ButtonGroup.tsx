import React from 'react';
import './ButtonGroup.scss'; // Assuming you will name your Sass file ButtonGroup.scss

interface ButtonGroupProps {
  buttons: Array<{
    id: number | string;
    label: string;
    isActive?: boolean;
  }>;
  onButtonClick: (id: number | string) => void;
  size?: 'sm' | 'md' | 'lg';
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, onButtonClick, size = 'sm' }) => {
  return (
    <div className={`button-group ${size}`}>
      {buttons.map((button) => (
        <button
        key={button.id}
        className={`button ${button.isActive ? 'active' : ''}`}
        onClick={() => onButtonClick(button.id)}
      >
        {button.label}
      </button>

      ))}
    </div>
  );
};

export default ButtonGroup;
