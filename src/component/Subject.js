import React, {Component} from 'react';
class Subject extends Component {
    render() {
      return (
        <header>
            {/* 이벤트가 발생되었을때 함수를 호출 */}
            <h1><a href="/" onClick={function(e){
              // 이벤트 걸떄 사용하는 페이지 전환을 막아주는 preventdefault!! 명령!
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
           {this.props.sub}
        </header>
      );
    }
  }

export default Subject;