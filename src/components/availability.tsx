import React, { useState } from 'react';

interface AvailabilityProps {
  availableHours: number[];
  onHourSelect: (hour: number) => void;
}

export const Availability: React.FC<AvailabilityProps> = ({ availableHours, onHourSelect }) => {
  const [selectedHour, setSelectedHour] = useState<number | null>(null);

  const handleHourSelect = (hour: number) => {
    setSelectedHour(hour);
    onHourSelect(hour);
  };

  return (
    <div>
      <h2>Disponibilidade de horários:</h2>
      <ul className="flex space-x-2">
        {availableHours.map((hour) => (
          <li
            key={hour}
            className={`cursor-pointer rounded-full px-4 py-2 ${
              selectedHour === hour ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleHourSelect(hour)}
          >
            {`${hour}:00 - ${hour + 1}:00`}
          </li>
        ))}
      </ul>
    </div>
  );
};

