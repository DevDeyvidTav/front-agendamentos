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
      <ul className="flex space-x-2 overflow-x-scroll py-10">
        {availableHours.map((hour) => (
          <li
            key={hour}
            className={`cursor-pointer rounded-full text-white px-4 py-2 ${
              selectedHour === hour ? 'bg-primary ' : 'bg-secondary'
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

