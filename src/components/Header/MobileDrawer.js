import React, { useState } from 'react';
import { Box } from 'theme-ui';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaGithubAlt, FaDribbble } from 'react-icons/fa';
import Scrollbars from 'react-custom-scrollbars';
import { Link } from 'react-scroll';

import menuItems from './header.data';

import Drawer from 'components/Drawer';

const social = [
  {
    path: '/',
    icon: <FaFacebookF />
  },
  {
    path: '/',
    icon: <FaTwitter />
  },
  {
    path: '/',
    icon: <FaGithubAlt />
  },
  {
    path: '/',
    icon: <FaDribbble />
  }
];

function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      drawerStyle={styles.drawer}
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen(!isDrawerOpen)}
      closeButton={<IoMdClose size="24px" color="#000" />}
      closeBtnStyle={styles.close}>
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map((menuItem, i) => {
              return (
                <Link
                  key={i}
                  activeClass="active"
                  to={menuItem.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  {menuItem.label}
                </Link>
              );
            })}
          </Box>
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map((socialItem, i) => {
                return (
                  <Box key={i} as="span" sx={styles.social.icon}>
                    <Link to={socialItem.path}>{socialItem.icon}</Link>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
}

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer'
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px'
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary'
      },
      '&.active': {
        color: 'secondary'
      }
    }
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0'
      },
      '&:hover': {
        color: 'secondary'
      }
    }
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  }
};
export default MobileDrawer;