import { Component } from "react";
class HelloWorld extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Props</h1>
                <h2>title : {this.props.title}</h2>
                <p>value : {this.props.value}</p>
                <p>name : {this.props.name}</p>
                <hr />
            </div>
        );
    }
}
export default HelloWorld;