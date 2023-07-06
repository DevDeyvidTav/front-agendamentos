import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { DialogComponent } from './Dialog';
import { deleteSchedule } from '@/services/schedules';


interface CardSchedulingProps {
  name: string;
  phone: string;
  time: string;
  id: string;
  date: Date | string;
}

export const CardScheduling: React.FC<CardSchedulingProps> = ({ name, phone, time, id, date }) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
  async function handleDelete(){
    await deleteSchedule(id)
    window.location.reload()
  }
  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className="bg-white p-4 rounded w-4/5 shadow">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="mb-2">Telefone: {phone}</p>
      <p className="mb-4">Horário: {time}</p>
      <div className="flex justify-end">
        <button 
        onClick={openModal}
        className="bg-transparent border-none">
          <FaEdit className="text-primary text-xl" />
        </button>
        <button className="bg-transparent border-none" onClick={handleDelete}>
          <FaTrash className="text-red-500 text-xl" />
        </button>
      </div>
      <DialogComponent 
      id={id}
      date={date}
      isOpen={isOpen} closeModal={closeModal}/>
    </div>
  );
};

