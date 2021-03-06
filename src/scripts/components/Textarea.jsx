import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Textarea extends React.Component {
  static displayName = 'RhinoTextarea';

  static propTypes = {
    abbrMaxCharacters: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    explanationMessage: PropTypes.string,
    initialValue: PropTypes.string,
    label: PropTypes.string,
    maxCharacters: PropTypes.number,
    naked: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    rows: PropTypes.number,
    validationMessage: PropTypes.string,
  };

  static defaultProps = {
    abbrMaxCharacters: false,
    label: '',
    maxCharacters: null,
    naked: false,
    name: '',
    placeholder: '',
    required: false,
    rows: 3,
    validationMessage: '',
  };

  state = {
    charactersLeft: '',
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue.trimRight() });
    }

    if (this.props.maxCharacters && this.props.initialValue) {
      this.setState({ charactersLeft: this.props.maxCharacters - this.props.initialValue.length });
    } else if (this.props.maxCharacters) {
      this.setState({ charactersLeft: this.props.maxCharacters });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: nextProps.initialValue,
        charactersLeft: this.props.maxCharacters - nextProps.initialValue.length,
      });
    }
  }

  _handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });

    this.setState({ charactersLeft: this.props.maxCharacters - event.target.value.length });

    if (this.props.onChange && typeof (this.props.onChange === 'function')) {
      this.props.onChange(event.target.id, event.target.value.trimLeft());
    }
  }

  render() {
    const { abbrMaxCharacters, className, disabled, explanationMessage, label, maxCharacters, naked, name, placeholder, required, rows, validationMessage } = this.props;

    const textAreaClasses = cx('form__control', {
      'form__control--error': validationMessage,
      'form__control--naked': naked,
    });
    const formGroupClasses = cx('form__group', className);
    const characterCountClasses = cx('form__character-count', {
      'form__character-count--danger': this.state.charactersLeft < 11,
    });

    const showValidationMessage = () => {
      if (validationMessage) {
        return <div className="form__validation-message">{validationMessage}</div>;
      }

      return false;
    };

    const showExplanationMessage = () => {
      if (explanationMessage) {
        return <div className="form__explanation-message">{explanationMessage}</div>;
      }

      return false;
    };

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label} {required ? <span className="form__asterisk">*</span> : null}</label>;
      }

      return false;
    };

    const showCharacterCount = () => {
      if (maxCharacters) {
        return <div className={characterCountClasses}>{this.state.charactersLeft} {!abbrMaxCharacters ? <span>character{(this.state.charactersLeft !== 1) ? 's' : ''} left</span> : null}</div>;
      }

      return false;
    };

    return (
      <div className={formGroupClasses}>
        {showLabel()}
        <textarea id={name} className={textAreaClasses} rows={rows} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} disabled={disabled} />
        <div className="form__control-footer">
          {(showValidationMessage() || showExplanationMessage())
            ? <div>
              {showValidationMessage()}
              {showExplanationMessage()}
            </div>
            : ''}
          {showCharacterCount()}
        </div>
      </div>
    );
  }
}

export default Textarea;
