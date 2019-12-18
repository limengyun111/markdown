import React from 'react';
import $ from 'jquery';

import { Input } from 'antd';
var marked = require('marked')
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
const WH = {
  // position: "absolute",
  // maxWidth: "800px",
  // paddingTop: "30px",
  // marginLeft: "-100px",
  // marginRight: "250px",
  border: "1px solid",
  // outline:"none",
  // display:"none",
}
// const finalContent = {
//   maxWidth: "800px",
//   border:"1px solid",
//   width:"100px",
//   height:"200px",
//   maxWidth: "800px",

//   marginLeft: "260px",
//   marginRight: "250px",
// }
const textStyle = {
  // position: "absolute",
  // maxWidth: "800px",
  maxHeight:"20px",
  // marginBottom:"-80px",
  marginTop: "30px",
  marginLeft: "200px",
  width:"600px",
  
  marginRight: "250px",
  // border:"1px solid",
}
const { TextArea } = Input;

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef()
    this.state = {
      value: '',
    };
  }
  

  onChange = (e) => {
    this.setState({ value: e.target.value });


  }
  onKeyUp = (e)=>{
    console.log("b",this.textInput.current.textContent)
    if(e.keyCode == 13) {
      this.setState(function(prevState, props){
        return {value: this.textInput.current.textContent}
     });
    }
   
    console.log("a",this.state.value)
  }
  createMarkdownPreview = () => {
    return { __html: marked(this.state.value) };
  }
  render() {
   
    const { value } = this.state;

    return (
      <div >

        <textarea value={value}
          onChange={this.onChange}
          style={textStyle}
          >
          
        </textarea>
        <div


          // placeholder="Controlled autosize"
          // autoSize={{ minRows: 0 }}
          // className={this.props.className}
          ref={this.textInput}
          className = {this.props.className }
          style={{marginTop:"0px"}}
          onKeyUp={this.onKeyUp}
          dangerouslySetInnerHTML={this.createMarkdownPreview()}
        contentEditable="true"
        
        />

      </div>
    );
  }
}



export { Section }

