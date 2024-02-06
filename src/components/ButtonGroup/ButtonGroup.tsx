import React from 'react';
import './ButtonGroup.scss'; // Assuming you will name your Sass file ButtonGroup.scss

interface ButtonGroupProps {
  buttons: Array<{
    id: number | string;
    label: string;
    isActive?: boolean;
  }>;
  onButtonClick: (id: number | string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, onButtonClick }) => {
  return (
    <div className="button-group">
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
