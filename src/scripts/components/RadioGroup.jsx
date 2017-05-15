import cx    from 'classnames';
import React from 'react';

import { Radio, UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';

class RadioGroup extends React.Component {
  static displayName = 'RhinodioGroup';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    inline: React.PropTypes.bool,
    label: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    selectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  };

  static defaultProps = {
    name: `rhinodioGroup-${Math.floor(Math.random() * 1000000)}`,
  };

  state = {
    selectedValue: '',
  };

  componentWillMount() {
    this.setState({
      selectedValue: this.props.selectedValue,
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedValue !== this.props.selectedValue) {
      this.setState({
        selectedValue: newProps.selectedValue,
      });
    }
  }

  handleChange = (value) => {
    this.setState({
      selectedValue: value,
    });
  };

  renderChildren = () => {
    const { children, name } = this.props;
    const { selectedValue } = this.state;

    let returnChild = null;

    return React.Children.map(children, (child) => {
      if (child.type === Radio) {
        const onChange = () => {
          if (child.props.value) {
            if (this.props.onChange && typeof (this.props.onChange === 'function')) {
              this.handleChange(child.props.value);
              this.props.onChange(child.props.value);
            } else {
              this.handleChange(child.props.value);
            }
          }
        };

        returnChild = React.cloneElement(child, {
          onChange,
          selectedValue,
          name,
        });
      } else {
        returnChild = child;
      }

      return <UtilityListItem>{returnChild}</UtilityListItem>;
    });
  };

  render() {
    const { className, inline, label } = this.props;
    const classes = cx('form__group', className);

    // Show label or not based on prop value
    const showLabel = label ? <label className="u-block">{label}</label> : null; // eslint-disable-line jsx-a11y/label-has-for

    // Wrap items in either `<UtilityInlineGrid>` or `<UtilityList>` based on prop
    const render = inline ?
      <UtilityInlineGrid>{this.renderChildren()}</UtilityInlineGrid>
      : <UtilityList space>{this.renderChildren()}</UtilityList>;

    return (
      <div className={classes}>
        {showLabel}
        {render}
      </div>
    );
  }
}

export default RadioGroup;
