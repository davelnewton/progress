require('rc-progress/assets/index.less');
const Line = require('rc-progress').Line;
const Circle = require('rc-progress').Circle;
const React = require('react');
const ReactDOM = require('react-dom');

const Example = React.createClass({
  getInitialState() {
    return {
      percent: 30,
      color: '#3FC7FA',
    };
  },
  changeState() {
    const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
    this.setState({
      percent: parseInt(Math.random() * 100, 10),
      color: colorMap[parseInt(Math.random() * 3, 10)],
    });
  },
  render() {
    const containerStyle = {
      width: '250px',
    };
    const circleContainerStyle = {
      width: '250px',
      height: '250px',
    };
    return (
      <div>
        <h3>Line Progress {this.state.percent}%</h3>
        <div style={containerStyle}>
          <Line percent={this.state.percent} strokeWidth="4" strokeColor={this.state.color} />
        </div>
        <h3>Circle Progress {this.state.percent}%</h3>
        <div style={circleContainerStyle}>
          <Circle
            percent={this.state.percent}
            strokeWidth="6"
            strokeLinecap="square"
            strokeColor={this.state.color}
          />
        </div>
        <p>
          <button onClick={this.changeState}>Change State</button>
        </p>
      </div>
    );
  },
});

ReactDOM.render(<Example/>, document.getElementById('__react-content'));
