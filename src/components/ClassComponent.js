import React from "react";

class CounterParent extends React.Component {
  // the constructor called when a component is created
  constructor(props) {
    super(props);

    // Set state here
    this.state = {
      actionCount: 0,
    };
    this.handleAction = this.handleAction.bind(this);
  }
  handleAction(action) {
    console.log(this);
    console.log("Child says", action);
    this.setState({
      actionCount: this.state.actionCount + 1,
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

function Child({ onAction }) {
  return <button onClick={onAction}>Click me!</button>;
}

export default CounterParent;
