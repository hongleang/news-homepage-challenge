import { useEffect } from 'react';

import LogoIcon from '../../assets/images/logo.svg';
import MenuIcon from '../../assets/images/icon-menu.svg'
import MenuIconClose from '../../assets/images/icon-menu-close.svg'

import navigations from '../../data/navigations';
import { useHandleResize } from '../../hooks/useHandleResize';
import { useHandleSidebar } from '../../hooks/useHandleSidebar';

import { motion, Variants } from 'framer-motion';

import './Navbar.css'


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
      {mobileSize && <NavSidbar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />}
    </>
  )
}

const NavSidbar = ({ closeSidebar, sidebarOpen }: { closeSidebar: () => void, sidebarOpen: boolean }) => {
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      y: 200,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, x: 200, y: 200, transition: { duration: 0.3 } }
  };
  const sideBarVariant: Variants = {
    open: {
      display: "block",
      x: 0,
      transition: { duration: 0.4 }
    },
    closed: {
      x: 200, transition: { duration: .4 }, transitionEnd: {
        display: "none",
      }
    }
  }

  const wrapper = {
    open: {
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    },
    closed: {
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  }

  return (
    <motion.div initial={false} animate={sidebarOpen ? "open" : "closed"}>
      <motion.div variants={{
        open: { opacity: .65 },
        closed: { opacity: 0 }
      }}
        className="backdrop"
      >

      </motion.div>
      <motion.img
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 }
        }}
        whileHover={{ scale: .92 }}
        className="menu-close"
        src={MenuIconClose}
        alt="MenuIconClose"
        onClick={closeSidebar}
      />
      <motion.div variants={sideBarVariant} className="nav-sidebar">
        <motion.ul variants={wrapper} className="sidebar-nav-links">
          {navigations.map(({ name, to }) => (
            <motion.li variants={itemVariants} key={name}><a href={to} className="link">{name}</a></motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}
