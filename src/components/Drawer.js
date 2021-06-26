import { arrayOf, bool, element, func, node, oneOfType, string } from 'prop-types';
import React from 'react';
import RcDrawer from 'rc-drawer';
import { Box } from '@theme-ui/components';

Drawer.propTypes = {
  width: string,
  placement: string,
  className: string,
  children: oneOfType([arrayOf(node), node]),
  toggleHandler: func,
  drawerHandler: element,
  open: bool,
  closeButton: element
};
Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
  className: '',
  toggleHandler: null,
  open: false
};

function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <React.Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className || ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={'0.4s'}>
        {closeButton && (
          <Box as="div" onClick={toggleHandler} sx={closeBtnStyle}>
            {closeButton}
          </Box>
        )}
        <Box sx={drawerStyle}>{children}</Box>
      </RcDrawer>
      <Box className="drawer__handler" style={{ display: 'inline-block' }} onClick={toggleHandler}>
        {drawerHandler}
      </Box>
    </React.Fragment>
  );
}

export default Drawer;
