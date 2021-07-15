import { Component } from "react";
import Descendant from "./Descendant";
class Children extends Component {
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.state = {
            number: 0
        };
        console.log('자식 컴포넌트 => contructor 호출');
    }
    componentDidMount() {
        console.log('자식 컴포넌트 => componentDidMount 호출');
    }

    componentDidUpdate() {
        console.log('자식 컴포넌트 => componentDidUpdate 호출');
    }

    componentWillUnmount() {
        console.log('자식컴포넌트 => componentWillUnmount 호출');
    }

    handleIncrease() {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        console.log('자식 컴포넌트 => render 호출');
        // console.log(this.props)
        return (
            <div>
                {/* <button onClick={this.props.parentsCount}>자식 컴포넌트 : 1add</button>
                <button onClick={this.handleIncrease}>자식 업데이트 : {this.state.number}</button> */}
                <Descendant />
            </div>
        )
    }
}

export default Children;