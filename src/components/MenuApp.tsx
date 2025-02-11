import React, { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router";
import { useLayout } from "../hooks/LayoutProvider";
import MenuItem from "./MenuItem";
import  home  from "../stores/svgs/home.svg";
import  user  from "../stores/svgs/user.svg";
import  projects  from "../stores/svgs/projects.svg";
import  certificate  from "../stores/svgs/certificate.svg";

const menus = [
  {
    id: 1,
    title: "Home",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Summary",
    icon: user,
    link: "/summary",
  },
  {
    id: 3,
    title: "Projects",
    icon: projects,
    link: "/projects",
  },
  {
    id: 4,
    title: "Certificate",
    icon: certificate,
    link: "/certificate",
  },
];

const MenuList = ({ menus, menuSelected, setMenuSelected }: any) => (
  <ul className="space-y-2 font-medium">
    {menus.map((menu: any) => (
      <MenuItem
        key={menu.id}
        menu={menu}
        isSelected={menuSelected === menu.link}
        onClick={setMenuSelected}
      />
    ))}
  </ul>
);

const MenuApp: React.FC = () => {
  const { isOpen, menuSelected, setMenuSelected } = useLayout();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const sidebarClasses = useMemo(
    () =>
      `fixed top-0 left-0 z-40 w-52 h-screen pt-20 transition-transform shadow-md ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`,
    [isOpen]
  );

  useEffect(() => {
    if (menuSelected !== pathname) {
      setMenuSelected(pathname);
    }
  }, [pathname, menuSelected, setMenuSelected]);

  return (
    <aside ref={sidebarRef} id="logo-sidebar" className={sidebarClasses}>
      <div className="h-full px-3 pb-4 overflow-y-auto ">
        <MenuList
          menus={menus}
          menuSelected={menuSelected}
          setMenuSelected={setMenuSelected}
        />
      </div>
    </aside>
  );
};

export default MenuApp;
