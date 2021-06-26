/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import Sticky from 'react-stickynode';

import Footer from './Footer/Footer';
import Header from './Header/Header';

Layout.propTypes = {
  children: oneOfType([arrayOf(node), node])
};

function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      console.log('the component is sticky');
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      console.log('the component in the original position');
      setIsSticky(false);
    }
  };
  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unStick'}`} />
      </Sticky>

      <main id="content" sx={{ variant: 'layout.main' }}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
