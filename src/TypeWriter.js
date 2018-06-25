import React from 'react';
import TypeIt from 'typeit';

class TypeWriter extends React.Component {
    constructor (props) {
        super(props);
        this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount () {
        new TypeIt(this.el, this.props)
    }

    render(){
        return <span ref={(el) => { this.el = el; }}>{this.props.children}</span>;
    }
}

export default TypeWriter;