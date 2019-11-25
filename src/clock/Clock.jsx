import React from 'react';
export default class Clock extends React.Component {
    state = {};
    timerId = null;
    constructor(props) {
        super(props)
        this.state.date = new Date();
    }
    render() {
        return <div>
            <h1>Компонетн часы</h1>
            <span>{this.state.date.toLocaleTimeString()}</span>
        </div>
    }
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
      this.setState({date: new Date()})
    }
}