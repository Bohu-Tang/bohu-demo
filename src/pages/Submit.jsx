import React, { Component } from 'react';
import styles from './submit.less';
import { Button, Input, message } from 'antd';
import { router } from 'umi';

class Submit extends Component {
  state = {
    val1: "curl-sSLhttp://122.23.125.2",
    val2: '',
    m: 0,
    mm: 0,
    s: 0,
    ss: 0,
    time: '',
  };

  goResult = () => {
    if (this.state.val2 != '') {
      clearInterval()
      router.push({
        pathname: '/result',
        state: {
          time: this.state.time,
          val: this.state.val2
        }
      })
    } else {
      message.error('请填写项目git地址！');
    }
  }
  timer = () => {
    let s = 0;
    let ss = 0
    let m = 0;
    let mm = 0
    setInterval(() => {
      ss += 1;
      if (ss > 9) {
        ss = 0;
        s += 1
      }
      if (s >= 6) {
        s = 0
        mm += 1
      }
      if (mm > 9) {
        mm = 0;
        m += 1;
      }
      this.setState({
        s,
        ss,
        mm,
        m,
        time: m + '' + mm + ':' + s + '' + ss
      })
    }, 1000)
  }
  getVal = (event) => {
    this.setState({
      val2: event.target.value
    })
  }
  componentDidMount() {
    this.timer()
  }
  render() {
    return (
      <div className={styles.submit}>
        <div className={styles.content}>
          <div className={styles.title}>TDD-测试驱动开发工程能力认证（初级）</div>
          <div className={styles.timer}><i></i>考试中{this.state.m}{this.state.mm}:{this.state.s}{this.state.ss}</div>
          <p>请复制以下内容到本地电脑终端运行</p>
          <Input placeholder="Basic usage" value={this.state.val1} disabled />
          <br />
          <br />
          <br />
          <p>请在下面填写提交代码的git地址</p>
          <div className={styles.inp}>
            <span>*</span>
            <Input placeholder="Basic usage" placeholder="请输入" onChange={(event) => {
              this.getVal(event)
            }} />
          </div>

          <div className={styles.sub}>
            <Button type="primary" block onClick={() => {
              this.goResult()
            }}>
              提交
          </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Submit