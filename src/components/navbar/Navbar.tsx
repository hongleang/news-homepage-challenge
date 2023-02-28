import { useEffect } from 'react';

import LogoIcon from '../../assets/images/logo.svg';
import MenuIcon from '../../assets/images/icon-menu.svg'

import navigations from '../../data/navigations';
import { useHandleResize } from '../../hooks/useHandleResize';
import { useHandleSidebar } from '../../hooks/useHandleSidebar';

import { motion } from 'framer-motion';

import './Navbar.css'
import NavSidebar from "./NavSideBar";


export default function Navbar() {
  const { mobileSize } = useHandleResize();

  const { openSidebar, closeSidebar, sidebarOpen } = useHandleSidebar();

  useEffect(() => {
    if (!mobileSize) {
      closeSidebar();
    }
  }, [mobileSize])


  return (
    <>
      <nav>
        <div className="navbar container" style={mobileSize ? {
          paddingRight: 20,
          paddingLeft: 20
        } : {}}>
          <img src={LogoIcon} alt="logo" />

          {!mobileSize && <ul className="nav-links">
            {navigations.map(({ name, to }) => (
              <li key={name}><a href={to} className="link">{name}</a></li>
            ))}
          </ul>}

          {mobileSize && <div>
            <motion.img src={MenuIcon} alt="MenuIcon" style={{ cursor: 'pointer' }} onClick={openSidebar} whileHover={{ scale: 1.2 }} />
          </div>}
        </div>
      </nav>
      {mobileSize && <NavSidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />}
    </>
  )
}
