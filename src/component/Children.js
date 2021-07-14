import { Component } from "react";
class Children extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.props.parentsCount}>자식 컴포넌트 : 1add</button>
                
            </div>
        )
    }
}

export default Children;