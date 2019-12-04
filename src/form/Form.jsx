import React from 'react';
export default class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.hundkeclick = this.hundkeclick.bind(this);
        this.submit = this.submit.bind(this)
        this.state = {name: ''};
    }
    hundkeclick(e) {
        this.setState({
            name: e.target.value.toUpperCase()
            
        })
    }
    submit(e) {
        e.preventDefault();
        console.log(this.state.name);
    }
    render() {
        
        return <div>
            <form onSubmit={this.submit}>
                <input type='text' value={this.state.name} onChange={this.hundkeclick}/>
                <input type='text' value={this.state.name} onChange={this.hundkeclick}/>
                <input type="submit" value="Отправить" />
            </form>
        </div>
    }
}