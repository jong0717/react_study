import './App.css';
import TOC from "./component/TOC";
import Content from "./component/Content"
// import Subject from './component/Subject';
import { Component } from 'react';

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
      ]
    }

  }
  render() {
    console.log('App render');
    let _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this);
    return (
      <div className="App">
          {/* <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}>
          </Subject> */}
          <header>
            <h1><a href="/" onClick={function(e){
              console.log(e);
              // 이벤트 걸떄 사용하는 페이지 전환을 막아주는 preventdefault!! 명령!
              e.preventDefault();
              this.setState({
                mode:'welcome'
              })
              // this.state.mode = 'welcome';
              // 위의 코드는 두가지 문제를 일으킴 bind(this)필요, setState필요
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
          </header>
          <TOC data={this.state.contents}></TOC>
          <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
