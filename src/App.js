import React from 'react';
import $ from 'jquery'
import { Wrap } from "./Wrap"
import { Section } from "./Section"
import { Aside } from "./Aside"

require("./index.css")
class App extends React.Component {
  componentDidMount() {
    // $("#root").click(() => $(".middle-right").css("display", "none"))
    $(".row").click(() => $(".content-count").css("display", "block"))
    $(".content-count li").click((e) => {
      $(".content-count").css("display", "none")
      $(".row").text("")
      $(".row").prepend(e.target.innerHTML)
    })
    $(".abstruct").click(() => $(".middle-right").css("display", "block"))
    $(".content").keydown(function (e) {
      if (e.keyCode == 13) {
        console.log()
      }
    })
  }
  handleEditChange = (newCode) => {

    this.setState({
      code: newCode,
      hasChanged: true
    });
  }
  render() {
    return (
      <div className="App">
        
        <div className="leftheader">
          <ul className="leftheader-ul">
            <li>Typora
            <ul className="typora">
                <li>关于</li>
                <li>偏好设置
                <span className="iconfont inline-icon">
                    &#xe7a3;
                </span>
                </li>
                <li>检查更新</li>
                <li>服务
                <span className="iconfont inline-icon">
                    &#xe644;
                </span>
                  <ul className="server">
                    <li>没有服务可用</li>
                    <li>服务偏好设置</li>

                  </ul>
                </li>
                <li>隐藏</li>
                <li>隐藏其他 </li>
                <li>全部显示 </li>
                <li>退出
                <span className="iconfont inline-icon">
                    &#xe7a3;Q
                </span>
                </li>
              </ul>
            </li>
            <li>文件
            <ul className="file">
                <li>新建
                <span className="iconfont inline-icon">
                    &#xe7a3;N
                </span>
                </li>
                <li>新建标签
                <span className="iconfont inline-icon">
                    &#xe7a3;T
                </span>
                </li>
                <li style={{ borderBottom: "2px solid rgba(0,0,0,0.1)" }}>新建窗口</li>
                <li>打开</li>
                <li>打开最近文件</li>
                <li>快速打开</li>
              </ul>
            </li>
            <li>编辑
            <ul>
                <li>撤销
                <span className="iconfont inline-icon">
                    &#xe7a3;Z
                </span>
                </li>
                <li style={{ borderBottom: "2px solid rgba(0,0,0,0.1)" }}>重做
                <span className="iconfont inline-icon">
                    &#xe7a3;Z
                </span>
                </li>
                <li>剪贴
                <span className="iconfont inline-icon">
                    &#xe7a3;X
                </span>
                </li>
                <li>粘贴
                <span className="iconfont inline-icon">
                    &#xe7a3;V
                </span>
                </li>
                <li>复制
                <span className="iconfont inline-icon">
                    &#xe7a3;C
                </span>
                </li>

              </ul>
            </li>
            <li>段落
            <ul>
                <li>一级标题
                <span className="iconfont inline-icon">
                    &#xe7a3;1
                </span>
                </li>
                <li>二级标题
                <span className="iconfont inline-icon">
                    &#xe7a3;2
                </span>
                </li>
                <li>三级标题
                <span className="iconfont inline-icon">
                    &#xe7a3;3
                </span>
                </li>
                <li>四级标题
                <span className="iconfont inline-icon">
                    &#xe7a3;4
                </span>
                </li>
                <li>五级标题
                <span className="iconfont inline-icon">
                    &#xe7a3;5
                </span>
                </li>
                <li>六级标题
                <span className="iconfont inline-icon">
                    &#xe7a3;6
                </span>
                </li>
              </ul>
            </li>
            <li>格式
            <ul>
                <li>加粗
                <span className="iconfont inline-icon">
                    &#xe7a3;B
                </span>
                </li>
                <li>斜体
                <span className="iconfont inline-icon">
                    &#xe7a3;III
                </span>
                </li>
                <li>下划线
                <span className="iconfont inline-icon">
                    &#xe7a3;U
                </span>
                </li>
                <li>代码</li>
              </ul>
            </li>
            <li>显示
            <ul>
                <li>显示标签专栏</li>
                <li>显示所有标签页</li>
              </ul>
            </li>
            <li>主题
            <ul>
                <li>Github</li>
                <li>Gothic</li>
                <li>Newsprint</li>
                <li>Night</li>
                <li>Pixyll</li>
                <li>Whitey</li>
              </ul>
            </li>
            <li>窗口
            <ul>
                <li>放大</li>
                <li>最小化
                <span className="iconfont inline-icon">
                    &#xe7a3;M
                </span>
                </li>
              </ul>
            </li>
            <li>帮助
            <ul className="help">
                <li>搜索
                <input type="text"></input>
                </li>
                <li>Quick Start</li>
                <li>Markdown Reference</li>
                <li>Install and Use Pandoc</li>
                <li>Custom Themes</li>
                <li>Use Images in Typora</li>
                <li>More Topics...</li>
              </ul>


            </li>
          </ul>
        </div>
        <div className="rightheader">
          <div className="right-icon">
            <span className="iconfont row">
              &#xe646;
          </span>
            <span className="iconfont abstruct">
              &#xe600;
          </span>
            <span className="iconfont">
              &#xe652;
          </span>
          </div>
          <ul className="content-count">
            <li>分钟</li>
            <li>行</li>
            <li>词</li>
            <li>字符</li>
          </ul>
          {/* <ul className="middle-right">
            <li>大纲</li>
          </ul> */}
          <ul className="right-right"></ul>
        </div>

        <Section
        >
        </Section>

      </div>

    )
  }
}

export default App;
