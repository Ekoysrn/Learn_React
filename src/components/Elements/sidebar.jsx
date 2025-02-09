import { useLocation } from 'react-router';
import SidebarList from './SidebarList';
import Products from './../../pages/Products';

const side = ["Today", "Tomorrow", "This Week", "Planned", "Completed", "Tasks", "Products"]

const Sidebar = ({hidden}) => {
  
  const location = useLocation()

  return (
    <aside className={`md:w-64 md:block w-full dark:bg-black dark:text-slate-50 bg-white shadow-md ${hidden}`}>
    <nav className="mt-4">
      <ul>
        {side.map((item, index) => 
          <SidebarList key={index} title={item} active={location.pathname === `/${item}` ? 'bg-gray-100 dark:bg-gray-800' : '' } />
        )} 
      </ul>
    </nav>
    <div className="p-4 w-64 absolute bottom-10">
      <button className="w-full md:block hidden bg-sky-500 text-white py-2 rounded hover:bg-sky-600">
        Buat Proyek
      </button>
    </div>
  </aside>
  )
}

export default Sidebar;