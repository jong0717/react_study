import {Component} from 'react';
import Children from './Children';
class Parent extends Component {
    constructor(props) {
        super(props);
        this.parentsCount = this.parentsCount.bind(this);
        this.state = {
            count : 0
        };
    }

    parentsCount() {
        this.setState({
            count : this.state.count + 1
        });
    };

    render() {
        return (
            <div>
                <h1>하위컴포넌트에서 값 변경하기</h1>
                <Children parentsCount={this.parentsCount}></Children>
                <p>상위 컴포넌트 : {this.state.count}</p>
                <hr />
            </div>
        )
    }
} 

export default Parent;