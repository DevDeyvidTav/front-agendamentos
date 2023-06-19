import React from 'react';


interface ProgressBarProps {
    currentStep: number;
  }
  export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
    return (
      <div className="flex items-center">
        <div className={`w-4 h-4 rounded-full ${currentStep >= 1 ? 'bg-primary' : 'bg-gray-300'}`}></div>
        <div className={`w-4 h-4 rounded-full mx-1 ${currentStep >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
        <div className={`w-4 h-4 rounded-full ${currentStep >= 3 ? 'bg-primary' : 'bg-gray-300'}`}></div>
      </div>
    );
  };

