import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Avatar extends React.Component {
  static displayName = 'RhinoAvatar';

  static propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'large', 'xlarge']),
    src: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    type: PropTypes.oneOf(['default', 'member']),
  };

  static defaultProps = {
    className: '',
    image: '',
    name: '',
    size: 'default',
    src: '',
    type: 'default',
  };

  state = {
    imageError: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.image) {
      this.setState({
        imageError: false,
      });
    }
  }

  _handleImageError = () => {
    this.setState({ imageError: true });
  };

  render() {
    const { className, image, size, type } = this.props;

    const name = this.props.name ? this.props.name.trim() : '';

    const classes = cx('avatar', className, {
      'avatar--small': size === 'small',
      'avatar--large': size === 'large',
      'avatar--xlarge': size === 'xlarge',
      'avatar--default':  type === 'default',
      'avatar--member': type === 'member',
    });
    const styles = {
      backgroundImage: `url(${image})`,
    };

    // If image exists, use image for background
    if (image && !this.state.imageError) {
      return (
        <figure className={classes} style={styles}>
          <img alt={name} onError={this._handleImageError} style={{ display: 'none' }} src={image} />
        </figure>
      );
    }

    // If no image and no name, use icon
    if (!image && !name) {
      return (
        <figure className={classes}>
          <svg className="avatar__icon"><use xlinkHref="#icon-user" /></svg>
        </figure>
      );
    }

    let splitName = null;
    let initials = null;

    if (name) {
      splitName = name.split(' ');
      initials = splitName[0][0] + splitName[splitName.length - 1][0];
    }

    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={classes}>
        <circle cx="50" cy="50" r="50" />
        <text x="50" y="50" textAnchor="middle" alignmentBaseline="central" fontSize="40">{initials}</text>
      </svg>
    );
  }
}

export default Avatar;
