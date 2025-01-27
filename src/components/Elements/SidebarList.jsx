import { NavLink } from "react-router-dom";


const SidebarList = ({ title, active }) => {
  return (
    <NavLink to={`/${title}`} activeclassname="active-link"  >
      <li className={`px-4 py-2 hover:bg-gray-200 dark:hover:bg-slate-800 flex justify-between items-center ${active}`}>
        <div className="flex items-center gap-2">
          <img src={`/images/${title}.png`} alt="" className="size-6" />
          <span>{title}</span>
        </div>
        <span className="text-sm text-gray-500">0m 0</span>
      </li>
    </NavLink>
  );
};

export default SidebarList;
