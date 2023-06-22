import { FaCalendarAlt, FaList, FaUser, FaCog } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
export function Aside() {
  const router = useRouter()
  const {pathname} = router
  return (
    <div className="h-full w-1/4 pt-12 bg-primary">
      <ul className="text-white p-4">
        <li>
          <Link href="create_schedule" className={`${pathname === '/create_schedule' ? 'bg-white text-primary' : ''} flex items-center gap-2 p-2 rounded hover:bg-principal hover:text-primary`}>
            <FaCalendarAlt className="text-xl" />
            <span>Agendar</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className={`${pathname === '/dashboard' ? 'bg-white text-primary' : ''} flex items-center gap-2 p-2 rounded hover:bg-principal hover:text-primary`}>
            <FaList className="text-xl" />
            <span>Agendamentos</span>
          </Link>
        </li>
        <li>
          <Link href="/user" className={`${pathname === '/user' ? 'bg-white text-primary' : ''} flex items-center gap-2 p-2 rounded hover:bg-principal hover:text-primary`}>
            <FaUser className="text-xl" />
            <span>Perfil</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-2 p-2 rounded hover:bg-white hover:text-primary">
            <FaCog className="text-xl" />
            <span>Configurações</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}