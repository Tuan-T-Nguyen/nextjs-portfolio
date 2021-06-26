import { arrayOf, node, oneOfType, string } from 'prop-types';
import { Link as A } from 'theme-ui';

Link.propTypes = {
  path: string,
  label: string,
  children: oneOfType([arrayOf(node), node])
};
Link.defaultProps = {
  path: '/',
  label: ''
};
export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children || label}
    </A>
  );
}
