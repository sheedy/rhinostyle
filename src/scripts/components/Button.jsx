import cx       from 'classnames';
import React    from 'react';
import { Link } from 'react-router';

import { UtilitySystem } from '../components';

class Button extends React.Component {
  static displayName = 'RhinoButton';

  static propTypes = {
    active:      React.PropTypes.bool,
    blankWindow: React.PropTypes.bool,
    block:       React.PropTypes.bool,
    children:    React.PropTypes.node,
    className:   React.PropTypes.string,
    onClick:     React.PropTypes.func,
    disabled:    React.PropTypes.bool,
    iconOnly:    React.PropTypes.bool,
    route:       React.PropTypes.string,
    size:        React.PropTypes.oneOf(['small', 'large']),
    title:       React.PropTypes.string,
    type:        React.PropTypes.oneOf(['default', 'primary', 'secondary', 'outline-primary', 'outline-reversed', 'link', 'danger']),
    url:         React.PropTypes.string,
  };

  static defaultProps = {
    active:   false,
    block:    false,
    disabled: false,
    iconOnly: false,
    onClick:  () => {},
    type:     'default',
  };

  handleClick = () => {
    if (this.props.url) {
      if (!this.props.blankWindow) {
        window.location = this.props.url;
      } else {
        window.open(this.props.url);
      }
    }

    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick();
    }
  }

  render() {
    const { active, blankWindow, block, className, disabled, iconOnly, onClick, route, size, title, type, url, ...opts } = this.props; // eslint-disable-line
    const classes = cx('button', className, {
      'button--default': type === 'default',
      'button--primary': type === 'primary',
      'button--secondary': type === 'secondary',
      'button--link': type === 'link',
      'button--outline-primary': type === 'outline-primary',
      'button--outline-reversed': type === 'outline-reversed',
      'button--danger': type === 'danger',
      'button--small': size === 'small',
      'button--large': size === 'large',
      'button--block': block,
      'button--icon': iconOnly,
      [UtilitySystem.config.classes.active]: active,
    });

    let markup = '';

    if (route) {
      markup = (
        <Link to={route} className={classes} onClick={this.handleClick} {...opts} title={this.props.title}>
          <span className="button__text-wrapper">{this.props.children}</span>
        </Link>
      );
    } else {
      markup = (
        <button type="button" className={classes} disabled={disabled} onClick={this.handleClick} aria-label={this.props.title} {...opts}>
          <span className="button__text-wrapper">{this.props.children}</span>
        </button>
      );
    }

    return markup;
  }

}

export default Button;
