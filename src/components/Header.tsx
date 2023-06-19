import { signOut } from '@/services/auth';
import { FaBell, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';

export function Header() {
  return (
    <div className="fixed w-full top-0 left-0 right-0 bg-primary text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button className="bg-transparent border-none">
          <span className="text-2xl font-bold">Agenda aí</span>
        </button>
      </div>
      <div className="flex items-center">
        <button className="mr-4 bg-transparent border-none">
          <FaBell className="text-xl" />
        </button>
        <button className="bg-transparent border-none">
          <FaSignOutAlt 
          onClick={signOut}
          className="text-xl" />
        </button>
      </div>
    </div>
  );
}
