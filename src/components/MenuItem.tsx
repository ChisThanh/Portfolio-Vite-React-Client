import React from "react";
import { Link } from "react-router-dom";

const MenuItem = React.memo(({ menu, isSelected, onClick }: any) => {
  return (
    <li
      className={`border rounded-md hover:bg-slate-400 ${
        isSelected ? "bg-slate-400" : ""
      }`}
      onClick={() => onClick(menu.link)}
    >
      <Link to={menu.link} className="flex items-center p-2 rounded-lg group">
        <img
          src={menu.icon}
          alt={menu.title}
          className="w-5 h-5  transition duration-75"
        />
        <span className="ms-3">{menu.title}</span>
      </Link>
    </li>
  );
});

export default MenuItem;
