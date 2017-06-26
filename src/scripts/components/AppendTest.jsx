import React from 'react';
import { componentWillAppendToBody } from 'react-append-to-body';

import { Button } from '../components';

class AppendTest extends React.Component {
  static displayName = 'RhinoAppendTest';

  static propTypes = {
    children: React.PropTypes.node,
  };

  state = {
    enabled: false,
  };

  componentDidUpdate() {
    if (this.state.enabled) {
      console.log('enabled');
    } else {
      console.log('disabled');
    }
  }

  toggleEnable = () => {
    this.setState({
      enabled: !this.state.enabled,
    });
  }

  render() {
    const { children } = this.props;
    const { enabled } = this.state;

    console.log(enabled);

    return (
      <div className="append-test">
        {children}
        <Button onClick={this.toggleEnable}>
          { enabled ? 'Disable' : 'Enable' }
        </Button>
      </div>
    );
  }
}

export default componentWillAppendToBody(AppendTest);
