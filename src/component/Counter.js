import { Component } from 'react';

// const Problemmatic = () => {
//     throw (new Error('버그가 나타났다!'));
//     return (
//         <div>
            
//         </div>
//     );
// }
class Counter extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        // state 초기 할당하는 곳 setState 사용안댐
        this.state = {
            number: 0,
            error : false
        }
    }


    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
    handleIncrease() {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease() {
        this.setState({
            number: this.state.number - 1
        });
    }
    componentDidCatch(error, info) {
        console.log('componentDidCatch');
        this.setState({
            error : true
        });
    }
    render() {
        console.log('render')
        if (this.state.error) return (
            <h1>에러발생!</h1>
        );
        console.log(this)
        
        return (
            <div>
                <h1>State</h1>
                <h2>Count</h2>
                <h3>값 : {this.state.number}</h3>
                {/* { this.state.number === 8 && <Problemmatic /> } */}
                <button onClick={this.handleIncrease}>Plus</button>
                <button onClick={this.handleDecrease}>Minus</button>
                <hr />
            </div>
        );
    }
}
export default Counter;