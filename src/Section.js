import React from 'react';
import CodeMirror from 'react-codemirror';
import $ from 'jquery'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/theme/eclipse.css';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/lib/codemirror.css';
import './myCodemirror.css'


var marked = require('marked')
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,

});
const WH = {
  width: "50%",
  height: "80vh",
  boxSizing: "border-box",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1) inset",
  fontSize: "15px",
  paddingTop: "20px",
  lineHeight: "26px",
}

const finalContent = {
  // position: "absolute",
  right: "15px",
  padding:"15px",
  boxSizing: "border-box",
  // top: "0px",
  minHeight: "80vh",
  width: "100%",
  boxSizing: "border-box",
  // border: "1px solid ",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1) inset",
  margin: "0",
  // overflow: 'hidden',
  // border: "1px solid red"
}
const wrapContent = {
  
  position: "absolute",
  right: "15px",
  boxSizing: "border-box",
  top: "40px",
  height: "80vh",
  width: "48%",
  boxSizing: "border-box",
  // border: "1px solid ",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1) inset",
  margin: "0",
  overflowY: 'scroll',
  // border: "1px solid yellow"
}
// const wrapcodemirror = {
//   border: "1px solid #eee",
//   height: "20vh",
//   left:"10px",
//   width:"48%",
//   top:"40px",
//   boxSizing: "border-box",
//   position: "absolute",
//   borderRadius: "4px",
//   boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1) inset",
//   lineHeight:"25px",
// }

const divWrap = {
  clear: "both",
  paddingLeft: "10px",
  paddingRight: "10px",
  height: "100vh",
}

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.textarea = React.createRef()
    this.wrapdiv = React.createRef()
    this.codemirror = React.createRef()
    this.state = {
      value: ''
    }

  }
  
  createMarkdownPreview = () => {
    return { __html: marked(this.state.value) };
  }

  updateCode = (newCode) => {
    this.setState({
      value: newCode,
    });
  }
  onScroll = (e) => {
    
     this.textarea.current.style.height = e.height + "px"
     this.wrapdiv.current.scrollTop = e.top
  }
  divWheel = (e) =>{
    e.persist()
   
  this.codemirror.current.getCodeMirror().scrollTo(0,e.nativeEvent.target.scrollTop)
  // console.log(this.codemirror.current.getCodeMirror())
    // this.codemirror.current.getCurrentInstance().scrollTo(0,e.pageY)
   
   
  }
  render() {
    const options = {
      theme: 'eclipse',
      mode: 'markdown',
      extraKeys: { "Ctrl": "autocomplete" },
      styleActiveLine: true,
      lineNumbers: true,
      // indentUnit: 2,
      smartIndent: true,

    }

    return (
      <div>
        <div >
          <CodeMirror
            value={''}
            onChange={this.updateCode}
            options={options}
            onScroll={this.onScroll}
            ref = {this.codemirror}
           
          />
        </div>
        <div style={wrapContent} className="wrapdiv markdown-body" ref = {this.wrapdiv} onScroll={this.divWheel}>
          <div
             style={finalContent}
            dangerouslySetInnerHTML={{ __html: marked(this.state.value) }}
            ref={this.textarea}
          >

          </div>
        </div>
      </div>
    );
  }
}



export { Section }

