/* eslint no-return-assign:0 */
import cx       from 'classnames';
import React    from 'react';
import TweenMax from 'gsap';

class Cover extends React.Component {
  static displayName = 'RhinoCover';

  static propTypes = {
    children:       React.PropTypes.node,
    className:      React.PropTypes.string,
    isOpen:         React.PropTypes.bool,
    size:           React.PropTypes.string,
  };

  static defaultProps = {
    type:   'default',
    isOpen: false,
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      TweenMax.set('.modal-backdrop', {
        opacity: 0,
      });

      TweenMax.set('#rhino-modal', {
        opacity: 0,
        scale: 0.9
      });

      TweenMax.to('.modal-backdrop', 0.35, {
        opacity: 0.5,
        /* eslint no-undef:0 */
        ease: Expo.easeInOut,
      });

      TweenMax.to('#rhino-modal', 0.35, {
        scale: 1,
        opacity: 1,
        /* eslint no-undef:0 */
        ease: Expo.easeInOut
      });
    }
  }

  render() {
    const props = this.props;
    const { className, size } = props;
    const modalClasses     = cx('modal', className);
    const containerClasses = cx('modal__container', {
      'modal__container--sm': size === 'sm',
      'modal__container--lg': size === 'lg',
    });

    let returnVal = null;

    if (props.isOpen) {
      returnVal = (
        <div id="rhino-modal" className={modalClasses}>
          <div className={containerClasses}>
            {props.children}
          </div>
        </div>
      );
    } else {
      returnVal = null;
    }

    return returnVal;
  }
}

export default Cover;