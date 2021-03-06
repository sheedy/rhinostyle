import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Icon } from '../components';

const Close = (props) => {
  const { className, onClick, ...opts } = props;
  const classes = cx('button--reset close', className);

  return (
    <button type="button" className={classes} onClick={onClick} {...opts} aria-label="Close"><Icon icon="close" /></button>
  );
};

Close.displayName = 'RhinoClose';

Close.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Close.defaultProps = {
  onClick:  () => {},
};

export default Close;
