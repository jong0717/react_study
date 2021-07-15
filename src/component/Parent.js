import React, {Component} from 'react';
import Children from './Children';
class Parent extends Component {
    constructor(props) {
        super(props);
        this.parentsCount = this.parentsCount.bind(this);
        this.state = {
            count : 0,
            hasDestroyed : false
        };
        console.log('부모 컴포넌트 => constructor 호출');
    }

    componentDidMount() {
        console.log('부모 컴포넌트 => componentDidMount 호출');
        this.setState({
            hasDestroyed : true
        });
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('부모 컴포넌트 => componentDidUpdate 호출');
    }

    componentWillUnmount() {
        console.log('부모 컴포넌트 => componentWillUnmount 호출');
    }
    parentsCount() {
        this.setState({
            count : this.state.count + 1
        });
    };

    render() {
        console.log('부모 컴포넌트 => render 호출', this.state);
        return (
            <div>
                {/* <h1>하위컴포넌트에서 값 변경하기</h1>
                <Children parentsCount={this.parentsCount}></Children>
                <p>상위 컴포넌트 : {this.state.count}</p>
                <hr /> */}
                <React.Fragment>
                    {this.state.hasDestroyed ? null : <Children />}
                </React.Fragment>
            </div>
        )
    }
} 

export default Parent;