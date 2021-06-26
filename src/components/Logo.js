import { string } from 'prop-types';
import React from 'react';
import { Image } from 'theme-ui';
import { Link } from './Link';

Logo.propTypes = {
  src: string
};
function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{ variant: 'links.log', display: 'flex', cursor: 'pointer', mr: 15 }}
      {...rest}>
      <Image src={src} alt="Nextjs Landing Page Logo" />
    </Link>
  );
}

export default Logo;
