"use client"
import { useState, useEffect } from 'react';
import NavItem from "./navitem";
import Nvbr from "../ui/navbar-ui";

type xyz = {
  Name: string,
  link: string,
};

type uis = { Name: string, link: string, Dropdown: xyz[] | null };

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the screen width as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`bg-black w-screen ${isMobile ? 'md:hidden' : 'md:flex md:flex-col md:items-center md:justify-center'} z-50 sticky top-0`}>
      {isMobile && (
        <div className="flex justify-between items-center p-1">
          <button
            className="text-white focus:outline-none"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      )}
      {isMobile && isMenuOpen && (
        <div className="flex flex-col gap-2 p-2">
          {Nvbr.map((ele: uis) => {
            return (
              <NavItem key={ele.Name} ItemName={ele.Name} link={ele.link} Dropdown={ele.Dropdown} />
            );
          })}
        </div>
      )}
      {!isMobile && (
        <div className={`flex justify-between items-center p-1`}>
          <div className={`flex gap-5 ${isMobile ? 'hidden md:flex' : 'md:flex'}`}>
            {Nvbr.map((ele: uis) => {
              return (
                <NavItem key={ele.Name} ItemName={ele.Name} link={ele.link} Dropdown={ele.Dropdown} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
