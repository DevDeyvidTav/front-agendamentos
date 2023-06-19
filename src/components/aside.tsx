import { FaCalendarAlt, FaList, FaUser, FaCog } from 'react-icons/fa';

export function Aside() {
  return (
    <div className="h-full w-1/4 bg-primary">
      <ul className="text-white p-4">
        <li>
          <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-white hover:text-primary">
            <FaCalendarAlt className="text-xl" />
            <span>Agendar</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-white hover:text-primary">
            <FaList className="text-xl" />
            <span>Agendamentos</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-white hover:text-primary">
            <FaUser className="text-xl" />
            <span>Perfil</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-white hover:text-primary">
            <FaCog className="text-xl" />
            <span>Configurações</span>
          </a>
        </li>
      </ul>
    </div>
  );
}