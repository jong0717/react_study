import { Component } from "react"

class Descendant extends Component {
    constructor(props) {
        super(props);
        console.log('후손 컴포넌트 => constructor 호출');
    }

    componentDidMount() {
        console.log('후손 컴포넌트 => componentDidMount 호출');
    }

    componentDidUpdate() {
        console.log('후손 컴포넌트 => componentDidUpdate 호출');
    }

    componentWillUnmount() {
        console.log('후손 컴포넌트 => componentWillUnmount 호출')
    }

    render() {
        console.log('후손 컴포넌트 => render 호출')
        return null;
    }
}

export default Descendant;