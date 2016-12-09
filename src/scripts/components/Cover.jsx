import React              from 'react';
import cx                 from 'classnames';
import { TweenMax, Expo } from 'gsap';
import GSAP               from 'react-gsap-enhancer';

class Cover extends React.Component {
  static displayName = 'RhinoCover';

  static propTypes = {
    children:      React.PropTypes.node,
    className:     React.PropTypes.string,
  };

  componentDidMount() {
    this.addAnimation(this.animateCoverSet);
    this.addAnimation(this.animateCoverIn);
  }


  animateCoverSet = ({ target }) =>
    TweenMax.set(target, {
      display: 'flex',
      opacity: 0,
      scale: 0.98,
    });

  animateCoverIn = ({ target }) =>
    TweenMax.to(target, 0.35, {
      opacity: 1,
      ease: Expo.easeOut,
      scale: 1,
    });

  render() {
    const { children, className } = this.props;
    const classes = cx('cover', className);

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default GSAP()(Cover);
