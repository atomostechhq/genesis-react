import React, { ReactNode, useCallback } from "react";
import { cn } from "../utils";
import { Link, useLocation } from "react-router-dom";
import Divider from "./Divider";

interface SidebarProps {
  children: React.ReactNode;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  scroll?: boolean;
  navItems?: {
    label: string;
    items: {
      label: string;
      href: string;
      icon?: React.ReactElement;
    }[];
  }[];
}

interface SidebarHeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  children: ReactNode;
}

interface SidebarMenuProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  scroll?: boolean;
  navItems?: {
    label: string;
    items: {
      label: string;
      href: string;
      icon?: React.ReactElement;
    }[];
  }[];
}

interface FooterProps {
  children: React.ReactNode;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  navItems?: {
    label: string;
    items: {
      label: string;
      href: string;
      icon?: React.ReactElement;
    }[];
  }[];
}

// Sidebar component
const Sidebar: React.FC<SidebarProps> & {
  Header: React.FC<SidebarHeaderProps>;
  Menu: React.FC<SidebarMenuProps>;
  Footer: React.FC<FooterProps>;
} = ({ children, collapsed, setCollapsed }) => {
  const handleMouseEnter = useCallback(
    () => setCollapsed(true),
    [setCollapsed]
  );
  const handleMouseLeave = useCallback(
    () => setCollapsed(false),
    [setCollapsed]
  );
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "border border-gray-200 shadow-sm relative flex flex-col min-h-screen transition-all duration-300 ease-in-out cursor-pointer",
        !collapsed ? "w-[80px] py-[21px] px-[17px]" : "w-[308px] py-[22px] px-6"
      )}
    >
      <div className="">{children}</div>
    </div>
  );
};

// SidebarHeader component
const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  collapsed,
  setCollapsed,
  children,
}) => {
  return (
    <div
      className={cn({
        "z-20": true,
      })}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="whitespace-nowrap">{children}</span>
      </div>
    </div>
  );
};

// SidebarMenu component
const SidebarMenu: React.FC<SidebarMenuProps> = ({
  collapsed,
  navItems,
  scroll = false,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav
      aria-label="Sidebar navigation"
      className={`max-h-[60vh] ${scroll && "overflow-y-auto customScroll"}`}
    >
      <ul className="my-2 flex flex-col gap-2 items-stretch">
        {navItems?.map((parentItem, parentIndex) => (
          <li
            key={parentIndex}
            className="flex flex-col gap-3 mb-1 whitespace-nowrap overflow-hidden"
          >
            <p
              className={cn({
                "text-[14px] text-gray-500": true,
                "w-[37px] text-ellipsis invisible whitespace-nowrap overflow-hidden":
                  !collapsed,
              })}
            >
              {parentItem.label}
            </p>

            <ul>
              {parentItem?.items.map((item, index) => (
                <li key={index}>
                  <Link
                    className={cn({
                      "hover:bg-gray-100 px-3 py-2 flex items-center mb-[6px] cursor-pointer rounded-md transition-colors duration-300 font-semibold whitespace-nowrap overflow-hidden":
                        true,
                      "text-white bg-primary-600": currentPath === item.href,
                      "text-gray-700": currentPath !== item.href,
                      "hover:bg-primary-600": currentPath === item.href,
                    })}
                    to={item.href} // React Router DOM `to` prop
                  >
                    <div
                      className={`flex items-center gap-2 whitespace-nowrap`}
                    >
                      <span className="text-text-sm"> {item.icon}</span>
                      <span className={cn(!collapsed ? "opacity-0" : "")}>
                        {item.label}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Footer component
const Footer: React.FC<FooterProps> = ({
  children,
  setCollapsed,
  collapsed,
  navItems,
}) => {
  const location = useLocation(); // React Router hook to get the current path
  const currentPath = location.pathname;

  return (
    <div
      className={cn({
        "absolute bottom-0 max-h-[230px] overflow-auto bg-white z-10 py-3 w-[85%]":
          true,
        "w-[55%]": !collapsed,
      })}
      onClick={() => setCollapsed(true)}
    >
      {collapsed && (
        <div className="shadow-md">
          <Divider />
        </div>
      )}
      {navItems && navItems.length > 0 && (
        <nav className="flex-grow w-full">
          <ul className="my-2 flex flex-col gap-2 items-stretch">
            {navItems?.map((parentItem, parentIndex) => (
              <li
                key={parentIndex}
                className="flex flex-col gap-3 mb-1 whitespace-nowrap overflow-hidden"
              >
                <p
                  className={cn({
                    "text-[14px] text-gray-500": true,
                    "w-[37px] text-ellipsis text-white whitespace-nowrap overflow-hidden":
                      !collapsed,
                  })}
                >
                  {parentItem.label}
                </p>
                <ul>
                  {parentItem?.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        className={cn({
                          "hover:bg-gray-100 px-3 py-2 flex items-center mb-[6px] cursor-pointer rounded-md transition-colors duration-300 font-semibold whitespace-nowrap overflow-hidden":
                            true,
                          "text-white bg-primary-600":
                            currentPath === item.href,
                          "text-gray-700": currentPath !== item.href,
                          "hover:bg-primary-600": currentPath === item.href,
                        })}
                        to={item.href} // React Router DOM's `to` prop
                      >
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <span className="text-text-sm">{item.icon}</span>
                          <span className={cn(!collapsed ? "opacity-0" : "")}>
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {children}
    </div>
  );
};

Sidebar.Header = SidebarHeader;
Sidebar.Menu = SidebarMenu;
Sidebar.Footer = Footer;

export default Sidebar;
