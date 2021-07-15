import './App.css';
// import TOC from "./component/TOC";
// import Content from "./component/Content"
// import Subject from './component/Subject';
import { Component } from 'react';
// import HelloWorld from "./component/HelloWorld";
// import Counter from "./component/Counter";
import Parent from './component/Parent';
class App extends Component {
  constructor(props) {
    super(props);
    // state 초기화를 위한 작업
    this.state = {
      mode: 'read',
      subject : {title : 'WEB', sub:'World Wide Web!'},
      welcome : {title: 'Welcome', desc: 'Hello, React!!'},
      contents : [
        {id:1, title:'HTML', desc:'HTML is Hyper Text is ...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interative'}
      ],
      selected_content_id : 1,
    }
  }
  render() {
    // console.log('App render');
    // let _title, _desc = null;
    // if (this.state.mode === 'welcome') {
    //   _title = this.state.welcome.title;
    //   _desc = this.state.welcome.desc;
    // } else if (this.state.mode === 'read') {
    //   let i = 0;
    //   while(i < this.state.contents.length) {
    //     let data = this.state.contents[i];
    //     if (data.id === this.state.selected_content_id) {
    //       _title = data.title;
    //       _desc = data.desc;
    //       break;
    //     }
    //     i = i + 1;
    //   }
    // }
    // console.log('render', this);
    return (
      <div className="App">
          {/* <Subject
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            // 이벤트에 함수를 설치
            onChangePage = {function() {
              this.setState({mode:'welcome'});
            }.bind(this)}>
          </Subject>
          <TOC 
          onChangePage = {function(id){
            this.setState({
              mode:'read',
              selected_content_id : Number(id)
            });
          }.bind(this)}
          data = {this.state.contents}
          ></TOC>
          <Content title={_title} desc={_desc}></Content> */}
          {/* <HelloWorld title="helloworld" value="1" name="hong"></HelloWorld> */}
          {/* <Counter></Counter> */}
          <Parent></Parent>
      </div>
    );
  }
}

export default App;
