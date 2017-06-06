import cx from 'classnames';
import React from 'react';

const Icon = (props) => {
  const { className } = props;
  const classes = cx('icon-wrapper', className);

  return (
    <span className={classes} style={props.style}>
      <svg className="icon">
        <use xlinkHref={`#icon-${props.icon}`} />
      </svg>
    </span>
  );
};

Icon.displayName = 'RhinoIcon';

Icon.propTypes = {
  className: React.PropTypes.string,
  icon: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
