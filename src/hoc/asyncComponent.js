// this component should help to only load components asynchronously (i.e. only when it is needed)
import React from 'react';

const asyncComponent = (importComponent) => {
  return class extends React.Component {
    state = {
      component: null
    }

    componentDidMount() {
      importComponent()
        .then(cmp => {
          this.setState({
            component: cmp.default
          })
        });
    }

    render () {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }
}

export default asyncComponent;
